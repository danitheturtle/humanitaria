"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuerySearchLocationsEdge = exports.QuerySearchLocationsConnection = exports.LocationType = exports.BoundingBoxType = exports.AddressType = void 0;
var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");
var _nodeDefinitions = require("../graph/nodeDefinitions");
const LocationType = new _graphql.GraphQLObjectType({
  name: 'Location',
  interfaces: [_nodeDefinitions.nodeInterface],
  fields: () => ({
    id: (0, _graphqlRelay.globalIdField)('Location'),
    placeId: {
      type: _graphql.GraphQLString
    },
    lat: {
      type: _graphql.GraphQLString
    },
    lon: {
      type: _graphql.GraphQLString
    },
    boundingBox: {
      type: BoundingBoxType
    },
    category: {
      type: _graphql.GraphQLString
    },
    subCategory: {
      type: _graphql.GraphQLString
    },
    geotext: {
      type: _graphql.GraphQLString
    },
    address: {
      type: AddressType
    }
  })
});
exports.LocationType = LocationType;
const AddressType = new _graphql.GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    label: {
      type: _graphql.GraphQLString
    },
    address: {
      type: _graphql.GraphQLString
    },
    district: {
      type: _graphql.GraphQLString
    },
    city: {
      type: _graphql.GraphQLString
    },
    county: {
      type: _graphql.GraphQLString
    },
    state: {
      type: _graphql.GraphQLString
    },
    zip: {
      type: _graphql.GraphQLString
    },
    country: {
      type: _graphql.GraphQLString
    },
    countryCode: {
      type: _graphql.GraphQLString
    }
  })
});
exports.AddressType = AddressType;
const BoundingBoxType = new _graphql.GraphQLObjectType({
  name: 'BoundingBox',
  fields: () => ({
    x1: {
      type: _graphql.GraphQLString
    },
    y1: {
      type: _graphql.GraphQLString
    },
    x2: {
      type: _graphql.GraphQLString
    },
    y2: {
      type: _graphql.GraphQLString
    }
  })
});
exports.BoundingBoxType = BoundingBoxType;
const {
  connectionType: QuerySearchLocationsConnection,
  edgeType: QuerySearchLocationsEdge
} = (0, _graphqlRelay.connectionDefinitions)({
  name: 'SearchLocations',
  nodeType: LocationType
});
exports.QuerySearchLocationsEdge = QuerySearchLocationsEdge;
exports.QuerySearchLocationsConnection = QuerySearchLocationsConnection;