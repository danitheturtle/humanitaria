/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateNoteInput = {|
  id: string,
  content: string,
  clientMutationId?: ?string,
|};
export type NoteUpdateMutationVariables = {|
  input: updateNoteInput
|};
export type NoteUpdateMutationResponse = {|
  +updateNote: ?{|
    +note: ?{|
      +id: string,
      +content: ?string,
    |}
  |}
|};
export type NoteUpdateMutation = {|
  variables: NoteUpdateMutationVariables,
  response: NoteUpdateMutationResponse,
|};
*/


/*
mutation NoteUpdateMutation(
  $input: updateNoteInput!
) {
  updateNote(input: $input) {
    note {
      id
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
    "concreteType": "updateNotePayload",
    "kind": "LinkedField",
    "name": "updateNote",
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
    "name": "NoteUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "eac0072b481dd99a2c52efffb729dace",
    "id": null,
    "metadata": {},
    "name": "NoteUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation NoteUpdateMutation(\n  $input: updateNoteInput!\n) {\n  updateNote(input: $input) {\n    note {\n      id\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '78d97dae3ee6e6e1f1d2ad8681a94d1a';

module.exports = node;
