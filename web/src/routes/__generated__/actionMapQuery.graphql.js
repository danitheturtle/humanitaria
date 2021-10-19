/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SearchResultsAutocomplete_locations$ref = any;
export type actionMapQueryVariables = {|
  first: number,
  after?: ?string,
  search?: ?string,
|};
export type actionMapQueryResponse = {|
  +me: ?{|
    +__typename: string
  |},
  +$fragmentRefs: SearchResultsAutocomplete_locations$ref,
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
) {
  me {
    __typename
    id
  }
  ...SearchResultsAutocomplete_locations_1Ozsmw
}

fragment SearchResultsAutocomplete_locations_1Ozsmw on Query {
  searchLocations(first: $first, after: $after, search: $search) {
    edges {
      node {
        id
        placeId
        address {
          address
          city
          state
          zip
        }
        lat
        lon
        boundingBox {
          x1
          y1
          x2
          y2
        }
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
  "name": "search"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = [
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
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
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "args": (v4/*: any*/),
        "kind": "FragmentSpread",
        "name": "SearchResultsAutocomplete_locations"
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
          (v3/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
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
                  (v5/*: any*/),
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
                    "concreteType": "Address",
                    "kind": "LinkedField",
                    "name": "address",
                    "plural": false,
                    "selections": [
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
                        "name": "city",
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
                      }
                    ],
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
                  (v3/*: any*/)
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
        "args": (v4/*: any*/),
        "filters": [
          "search"
        ],
        "handle": "connection",
        "key": "SearchResultsAutocompleteConnection_searchLocations",
        "kind": "LinkedHandle",
        "name": "searchLocations"
      }
    ]
  },
  "params": {
    "cacheID": "648bbe843a18275825aae89bc386e782",
    "id": null,
    "metadata": {},
    "name": "actionMapQuery",
    "operationKind": "query",
    "text": "query actionMapQuery(\n  $first: Int!\n  $after: String\n  $search: String\n) {\n  me {\n    __typename\n    id\n  }\n  ...SearchResultsAutocomplete_locations_1Ozsmw\n}\n\nfragment SearchResultsAutocomplete_locations_1Ozsmw on Query {\n  searchLocations(first: $first, after: $after, search: $search) {\n    edges {\n      node {\n        id\n        placeId\n        address {\n          address\n          city\n          state\n          zip\n        }\n        lat\n        lon\n        boundingBox {\n          x1\n          y1\n          x2\n          y2\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c55e89b0d66cccbf27953b0babf45f0';

module.exports = node;
