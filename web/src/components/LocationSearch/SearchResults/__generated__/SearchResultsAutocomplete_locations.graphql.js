/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchResultsAutocomplete_locations$ref: FragmentReference;
declare export opaque type SearchResultsAutocomplete_locations$fragmentType: SearchResultsAutocomplete_locations$ref;
export type SearchResultsAutocomplete_locations = {|
  +searchLocations: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +placeId: ?string,
        +address: ?{|
          +address: ?string,
          +city: ?string,
          +state: ?string,
          +zip: ?string,
        |},
        +lat: ?string,
        +lon: ?string,
        +boundingBox: ?{|
          +x1: ?string,
          +y1: ?string,
          +x2: ?string,
          +y2: ?string,
        |},
      |}
    |}>
  |},
  +$refType: SearchResultsAutocomplete_locations$ref,
|};
export type SearchResultsAutocomplete_locations$data = SearchResultsAutocomplete_locations;
export type SearchResultsAutocomplete_locations$key = {
  +$data?: SearchResultsAutocomplete_locations$data,
  +$fragmentRefs: SearchResultsAutocomplete_locations$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "searchLocations"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "search"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./LocationSearchQuery.graphql.js')
    }
  },
  "name": "SearchResultsAutocomplete_locations",
  "selections": [
    {
      "alias": "searchLocations",
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
        }
      ],
      "concreteType": "SearchLocationsConnection",
      "kind": "LinkedField",
      "name": "__SearchResultsAutocompleteConnection_searchLocations_connection",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '0af894fe976dfc0f955eddad100c1c8a';

module.exports = node;
