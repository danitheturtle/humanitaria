import axios from 'axios';
import { osmToLocationType } from './models';

export const getLocationNear = async (lat, lon, zoom = 18) => {
  debugger;
  let foundLocation = {};
  try {
    foundLocation = await axios({
      method: 'get',
      baseURL: process.env.NOMINATIM_ORIGIN,
      url: process.env.NOMINATIM_REVERSE_ENDPOINT,
      params: {
        extratags: '1',
        format: 'json',
        polygon_text: '1',
        namedetails: '1',
        addressdetails: '1',
        countrycodes: 'us',
        lat,
        lon,
        zoom
      }
    });
  } catch (e) {
    debugger;
    console.error(e);
  }
  return osmToLocationType(foundLocation?.data);
}

export const searchLocations = async (query, limit, excludedPlaceIds = []) => {
  debugger;
  let osmResultsByRelevance = {data: []};
  try {
    osmResultsByRelevance = await axios({
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
  } catch (e) {
    debugger;
    console.error(e);
  }
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
    data.forEach(loc => { fetchedPlaceIds.push(loc.placeId); });
  }
  const hasNextPage = data.length > first+1;
  data = hasNextPage ? data.slice(!cursor ? 0 : 1, first+1) : data;
  if (data.length < 1) {
    return { data: [], hasNextPage: false, endCursor: '' };
  }
  //de-duplicate
  const uniqueOSMIDs = new Set();
  data = data.filter(locObj => {
    if (uniqueOSMIDs.has(locObj.id)) return false;
    uniqueOSMIDs.add(locObj.id);
    return true;
  });
  return {
    data: data,
    hasNextPage,
    endCursor: data[data.length-1].placeId
  }
}

// OSM id lookup only works if you prepend the first letter of the osm_type to the osm_id (see line 4). osm_ids can lookup multiple at once - seperate ids with comma
export const getLocations = async (osmIDs = []) => {
  debugger;
  let osmResults = [];
  try {
    let { data: osmResultsResponse } = await axios({
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
    osmResults = osmResultsResponse;
  } catch (e) {
    debugger;
    console.error(e);
  }
  return osmResults.map(osmToLocationType);
}
export const getLocation = async (osmID) => {
  const [result] = await getLocations([osmID]);
  return result;
}