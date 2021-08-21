/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type landingQueryVariables = {||};
export type landingQueryResponse = {|
  +notes: ?$ReadOnlyArray<?{|
    +content: ?string
  |}>
|};
export type landingQuery = {|
  variables: landingQueryVariables,
  response: landingQueryResponse,
|};
*/


/*
query landingQuery {
  notes {
    content
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
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
    "name": "landingQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "notes",
        "plural": true,
        "selections": [
          (v0/*: any*/)
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
    "name": "landingQuery",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b640e3f846c2a424aa91687e772f8b20",
    "id": null,
    "metadata": {},
    "name": "landingQuery",
    "operationKind": "query",
    "text": "query landingQuery {\n  notes {\n    content\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fdd3f3aebfc3dc7f2fba1101cc38f8db';

module.exports = node;
