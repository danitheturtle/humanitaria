/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type noteCreatedInput = {|
  clientSubscriptionId?: ?string
|};
export type NotesCreatedSubscriptionVariables = {|
  input: noteCreatedInput
|};
export type NotesCreatedSubscriptionResponse = {|
  +noteCreated: ?{|
    +noteEdge: ?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +content: ?string,
        +likes: ?number,
        +user: ?{|
          +username: string,
          +uid: string,
        |},
      |},
    |}
  |}
|};
export type NotesCreatedSubscription = {|
  variables: NotesCreatedSubscriptionVariables,
  response: NotesCreatedSubscriptionResponse,
|};
*/


/*
subscription NotesCreatedSubscription(
  $input: noteCreatedInput!
) {
  noteCreated(input: $input) {
    noteEdge {
      cursor
      node {
        id
        content
        likes
        user {
          username
          uid
          id
        }
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
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "likes",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uid",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NotesCreatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "noteCreatedPayload",
        "kind": "LinkedField",
        "name": "noteCreated",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NoteEdge",
            "kind": "LinkedField",
            "name": "noteEdge",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Note",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotesCreatedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "noteCreatedPayload",
        "kind": "LinkedField",
        "name": "noteCreated",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NoteEdge",
            "kind": "LinkedField",
            "name": "noteEdge",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Note",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
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
    "cacheID": "e7d938f458355ba73bdcdd7b2aa66ff5",
    "id": null,
    "metadata": {},
    "name": "NotesCreatedSubscription",
    "operationKind": "subscription",
    "text": "subscription NotesCreatedSubscription(\n  $input: noteCreatedInput!\n) {\n  noteCreated(input: $input) {\n    noteEdge {\n      cursor\n      node {\n        id\n        content\n        likes\n        user {\n          username\n          uid\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '62d4605ebc35da67fa0105fd538be059';

module.exports = node;
