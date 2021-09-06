/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type noteDeletedInput = {|
  clientSubscriptionId?: ?string
|};
export type NotesDeletedSubscriptionVariables = {|
  input: noteDeletedInput
|};
export type NotesDeletedSubscriptionResponse = {|
  +noteDeleted: ?{|
    +note: ?{|
      +id: string,
      +user: ?{|
        +uid: string
      |},
    |}
  |}
|};
export type NotesDeletedSubscription = {|
  variables: NotesDeletedSubscriptionVariables,
  response: NotesDeletedSubscriptionResponse,
|};
*/


/*
subscription NotesDeletedSubscription(
  $input: noteDeletedInput!
) {
  noteDeleted(input: $input) {
    note {
      id
      user {
        uid
        id
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
  "name": "id",
  "storageKey": null
},
v3 = {
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
    "name": "NotesDeletedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "noteDeletedPayload",
        "kind": "LinkedField",
        "name": "noteDeleted",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Note",
            "kind": "LinkedField",
            "name": "note",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
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
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotesDeletedSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "noteDeletedPayload",
        "kind": "LinkedField",
        "name": "noteDeleted",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Note",
            "kind": "LinkedField",
            "name": "note",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
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
    "cacheID": "d92ec179259c36f965dd1fef21783422",
    "id": null,
    "metadata": {},
    "name": "NotesDeletedSubscription",
    "operationKind": "subscription",
    "text": "subscription NotesDeletedSubscription(\n  $input: noteDeletedInput!\n) {\n  noteDeleted(input: $input) {\n    note {\n      id\n      user {\n        uid\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '225058b9d4e2e9f9479cb6278f7a170a';

module.exports = node;
