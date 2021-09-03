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
      +user: ?{|
        +username: string
      |},
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
      user {
        username
        id
      }
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
  "name": "username",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NoteUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              },
              (v4/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5a4e5274f379e3e5ed1cbb49c3bffa68",
    "id": null,
    "metadata": {},
    "name": "NoteUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation NoteUpdateMutation(\n  $input: updateNoteInput!\n) {\n  updateNote(input: $input) {\n    note {\n      id\n      user {\n        username\n        id\n      }\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b7a61f10ece051d2891dab5e0bcf7d48';

module.exports = node;
