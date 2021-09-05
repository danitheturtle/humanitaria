/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type noteUpdatedInput = {|
  clientSubscriptionId?: ?string
|};
export type NotesUpdatedSubscriptionVariables = {|
  input: noteUpdatedInput
|};
export type NotesUpdatedSubscriptionResponse = {|
  +noteUpdated: ?{|
    +note: ?{|
      +id: string,
      +likes: ?number,
      +content: ?string,
    |}
  |}
|};
export type NotesUpdatedSubscription = {|
  variables: NotesUpdatedSubscriptionVariables,
  response: NotesUpdatedSubscriptionResponse,
|};
*/


/*
subscription NotesUpdatedSubscription(
  $input: noteUpdatedInput!
) {
  noteUpdated(input: $input) {
    note {
      id
      likes
      content
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "noteUpdatedPayload",
    "kind": "LinkedField",
    "name": "noteUpdated",
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
            "name": "likes",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NotesUpdatedSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotesUpdatedSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f0556430ada93bc1b09933296d345d17",
    "id": null,
    "metadata": {},
    "name": "NotesUpdatedSubscription",
    "operationKind": "subscription",
    "text": "subscription NotesUpdatedSubscription(\n  $input: noteUpdatedInput!\n) {\n  noteUpdated(input: $input) {\n    note {\n      id\n      likes\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c320a300bdab262cc60aef94fa2e0112';

module.exports = node;
