/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NotesRoot_notes$ref = any;
export type NotesRootQueryVariables = {|
  count?: ?number,
  cursor?: ?string,
|};
export type NotesRootQueryResponse = {|
  +$fragmentRefs: NotesRoot_notes$ref
|};
export type NotesRootQuery = {|
  variables: NotesRootQueryVariables,
  response: NotesRootQueryResponse,
|};
*/


/*
query NotesRootQuery(
  $count: Int
  $cursor: String
) {
  ...NotesRoot_notes
}

fragment Note_note on Note {
  id
  content
  user {
    username
    id
  }
}

fragment NotesRoot_notes on Query {
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NotesRootQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "NotesRoot_notes"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotesRootQuery",
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
                  (v2/*: any*/),
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
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "username",
                        "storageKey": null
                      },
                      (v2/*: any*/)
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
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RootNotesConnection_notes",
        "kind": "LinkedHandle",
        "name": "notes"
      }
    ]
  },
  "params": {
    "cacheID": "932dc17a374da670de4ad57c313285f4",
    "id": null,
    "metadata": {},
    "name": "NotesRootQuery",
    "operationKind": "query",
    "text": "query NotesRootQuery(\n  $count: Int\n  $cursor: String\n) {\n  ...NotesRoot_notes\n}\n\nfragment Note_note on Note {\n  id\n  content\n  user {\n    username\n    id\n  }\n}\n\nfragment NotesRoot_notes on Query {\n  notes(first: $count, after: $cursor) {\n    edges {\n      node {\n        ...Note_note\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'edcbbc0d4f1695a6696af3ee9bef8d50';

module.exports = node;
