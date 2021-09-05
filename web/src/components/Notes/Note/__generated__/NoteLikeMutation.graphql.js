/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type likeNoteInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type NoteLikeMutationVariables = {|
  input: likeNoteInput
|};
export type NoteLikeMutationResponse = {|
  +likeNote: ?{|
    +note: ?{|
      +id: string,
      +likes: ?number,
    |}
  |}
|};
export type NoteLikeMutation = {|
  variables: NoteLikeMutationVariables,
  response: NoteLikeMutationResponse,
|};
*/


/*
mutation NoteLikeMutation(
  $input: likeNoteInput!
) {
  likeNote(input: $input) {
    note {
      id
      likes
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
    "concreteType": "likeNotePayload",
    "kind": "LinkedField",
    "name": "likeNote",
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
    "name": "NoteLikeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteLikeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5a2d7e99d590608fdf6a5c28d40c8d67",
    "id": null,
    "metadata": {},
    "name": "NoteLikeMutation",
    "operationKind": "mutation",
    "text": "mutation NoteLikeMutation(\n  $input: likeNoteInput!\n) {\n  likeNote(input: $input) {\n    note {\n      id\n      likes\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8a9d3ae0067a86b3d41d38036de9508d';

module.exports = node;
