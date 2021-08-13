/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MainPageQueryVariables = {||};
export type MainPageQueryResponse = {|
  +notes: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +content: ?string,
  |}>
|};
export type MainPageQuery = {|
  variables: MainPageQueryVariables,
  response: MainPageQueryResponse,
|};
*/


/*
query MainPageQuery {
  notes {
    _id
    content
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "notes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7bdd24f4c45179acc3b5f0fcba8e30fe",
    "id": null,
    "metadata": {},
    "name": "MainPageQuery",
    "operationKind": "query",
    "text": "query MainPageQuery {\n  notes {\n    _id\n    content\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '260a978a6988677aa7a7e2ce26c791f0';

module.exports = node;
