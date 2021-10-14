import axios from 'axios';

const searchURL = query => `http://localhost:8088/search.php?extratags=1&format=json&polygon_text=1&namedetails=1&addressdetails=1&q=${query}`;
const lookupURL = lookupID => `http://localhost:8088/lookup.php?extratags=1&format=json&polygon_text=1&namedetails=1&addressdetails=1&osm_ids=${lookupID}`;
// OSM id lookup only works if you prepend the first letter of the osm_type to the osm_id. osm_ids can lookup multiple at once - seperate ids with comma

const osmToLocation = (osmData) => {
  const osmTypeChar = osmData.osm_type[0]?.toUpperCase(); // node, way, or relation. N | W | R
  const osmID = osmData.osm_id;
  
  const resolvedName = osmData.address?.place || osmData.namedetails?.name || osmData.display_name;
  
  const resolvedHouseNum = osmData.address?.house_number ? osmData.address.house_number + ' ' : '';
  const resolvedAddress = resolvedHouseNum + (osmData.address?.road ? osmData.address.road : '');
  
  return {
    id: `${osmTypeChar}${osmID}`,
    lat: osmData.lat,
    lon: osmData.lon,
    displayName: resolvedName,
    category: osmData.class,
    subCategory: osmData.type,
    boundingBox: osmData.boundingBox,
    geotext: osmData.geotext,
    address: {
      label: osmData.address?.place ?? '',
      address: resolvedAddress,
      neighborhood: osmData.address?.suburb ?? '',
      city: osmData.address?.city,
      county: osmData.address?.county ?? '',
      state: osmData.address?.state,
      zip: osmData.address?.postcode ?? '',
      country: osmData.address?.country,
      countryCode: osmData.address?.country_code
    }
  }
}

export const searchLocation = async (query) => {
  const osmResultsByRelevance = await axios({
    method: 'get',
    baseURL: process.env.NOMINATIM_ORIGIN,
    url: process.env.NOMINATIM_SEARCH_ENDPOINT,
    params: {
      extratags: '1',
      format: 'json',
      polygon_text: '1',
      namedetails: '1',
      addressdetails: '1',
      q: query
    }
  });
  return osmToLocation(osmResultsByRelevance.data[0]);
}

export const lookupLocation = async (osmID) => {
  const osmResult = await axios({
    method: 'get',
    baseURL: process.env.NOMINATIM_ORIGIN,
    url: process.env.NOMINATIM_LOOKUP_ENDPOINT,
    params: {
      extratags: '1',
      format: 'json',
      polygon_text: '1',
      namedetails: '1',
      addressdetails: '1',
      osm_ids: osmID
    }
  });
  return osmToLocation(osmResultsByRelevance.data[0])
}