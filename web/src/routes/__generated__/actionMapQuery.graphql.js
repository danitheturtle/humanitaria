/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LocationOnClick_location$ref = any;
type SearchResultsAutocomplete_locations$ref = any;
export type locationNearInput = {|
  lat?: ?string,
  lon?: ?string,
  zoom?: ?number,
|};
export type actionMapQueryVariables = {|
  first: number,
  after?: ?string,
  search?: ?string,
  locationNearInput: locationNearInput,
|};
export type actionMapQueryResponse = {|
  +me: ?{|
    +__typename: string
  |},
  +$fragmentRefs: SearchResultsAutocomplete_locations$ref & LocationOnClick_location$ref,
|};
export type actionMapQuery = {|
  variables: actionMapQueryVariables,
  response: actionMapQueryResponse,
|};
*/


/*
query actionMapQuery(
  $first: Int!
  $after: String
  $search: String
  $locationNearInput: locationNearInput!
) {
  me {
    __typename
    id
  }
  ...SearchResultsAutocomplete_locations_1Ozsmw
  ...LocationOnClick_location_12tmcl
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

fragment LocationOnClick_location_12tmcl on Query {
  locationNear(input: $locationNearInput) {
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

fragment SearchResultsAutocomplete_locations_1Ozsmw on Query {
  searchLocations(first: $first, after: $after, search: $search) {
    edges {
      node {
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
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "locationNearInput"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "search"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  }
],
v6 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "locationNearInput"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "placeId",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lat",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lon",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subCategory",
  "storageKey": null
},
v13 = {
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
v14 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "actionMapQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "args": (v5/*: any*/),
        "kind": "FragmentSpread",
        "name": "SearchResultsAutocomplete_locations"
      },
      {
        "args": (v6/*: any*/),
        "kind": "FragmentSpread",
        "name": "LocationOnClick_location"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "actionMapQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "SearchLocationsConnection",
        "kind": "LinkedField",
        "name": "searchLocations",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchLocationsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "filters": [
          "search"
        ],
        "handle": "connection",
        "key": "SearchResultsAutocompleteConnection_searchLocations",
        "kind": "LinkedHandle",
        "name": "searchLocations"
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Location",
        "kind": "LinkedField",
        "name": "locationNear",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "648a44822502a09881f1fe88a0be2441",
    "id": null,
    "metadata": {},
    "name": "actionMapQuery",
    "operationKind": "query",
    "text": "query actionMapQuery(\n  $first: Int!\n  $after: String\n  $search: String\n  $locationNearInput: locationNearInput!\n) {\n  me {\n    __typename\n    id\n  }\n  ...SearchResultsAutocomplete_locations_1Ozsmw\n  ...LocationOnClick_location_12tmcl\n}\n\nfragment AddressString_Address on Location {\n  id\n  category\n  subCategory\n  address {\n    label\n    address\n    district\n    city\n    county\n    state\n    zip\n    country\n    countryCode\n  }\n}\n\nfragment LocationOnClick_location_12tmcl on Query {\n  locationNear(input: $locationNearInput) {\n    id\n    placeId\n    lat\n    lon\n    category\n    subCategory\n    boundingBox {\n      x1\n      y1\n      x2\n      y2\n    }\n    ...AddressString_Address\n  }\n}\n\nfragment SearchResultsAutocomplete_locations_1Ozsmw on Query {\n  searchLocations(first: $first, after: $after, search: $search) {\n    edges {\n      node {\n        id\n        placeId\n        lat\n        lon\n        category\n        subCategory\n        boundingBox {\n          x1\n          y1\n          x2\n          y2\n        }\n        ...AddressString_Address\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd6dfbb95d457ca169af33e165b6f5c89';

module.exports = node;
