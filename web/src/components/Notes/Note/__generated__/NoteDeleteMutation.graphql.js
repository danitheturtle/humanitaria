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
    +note: ?{|
      +id: string
    |}
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
    note {
      id
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
    "concreteType": "deleteNotePayload",
    "kind": "LinkedField",
    "name": "deleteNote",
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
    "cacheID": "5d2e69eb059f2a8670a0f5f8208dad47",
    "id": null,
    "metadata": {},
    "name": "NoteDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation NoteDeleteMutation(\n  $input: deleteNoteInput!\n) {\n  deleteNote(input: $input) {\n    note {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6142fe9c04ef1aa8915329d883df2603';

module.exports = node;
