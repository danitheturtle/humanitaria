/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteNoteInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type NoteDeleteMutationVariables = {|
  input: deleteNoteInput
|};
export type NoteDeleteMutationResponse = {|
  +deleteNote: ?{|
    +clientMutationId: ?string
  |}
|};
export type NoteDeleteMutation = {|
  variables: NoteDeleteMutationVariables,
  response: NoteDeleteMutationResponse,
|};
*/


/*
mutation NoteDeleteMutation(
  $input: deleteNoteInput!
) {
  deleteNote(input: $input) {
    clientMutationId
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
    "concreteType": "deleteNotePayload",
    "kind": "LinkedField",
    "name": "deleteNote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
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
    "name": "NoteDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e96fc1faf41a611fe82a742fa8b7ecd7",
    "id": null,
    "metadata": {},
    "name": "NoteDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation NoteDeleteMutation(\n  $input: deleteNoteInput!\n) {\n  deleteNote(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b120ce923af70235dfe153f95a444408';

module.exports = node;
