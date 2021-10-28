/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LocationOnClick_location$ref = any;
export type locationNearInput = {|
  lat?: ?string,
  lon?: ?string,
  zoom?: ?number,
|};
export type LocationOnClickQueryVariables = {|
  input: locationNearInput
|};
export type LocationOnClickQueryResponse = {|
  +$fragmentRefs: LocationOnClick_location$ref
|};
export type LocationOnClickQuery = {|
  variables: LocationOnClickQueryVariables,
  response: LocationOnClickQueryResponse,
|};
*/


/*
query LocationOnClickQuery(
  $input: locationNearInput!
) {
  ...LocationOnClick_location_2VV6jB
}

fragment AddressString_Address on Location {
  id
  category
  subCategory
  address {
    label
    address
    district
    city
    county
    state
    zip
    country
    countryCode
  }
}

fragment LocationOnClick_location_2VV6jB on Query {
  locationNear(input: $input) {
    id
    placeId
    lat
    lon
    category
    subCategory
    boundingBox {
      x1
      y1
      x2
      y2
    }
    ...AddressString_Address
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationOnClickQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "LocationOnClick_location"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LocationOnClickQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Location",
        "kind": "LinkedField",
        "name": "locationNear",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "placeId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lat",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lon",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "subCategory",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BoundingBox",
            "kind": "LinkedField",
            "name": "boundingBox",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "x1",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "y1",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "x2",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "y2",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Address",
            "kind": "LinkedField",
            "name": "address",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "label",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "address",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "district",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "city",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "county",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "state",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "zip",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "country",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "countryCode",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "37c48d5381e9ead3cd62835e4bd53b40",
    "id": null,
    "metadata": {},
    "name": "LocationOnClickQuery",
    "operationKind": "query",
    "text": "query LocationOnClickQuery(\n  $input: locationNearInput!\n) {\n  ...LocationOnClick_location_2VV6jB\n}\n\nfragment AddressString_Address on Location {\n  id\n  category\n  subCategory\n  address {\n    label\n    address\n    district\n    city\n    county\n    state\n    zip\n    country\n    countryCode\n  }\n}\n\nfragment LocationOnClick_location_2VV6jB on Query {\n  locationNear(input: $input) {\n    id\n    placeId\n    lat\n    lon\n    category\n    subCategory\n    boundingBox {\n      x1\n      y1\n      x2\n      y2\n    }\n    ...AddressString_Address\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3c380a428e3e1b7c276f42c535912d3d';

module.exports = node;
