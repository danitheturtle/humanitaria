/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Note_note$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Notes_notes$ref: FragmentReference;
declare export opaque type Notes_notes$fragmentType: Notes_notes$ref;
export type Notes_notes = {|
  +notes: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: Note_note$ref
      |}
    |}>
  |},
  +$refType: Notes_notes$ref,
|};
export type Notes_notes$data = Notes_notes;
export type Notes_notes$key = {
  +$data?: Notes_notes$data,
  +$fragmentRefs: Notes_notes$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "notes"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count"
    },
    {
      "kind": "RootArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./NotesQuery.graphql.js')
    }
  },
  "name": "Notes_notes",
  "selections": [
    {
      "alias": "notes",
      "args": null,
      "concreteType": "NoteConnection",
      "kind": "LinkedField",
      "name": "__RootConnection_notes_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "NoteEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Note_note"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e050bf24b05e8f338763d7fa2bccfa69';

module.exports = node;
