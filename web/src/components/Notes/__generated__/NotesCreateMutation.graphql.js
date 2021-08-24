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
  input: createNoteInput,
  connections: $ReadOnlyArray<string>,
|};
export type NotesCreateMutationResponse = {|
  +createNote: ?{|
    +noteEdge: ?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +content: ?string,
      |},
    |}
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
    noteEdge {
      cursor
      node {
        id
        content
      }
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
  "concreteType": "NoteEdge",
  "kind": "LinkedField",
  "name": "noteEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Note",
      "kind": "LinkedField",
      "name": "node",
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "NotesCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "createNotePayload",
        "kind": "LinkedField",
        "name": "createNote",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "NotesCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "createNotePayload",
        "kind": "LinkedField",
        "name": "createNote",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "noteEdge",
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
    ]
  },
  "params": {
    "cacheID": "ce8ae71e147d9303a08f79529e25ed26",
    "id": null,
    "metadata": {},
    "name": "NotesCreateMutation",
    "operationKind": "mutation",
    "text": "mutation NotesCreateMutation(\n  $input: createNoteInput!\n) {\n  createNote(input: $input) {\n    noteEdge {\n      cursor\n      node {\n        id\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9eaa12f4042051d4d943ff4fc6ca44e';

module.exports = node;
