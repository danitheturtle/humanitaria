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
  input: deleteNoteInput,
  connections: $ReadOnlyArray<string>,
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "NoteDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "NoteDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteEdge",
                "key": "",
                "kind": "ScalarHandle",
                "name": "id",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
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
(node/*: any*/).hash = '61d04ae37599a4cc7bd9b926051dd8fa';

module.exports = node;
