/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NotesUser_notes$ref = any;
export type NotesUserQueryVariables = {|
  count?: ?number,
  cursor?: ?string,
|};
export type NotesUserQueryResponse = {|
  +$fragmentRefs: NotesUser_notes$ref
|};
export type NotesUserQuery = {|
  variables: NotesUserQueryVariables,
  response: NotesUserQueryResponse,
|};
*/


/*
query NotesUserQuery(
  $count: Int
  $cursor: String
) {
  ...NotesUser_notes
}

fragment Note_note on Note {
  id
  content
  likes
  user {
    username
    id
  }
}

fragment NotesUser_notes on Query {
  me {
    id
    uid
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
    "name": "NotesUserQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "NotesUser_notes"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotesUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uid",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "UserNotesConnection",
            "kind": "LinkedField",
            "name": "notes",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNotesEdge",
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
                      (v1/*: any*/),
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
                        "name": "likes",
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
                          (v1/*: any*/)
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
            "args": (v2/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "UserNotesConnection_notes",
            "kind": "LinkedHandle",
            "name": "notes"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3191eee97838504dc91ddd8c1e98d6c6",
    "id": null,
    "metadata": {},
    "name": "NotesUserQuery",
    "operationKind": "query",
    "text": "query NotesUserQuery(\n  $count: Int\n  $cursor: String\n) {\n  ...NotesUser_notes\n}\n\nfragment Note_note on Note {\n  id\n  content\n  likes\n  user {\n    username\n    id\n  }\n}\n\nfragment NotesUser_notes on Query {\n  me {\n    id\n    uid\n    notes(first: $count, after: $cursor) {\n      edges {\n        node {\n          ...Note_note\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17d08960a06d2469730a95dc378ca508';

module.exports = node;
