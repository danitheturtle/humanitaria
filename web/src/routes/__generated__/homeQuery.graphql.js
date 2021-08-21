/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type homeQueryVariables = {||};
export type homeQueryResponse = {|
  +notes: ?$ReadOnlyArray<?{|
    +id: string,
    +content: ?string,
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "homeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "126edf014d6fe039db2531c0a32165f4",
    "id": null,
    "metadata": {},
    "name": "homeQuery",
    "operationKind": "query",
    "text": "query homeQuery {\n  notes {\n    id\n    content\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2794895de9e7f6d776b396eaeba2615e';

module.exports = node;
