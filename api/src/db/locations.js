import axios from 'axios';

const osmToLocationType = (osmData) => {
  const osmTypeChar = osmData.osm_type?.[0]?.toUpperCase(); // node, way, or relation. N | W | R
  const osmID = osmData.osm_id;
  
  const resolvedName = osmData.address?.place || osmData.namedetails?.name || osmData.display_name;
  
  const resolvedHouseNum = osmData.address?.house_number ? osmData.address.house_number + ' ' : '';
  const resolvedAddress = resolvedHouseNum + (osmData.address?.road ? osmData.address.road : '');
  
  return {
    id: `${osmTypeChar}${osmID}`,
    placeId: `${osmData.place_id}`,
    lat: osmData.lat,
    lon: osmData.lon,
    displayName: resolvedName,
    category: osmData.class,
    subCategory: osmData.type,
    boundingBox: osmData.boundingBox,
    geotext: osmData.geotext,
    address: {
      address: resolvedAddress,
      zip: osmData.address?.postcode,
      state: osmData.address?.state,
      country: osmData.address?.country,
      countryCode: osmData.address?.country_code,
      label: osmData.address?.place ?? '',
      suburb: osmData.address?.suburb ?? '',
      city: osmData.address?.city ?? '',
      county: osmData.address?.county ?? '',
    }
  }
}

export const searchLocations = async (query, limit, excludedPlaceIds = []) => {
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
      limit: String(limit),
      exclude_place_ids: excludedPlaceIds.join(','),
      countrycodes: 'us',
      q: query
    }
  });
  //TODO: zip codes can have undefined osm_type/id. They aren't actually OSM objects. If the only result is a zip code, omit it and search the zip code instead
  return osmResultsByRelevance.data.map(osmToLocationType);
}

export const getSearchLocationsConnection = async (cursor, first, query) => {
  const limit = cursor ? 20 : (first > 50 ? 50 : first);
  const fetchedPlaceIds = [];
  let data = [];
  //While there isn't enough data
  while (data.length < first+1) {
    //add additional results to the loc data
    const nextLocations = await searchLocations(query, limit, fetchedPlaceIds)
    if (nextLocations.length === 0) break;
    data = data.concat(nextLocations);
    //if function called with a cursor (past the start of the search)
    if (cursor) {
      //cut data that comes before the cursor
      const cursorIndex = data.reduce((foundIndex, loc, i) => {
        if (foundIndex > -1) return foundIndex;
        if (cursor === loc.placeId) return i;
        //not at the cursor yet but these will be dropped, add this to the list of already-fetched objects
        fetchedPlaceIds.push(loc.placeId);
      }, -1);
      if (cursorIndex === undefined) {
        data.forEach(loc => { fetchedPlaceIds.push(loc.placeId); });
        data = [];
      } else {
        data = data.slice(cursorIndex);
      }
    }
    //add the rest of the locations to the already-fetched index
    data.forEach(loc => { fetchedPlaceIds.push(loc.placeId); })
  }
  const hasNextPage = data.length > first+1;
  data = hasNextPage ? data.slice(cursor === undefined ? 0 : 1, first+1) : data;
  if (data.length < 1) {
    return { data: [], hasNextPage: false, endCursor: '' };
  }
  return {
  //TODO: zip codes can have undefined osm_type/id. They aren't actually OSM objects. If the only result is a zip code, omit it and search the zip code instead
    data: data.filter(locObj => locObj.subCategory !== 'postcode'),
    hasNextPage,
    endCursor: data[data.length-1].placeId
  }
}

// OSM id lookup only works if you prepend the first letter of the osm_type to the osm_id (see line 4). osm_ids can lookup multiple at once - seperate ids with comma
export const getLocations = async (osmIDs = []) => {
  const { data: osmResults } = await axios({
    method: 'get',
    baseURL: process.env.NOMINATIM_ORIGIN,
    url: process.env.NOMINATIM_LOOKUP_ENDPOINT,
    params: {
      extratags: '1',
      format: 'json',
      polygon_text: '1',
      namedetails: '1',
      addressdetails: '1',
      osm_ids: osmIDs.join(',')
    }
  });
  return osmResults.map(osmToLocationType);
}
export const getLocation = async (osmID) => {
  const [result] = await getLocations([osmID]);
  return result;
}