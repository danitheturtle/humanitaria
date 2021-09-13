/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useAuthOnlyQueryVariables = {||};
export type useAuthOnlyQueryResponse = {|
  +me: ?{|
    +uid: string
  |}
|};
export type useAuthOnlyQuery = {|
  variables: useAuthOnlyQueryVariables,
  response: useAuthOnlyQueryResponse,
|};
*/


/*
query useAuthOnlyQuery {
  me {
    uid
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uid",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useAuthOnlyQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
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
    "name": "useAuthOnlyQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
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
    "cacheID": "e6debcdf61b0d870e6267101f5f3b622",
    "id": null,
    "metadata": {},
    "name": "useAuthOnlyQuery",
    "operationKind": "query",
    "text": "query useAuthOnlyQuery {\n  me {\n    uid\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd5224d467a91a38c9a039aaa6a0625b';

module.exports = node;
