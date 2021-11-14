# humanitaria

This readme will help you get the dev version up and running. If you're interested in the 
motivations behind this project,check out [/r/humanitaria](https://www.reddit.com/r/humanitaria).

#### Project Architecture Overview
There are a few workspaces in this repo and that number will likely increase as the platform 
requires more features. Workspaces are: /api, /db, /env, and /web.
* /api - The main graphql-relay server. Relay is a superset of the 
graphql protocol and was challenging to find backend documentation for. Everything in this app is
done through graphql queries/mutations/subscriptions, letting us batch an entire page of component 
requests. `session.js` is where login information gets stored in a jwt. `/context` contains auth
information that is useful when writing graphql. It lets me authenticate anywhere, no matter if its
a subscription or a normal HTTP request. Down the line, I'll add additional features for roles and
levels of authentication - stuff like that.

* /db - Using knex.js to write postgres schema and migrations using javascript. `/migrations` 
contains the code that sets up the database itself. `/seeds` contains what it sounds like: test
data.

* /env - just using dotenv to have different environment configurations. The names I've chosen for 
environments are `development`, `test`, and `production`. To create an extention to the default
env for a specific environment, add a file to the env project called `.env.${environment}`

* /web - React and relay frontend, with a few helper extensions for socket-based subscriptions.
Relay as a whole is very complex, but also incredibly performant, rewarding, and the bundle size is 
tiny. [This is the best one-stop-shop I can find for learning.](https://mrtnzlml.com/docs/relay). 
There is a custom router that fetches a page's root query and hydrates all the components. The app
makes heavy use of the `<React.Suspense>` component, and the material-ui `<Skeleton>` to do loading
states. Usually if a component can suspend, it also exports its own placeholder. The UI is built 
entirely with a custom styled version material-ui. All the settings for that are in `style.js`, and
you'll see the use of the `useTheme()` and `makeStyles()` functions throughout the component library
_____

### Yarn Installation
This repo requires yarn 2's "Plug and Play" functionality. Ideally the repo should be ready to run 
when you download it, but run `yarn install` from the root just in case.
_____
### Database Setup
You'll need a local [postgres database](https://www.google.com/search?q=how+to+set+up+postgresql). 
The default .env file in /env/.env has all the variables that need setting up. The database and 
schema and all that is handled using knex.js, so all you need is a user named 'postgres' or whatever 
you want, and then set up the env vars to point there.

Next you'll want to run the database setup command. This will set up the humanitaria database and 
populate your local postgres instance with test data (hopefully! still in alpha so I make no 
promises).
```
yarn workspace db reset --seed
```
Next you can start the database
```
yarn workspace db start
```
If you set up a password, enter that here. Congrats! The database is working
_____
### Map Setup
This is by far the most complex part of setup. It took a few weeks for me to put this together. At 
a minimum, this download will take a few days. Depending on your cpu/ram, building the actual 
nominatim database will take even longer! Its incredibly powerful though. I did this setup on 
ubuntu but I'm sure you could get it working on a different distro. Eventually I'll have a docker 
container you can download and this won't be necessary :)

If you're here to get running quickly just to check out the project, open street map has their own
instance up and running with a smaller dataset. You're not allowed to use it on deployed code, so 
please just use it for development:
```
https://nominatim.openstreetmap.org/search?extratags=1&format=json&polygon_text=1&namedetails=1&addressdetails=1&q=Main%20Street
```
To understand the queryparams, check out [the nominatim docs](https://nominatim.org/release-docs/latest/api/Search/). 
You should be able to set up the .env variables so the entire project points to the public nominatim
server. Make sure to remove `.php` from the nominatim route variables

##### building your own local nominatim instance
check here for requirements and database config: 
* https://nominatim.org/release-docs/latest/admin/Installation/#tuning-the-postgresql-database
* https://nominatim.org/release-docs/latest/appendix/Install-on-Ubuntu-20/

add a linux user for nominatim
```
sudo useradd -d /srv/nominatim -s /bin/bash -m nominatim
```

add these to `.bashrc`
```
nano /srv/nominatim/.bashrc
export USERNAME=nominatim
export USERHOME=/srv/nominatim
```

make sure no sudo permissions are needed
```
chmod a+x $USERHOME
```

Wherever you have your postgres instance, add 2 users for nominatim. One is an admin, one is for 
the API to use for reading data. From the API's perspective, this database is read-only. It 
takes forever to update so I'm only planning to do it once a year
```
sudo -u postgres createuser -s $USERNAME
sudo -u postgres createuser www-data
```
download the latest nominatim source and supplimental data
```
cd $USERHOME
git clone --recursive git://github.com/openstreetmap/Nominatim.git
cd Nominatim
wget -O data/country_osm_grid.sql.gz https://www.nominatim.org/data/country_grid.sql.gz
```
Build from source and install (installs in /usr/bin):
```
cd $USERHOME
mkdir build
cd build
cmake ../Nominatim 
make
sudo make install
```
Download TIGER data from the us census website and convert using this repo. This will take a while:
* https://github.com/osm-search/TIGER-data

Create a project directory and add `PROJECT_DIR` to `.bashrc`:
```
cd /srv/nominatim
mkdir map-server
nano /srv/nominatim/.bashrc
export PROJECT_DIR=~/map-server
```
Copy the `env.default` file from `$USERHOME/Nominatim` to `/map-server` and rename it `.env`
Edit `.env`, add or update the following:
```
NOMINATIM_DATABASE_DSN="pgsql:dbname=nominatim;user=nominatim;password=PASSWORD"
NOMINATIM_DATABASE_WEBUSER="www-data"
NOMINATIM_IMPORT_STYLE=extra
NOMINATIM_USE_US_TIGER_DATA=yes
NOMINATIM_FLATNODE_FILE="/srv/nominatim/map-server/flatnode.file"
NOMINATIM_IMPORT_STYLE="settings/import-extratags.style"
```
Go to the project dir and download map data from geofabrik and others. This will take a while:
```
cd $PROJECT_DIR
wget https://www.nominatim.org/data/us_postcode_data.sql.gz
wget https://www.nominatim.org/data/wikimedia-importance.sql.gz
wget https://download.geofabrik.de/north-america-latest.osm.pbf
```
Import the downloaded geofabrik data. This also takes a long time, both CPU and RAM bottlenecked
```
nominatim import --osm-file north-america-latest.osm.pbf 2>&1 | tee setup.log
```
Import tiger data. This also takes a long time, both CPU and RAM bottlenecked
```
nominatim add-data --tiger-data ./TIGER-data/
nominatim refresh --functions
```
Import/refresh wiki data from wikipedia
```
nominatim special-phrases --import-from-wiki
```
Whew! You should now have a database for nominatim running! You can test it with a local query:
```
http://localhost:8088/search.php?extratags=1&format=json&polygon_text=1&namedetails=1&addressdetails=1&q=Main%20Street
```
_____
### Running Everything
Running everything is fairly trivial now. You'll need 3 terminal tabs, or you can use something like
concurrently to run the commands in the same view.

First Terminal from root of project (assuming you created your nominatim user in the same linux instance as the git repo
and postgres db):
```
yarn workspace db start
su - nominatim
cd map-server
nominatim serve
```
Second Terminal from root of project:
```
yarn workspace api start
```
Third Terminal from root of project:
```
yarn workspace web start
```
