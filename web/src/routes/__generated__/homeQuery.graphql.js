/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Notes_note$ref = any;
export type homeQueryVariables = {||};
export type homeQueryResponse = {|
  +notes: ?$ReadOnlyArray<?{|
    +id: string,
    +content: ?string,
    +$fragmentRefs: Notes_note$ref,
  |}>
|};
export type homeQuery = {|
  variables: homeQueryVariables,
  response: homeQueryResponse,
|};
*/


/*
query homeQuery {
  notes {
    id
    content
    ...Notes_note
  }
}

fragment Notes_note on Note {
  id
  content
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "notes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Notes_note"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "homeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "notes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "facf49cd381a5bf21a45c4ee990af3a7",
    "id": null,
    "metadata": {},
    "name": "homeQuery",
    "operationKind": "query",
    "text": "query homeQuery {\n  notes {\n    id\n    content\n    ...Notes_note\n  }\n}\n\nfragment Notes_note on Note {\n  id\n  content\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce3169f5fca4ae02acc3d0aaf3a255aa';

module.exports = node;
