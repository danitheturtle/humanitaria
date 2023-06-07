"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchLocations = exports.locationNear = exports.location = void 0;
var _graphql = require("graphql");
var _graphqlRelay = require("graphql-relay");
var _utils = require("../graph/utils");
var _types = require("../types");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const searchLocations = {
  type: _types.QuerySearchLocationsConnection,
  args: {
    ..._graphqlRelay.forwardConnectionArgs,
    search: {
      type: _graphql.GraphQLString
    }
  },
  resolve: async (_, args, ctx) => {
    const query = args.search;
    const dbResult = await _db.default.getSearchLocationsConnection(args.after, args.first, query);
    return {
      pageInfo: {
        hasNextPage: dbResult.hasNextPage,
        endCursor: dbResult.endCursor
      },
      edges: dbResult.data.map(loc => ({
        cursor: loc.placeId,
        node: loc
      }))
    };
  }
};
exports.searchLocations = searchLocations;
const locationNear = {
  type: _types.LocationType,
  args: {
    input: {
      type: new _graphql.GraphQLInputObjectType({
        name: 'locationNearInput',
        fields: {
          lat: {
            type: _graphql.GraphQLString
          },
          lon: {
            type: _graphql.GraphQLString
          },
          zoom: {
            type: _graphql.GraphQLInt
          }
        }
      })
    }
  },
  resolve: async (_, args) => {
    return await _db.default.getLocationNear(args.input.lat, args.input.lon, args.input.zoom);
  }
};
exports.locationNear = locationNear;
const location = {
  type: _types.LocationType,
  args: {
    input: {
      type: new _graphql.GraphQLInputObjectType({
        name: 'locationInput',
        fields: {
          id: {
            type: _graphql.GraphQLID
          }
        }
      })
    }
  },
  resolve: async (_, args) => {
    const id = (0, _utils.fromGlobalId)(args.input.id, 'Location');
    return await _db.default.getLocation(id);
  }
};
exports.location = location;