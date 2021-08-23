/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Notes_note$ref: FragmentReference;
declare export opaque type Notes_note$fragmentType: Notes_note$ref;
export type Notes_note = {|
  +id: string,
  +content: ?string,
  +$refType: Notes_note$ref,
|};
export type Notes_note$data = Notes_note;
export type Notes_note$key = {
  +$data?: Notes_note$data,
  +$fragmentRefs: Notes_note$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Notes_note",
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
  "type": "Note",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '7e8a777e45e25b5ad5a243bdd949fc26';

module.exports = node;
