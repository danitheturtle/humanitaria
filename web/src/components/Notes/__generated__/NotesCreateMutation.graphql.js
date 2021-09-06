/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createNoteInput = {|
  content: string,
  clientMutationId?: ?string,
|};
export type NotesCreateMutationVariables = {|
  input: createNoteInput
|};
export type NotesCreateMutationResponse = {|
  +createNote: ?{|
    +clientMutationId: ?string
  |}
|};
export type NotesCreateMutation = {|
  variables: NotesCreateMutationVariables,
  response: NotesCreateMutationResponse,
|};
*/


/*
mutation NotesCreateMutation(
  $input: createNoteInput!
) {
  createNote(input: $input) {
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
    "concreteType": "createNotePayload",
    "kind": "LinkedField",
    "name": "createNote",
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
    "name": "NotesCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotesCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "04bdb23f829663f5a7057663d5ad899e",
    "id": null,
    "metadata": {},
    "name": "NotesCreateMutation",
    "operationKind": "mutation",
    "text": "mutation NotesCreateMutation(\n  $input: createNoteInput!\n) {\n  createNote(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f6e348986e4519fa79fa75d8a558603f';

module.exports = node;
