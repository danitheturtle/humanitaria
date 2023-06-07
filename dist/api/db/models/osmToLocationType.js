"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.osmToLocationType = void 0;
const categories = {
  locality: {
    'country': ['place:country'],
    'state': ['extratags:linked_place:state', 'extratags:place:state', 'place:region', 'place:state'],
    'county': ['extratags:linked_place:county', 'place:county', 'place:municipality'],
    'city': ['extratags:place:city', 'extratags:linked_place:city', 'extratags:linked_place:village', 'extratags:linked_place:hamlet', 'extratags:linked_place:town', 'extratags:place:town', 'extratags:place:village', 'place:hamlet', 'place:village', 'place:town', 'place:city', 'place:township'],
    'postcode': ['place:postcode', 'boundary:postal_code'],
    'district': ['extratags:place:borough', 'place:neighbourhood', 'place:suburb', 'place:quarter', 'place:borough', 'place:district', 'place:subdivision', 'place:subdistrict'],
    'other': ['place:locality', 'place:allotments', 'boundary:administrative', 'boundary:civil']
  },
  place: {
    'farm': ['place:farm', 'building:farm_auxiliary', 'building:barn', 'building:greenhouse', 'building:farm', 'building:stable', 'building:silo', 'building:cowshed', 'building:sty', 'service:irrigation', 'landuse:farmland', 'landuse:orchard', 'landuse:farmyard', 'landuse:vineyard', 'landuse:greenhouse_horticulture', 'landuse:aquaculture', 'landuse:plant_nursery', 'landuse:flowerbed', 'landuse:farm', 'landuse:salt_pond'],
    'park': ['boundary:national_park', 'landuse:village_green', 'landuse:recreation_ground', 'landuse:conservation', 'amenity:community_centre'],
    'indigenousLand': ['boundary:aboriginal_lands'],
    'retail': ['building:retail', 'landuse:retail'],
    'housing': ['place:house', 'place:isolated_dwelling', 'building:house', 'building:residental', 'building:apartments', 'building:hut', 'building:semidetached_house', 'building:cabin', 'building:static_caravan', 'building:bungalow', 'building:boathouse', 'building:dormitory', 'building:allotment_house', 'building:houseboat', 'landuse:residental'],
    'government': ['boundary:local_authority', 'building:civic', 'building:public', 'building:storage_tank', 'building:transportation', 'building:government', 'landuse:military', 'amenity:townhall', 'address:military:*'],
    'commercial': ['building:commercial', 'building:office', 'landuse:commercial', 'address:office:*', 'address:shop:*', 'address:tourism:*'],
    'industry': ['boundary:forestry', 'building:industrial', 'building:warehouse', 'building:manufacture', 'building:slurry_tank', 'service:yard', 'service:resource_extraction', 'service:utility', 'landuse:industrial', 'landuse:quarry', 'landuse:construction', 'landuse:logging'],
    'religious': ['boundary:religious_administration', 'boundofficeary:civil_parish', 'boundary:historic_parish', 'building:church', 'building:chapel', 'building:mosque', 'building:temple', 'landuse:religious', 'amenity:place_of_worship'],
    'other': ['place:plot', 'place:city_block', 'place:square', 'place:block', 'place:unknown', 'place:yes', 'place:department', 'boundary:protected_area', 'boundary:landuse', 'boundary:marker', 'boundary:political', 'boundary:historic', 'boundary:lot', 'boundary:census', 'boundary:place', 'boundary:yes', 'building:yes', 'building:garage', 'building:detached', 'building:shed', 'building:roof', 'building:terrace', 'building:garages', 'building:construction', 'building:service', 'building:ruins', 'building:collapsed', 'building:bunker', 'building:damaged', 'building:kiosk', 'building:grandstand', 'building:no', 'waterway:dam', 'landuse:cemetary', 'landuse:garages', 'landuse:landfill', 'address:place:*']
  },
  transit: {
    'transitStop': ['highway:bus_stop', 'highway:stop', 'building:hangar', 'building:train_station', 'waterway:lock_gate', 'waterway:dock', 'waterway:boatyard', 'waterway:sluice_gate', 'service:bus', 'amenity:bicycle_parking', 'railway:platform', 'railway:station', 'railway:stop', 'railway:tram_stop', 'railway:subway_entrance'],
    'road': ['highway:residential', 'highway:service', 'highway:track', 'highway:tertiary', 'highway:secondary', 'highway:primary', 'highway:turning_circle', 'highway:living_street', 'highway:trunk', 'highway:motorway', 'highway:motorway_link', 'highway:trunk_link', 'highway:primary_link', 'highway:secondary_link', 'highway:tertiary_link', 'highway:motorway_junction', 'highway:turning_loop', 'highway:road', 'service:busway', 'service:commuter', 'landuse:highway'],
    'cycleway': ['highway:cycleway'],
    'footpath': ['highway:footway', 'highway:path', 'highway:steps', 'highway:pedestrian', 'service:alley', 'footway:sidewalk', 'footway:crossing', 'footway:access_aisle', 'footway:link', 'footway:path'],
    'railroad': ['landuse:railway', 'railway:rail', 'railway:level_crossing', 'railway:switch', 'railway:abandoned', 'railway:signal', 'railway:buffer_stop', 'railway:crossing', 'railway:disused', 'railway:tram', 'railway:subway', 'railway:narrow_gauge', 'railway:razed', 'railway:halt', 'railway:light_rail', 'railway:construction', 'railway:tram_level_crossing', 'railway:tram_crossing', 'address:railway:*'],
    'waterway': ['boundary:maritime', 'waterway:canal', 'waterway:fairway', 'waterway:derelict_canal', 'waterway:yes'],
    'other': ['highway:unclassified', 'highway:crossing', 'highway:construction', 'service:emergency_access']
  },
  natural: {
    'water': ['natural:water', 'natural:spring', 'natural:bay', 'waterway:artificial', 'waterway:pond', 'landuse:reservoir'],
    'flowingWater': ['waterway:stream', 'waterway:river', 'waterway:waterfall', 'waterway:rapids', 'waterway:tidal_channel', 'waterway:brook', 'waterway:stream_end'],
    'forest': ['boundary:forest_compartment', 'boundary:forest', 'natural:tree', 'natural:wood', 'natural:scrub', 'natural:tree_row', 'natural:shrub', 'landuse:forest'],
    'field': ['place:field', 'nature:grassland', 'landuse:grass', 'landuse:meadow'],
    'beach': ['natural:beach'],
    'glacier': ['natural:glacier'],
    'landShape': ['place:islet', 'place:island', 'place:archipelago', 'place:peninsula', 'natural:coastline', 'natural:peak', 'natural:cliff', 'natural:ridge', 'natural:land', 'natural:shingle', 'natural:saddle', 'natural:valley', 'natural:crevasse', 'natural:cape', 'natural:hill', 'natural:fell', 'landuse:basin'],
    'cave': ['natural:cave_entrance'],
    'other': ['boundary:natural', 'natural:wetland', 'natural:bare_rock', 'natural:sand', 'natural:heath', 'natural:scree', 'natural:rock', 'natural:stone', 'natural:reef', 'waterway:drystream']
  },
  amenity: {
    'parking': ['building:carport', 'building:parking', 'service:driveway', 'service:parking_aisle', 'amenity:parking', 'amenity:parking_space'],
    'food': ['building:supermarket', 'service:drive-through', 'amenity:restaurant', 'amenity:cafe', 'amenity:fast_food', 'amenity:vending_machine'],
    'school': ['amenity:school', 'building:school', 'building:university', 'building:kindergarten', 'building:college', 'amenity:kindergarten'],
    'fuel': ['waterway:fuel', 'amenity:fuel'],
    'shelter': ['building:hotel', 'amenity:shelter'],
    'toilets': ['building:toilets', 'amenity:toilets'],
    'drinkableWater': ['amenity:drinking_water', 'amenity:fountain'],
    'bar': ['amenity:bar', 'amenity:pub'],
    'medicalCare': ['boundary:health', 'building:hospital', 'amenity:pharmacy', 'amenity:hospital', 'amenity:clinic', 'amenity:doctors', 'address:emergency:*'],
    'atm': ['amenity:atm'],
    'policeDepartment': ['amenity:police'],
    'fireDepartment': ['amenity:fire_station']
  },
  other: {
    'other': 'other'
  }
};
const lookupCategory = osmData => {
  const catEntries = Object.entries(categories);
  for (let i = 0; i < catEntries.length; i++) {
    const category = catEntries[i][0];
    const subCatEntries = Object.entries(catEntries[i][1]);
    for (let j = 0; j < subCatEntries.length; j++) {
      const subCategory = subCatEntries[j][0];
      const osmDataPaths = subCatEntries[j][1];
      for (let k = 0; k < osmDataPaths.length; k++) {
        const osmPath = osmDataPaths[k];
        const pathParts = osmPath.split(':');
        if (pathParts[0] === 'extratags') {
          var _osmData$extratags;
          if (pathParts[2] === (osmData === null || osmData === void 0 ? void 0 : (_osmData$extratags = osmData.extratags) === null || _osmData$extratags === void 0 ? void 0 : _osmData$extratags[pathParts[1]])) {
            return [category, subCategory];
          }
        } else if (pathParts[0] === 'address') {
          var _osmData$address;
          if (!!(osmData !== null && osmData !== void 0 && (_osmData$address = osmData.address) !== null && _osmData$address !== void 0 && _osmData$address[pathParts[1]])) {
            return [category, subCategory];
          }
        } else if (osmData.class === pathParts[0] && osmData.type === pathParts[1]) {
          return [category, subCategory];
        }
      }
    }
  }
  return ['other', 'other'];
};
const osmToAddress = osmData => {
  const ad = (osmData === null || osmData === void 0 ? void 0 : osmData.address) || {};
  const et = (osmData === null || osmData === void 0 ? void 0 : osmData.extratags) || {};
  const label = ad.place;
  const houseNum = ad.house_number || ad.house_name || ad.place;
  const road = ad.road;
  const district = ad.neighbourhood || ad.suburb || ad.district || ad.borough || ad.subdivision || ad.city_district || ad.allotments || ad.quarter;
  const city = ad.hamlet || ad.municipality || ad.town || ad.village || ad.city;
  const zip = ad.postcode;
  const county = ad.county || ad.state_district;
  const state = ad.state || ad.region;
  const country = ad.country;
  const countryCode = ad.country_code;
  const resolvedAddressLine = houseNum ? `${houseNum} ${road}` : road;
  return {
    label,
    address: resolvedAddressLine,
    district,
    city,
    county,
    state,
    zip,
    country,
    countryCode
  };
};
const osmToLocationType = osmData => {
  var _osmData$osm_type, _osmData$osm_type$;
  const [resolvedCategory, resolvedSubCategory] = lookupCategory(osmData);
  const resolvedAddress = osmToAddress(osmData);
  const osmTypeChar = resolvedSubCategory === 'postcode' ? 'P' : (_osmData$osm_type = osmData.osm_type) === null || _osmData$osm_type === void 0 ? void 0 : (_osmData$osm_type$ = _osmData$osm_type[0]) === null || _osmData$osm_type$ === void 0 ? void 0 : _osmData$osm_type$.toUpperCase(); // node, way, or relation. N | W | R
  const osmID = resolvedSubCategory === 'postcode' ? resolvedAddress.zip : osmData.osm_id;
  return {
    id: `${osmTypeChar}${osmID}`,
    placeId: `${osmData.place_id}`,
    lat: osmData.lat,
    lon: osmData.lon,
    category: resolvedCategory,
    subCategory: resolvedSubCategory,
    boundingBox: {
      x1: osmData.boundingbox[0],
      x2: osmData.boundingbox[1],
      y1: osmData.boundingbox[2],
      y2: osmData.boundingbox[3]
    },
    geotext: osmData.geotext,
    address: resolvedAddress
  };
};

// const schema = {
//   place_id,
//   osm_type: 'node, relation, way', // place=postcode does not have an OSM type
//   osm_id,
//   boundingBox: [
//     0, 1, 2, 3
//   ],
//   lat,
//   lon,
//   display_name,
//   'class/type pairs': {},
//   //address is tiered, with multiple values per tier
//   address: {
//     0: 'continent',
//     1: 'country, country_code',
//     2: 'region, state, state_district, county',
//     3: 'municipality, city, town, village',
//     4: 'city_district, district, borough, suburb, subdivision',
//     5: 'hamlet, croft, isolated_dwelling',
//     6: 'neighbourhood, allotments, quarter',
//     7: 'city_block, residental, farm, farmyard, industrial, commercial, retail',
//     8: 'road',
//     9: 'house_number, house_name',
//     10: 'emergency, historic, military, natural, landuse, place, railway, man_made, aerialway, boundary, amenity, aeroway, club, craft, leisure, office, mountain_pass, shop, tourism, bridge, tunnel, waterway'
//   }
// }
exports.osmToLocationType = osmToLocationType;