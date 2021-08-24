/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Notes_notes$ref = any;
export type homeQueryVariables = {|
  count: number,
  cursor: string,
|};
export type homeQueryResponse = {|
  +$fragmentRefs: Notes_notes$ref
|};
export type homeQuery = {|
  variables: homeQueryVariables,
  response: homeQueryResponse,
|};
*/


/*
query homeQuery(
  $count: Int!
  $cursor: String!
) {
  ...Notes_notes
}

fragment Note_note on Note {
  id
  content
}

fragment Notes_notes on Query {
  notes(first: $count, after: $cursor) {
    edges {
      node {
        ...Note_note
        id
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "homeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Notes_notes"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "homeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NoteConnection",
        "kind": "LinkedField",
        "name": "notes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NoteEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Note",
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
                    "name": "content",
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
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RootConnection_notes",
        "kind": "LinkedHandle",
        "name": "notes"
      }
    ]
  },
  "params": {
    "cacheID": "89a0b98c0c0e6b163c1eb7be8a91f64b",
    "id": null,
    "metadata": {},
    "name": "homeQuery",
    "operationKind": "query",
    "text": "query homeQuery(\n  $count: Int!\n  $cursor: String!\n) {\n  ...Notes_notes\n}\n\nfragment Note_note on Note {\n  id\n  content\n}\n\nfragment Notes_notes on Query {\n  notes(first: $count, after: $cursor) {\n    edges {\n      node {\n        ...Note_note\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8beb65bce52f5a958368fe30d8bc587';

module.exports = node;
