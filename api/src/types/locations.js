import { GraphQLFloat, GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';
import { globalIdField, connectionDefinitions } from "graphql-relay";
import { nodeInterface } from '../graph/nodeDefinitions';

export const LocationType = new GraphQLObjectType({
  name: 'Location',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField('Location'),
    placeId: { type: GraphQLString },
    displayName: { type: GraphQLString },
    lat: { type: GraphQLString },
    lon: { type: GraphQLString },
    boundingBox: { type: new GraphQLList(GraphQLString) },
    category: { type: GraphQLString },
    subCategory: { type: GraphQLString },
    geotext: { type: GraphQLString },
    address: { type: AddressType }
  })
});

export const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    label: { type: GraphQLString },
    address: { type: GraphQLString },
    suburb: { type: GraphQLString },
    city: { type: GraphQLString },
    county: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString },
    country: { type: GraphQLString },
    countryCode: { type: GraphQLString }
  })
});

export const {
  connectionType: QuerySearchLocationsConnection,
  edgeType: QuerySearchLocationsEdge
} = connectionDefinitions({ name: 'SearchLocations', nodeType: LocationType });