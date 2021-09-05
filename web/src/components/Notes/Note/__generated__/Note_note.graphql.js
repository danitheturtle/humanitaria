/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Note_note$ref: FragmentReference;
declare export opaque type Note_note$fragmentType: Note_note$ref;
export type Note_note = {|
  +id: string,
  +content: ?string,
  +likes: ?number,
  +user: ?{|
    +username: string
  |},
  +$refType: Note_note$ref,
|};
export type Note_note$data = Note_note;
export type Note_note$key = {
  +$data?: Note_note$data,
  +$fragmentRefs: Note_note$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Note_note",
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "username",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Note",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'c2f60a5dcaa20daf3985b93cc6a6826c';

module.exports = node;
