// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '/var/run/postgresql',
      user: 'postgres',
      database: 'humanitaria',
      charset: 'utf8'
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: 'humanitaria',
      user:     'postgres',
      password: ''
    }
  }
};
