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
    }
  ],
  "type": "Note",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'f2e6bad272dd09aa505ecbbf03f18ea5';

module.exports = node;
