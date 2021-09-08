/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PageLayoutWithAuthQueryVariables = {||};
export type PageLayoutWithAuthQueryResponse = {|
  +me: ?{|
    +id: string,
    +uid: string,
    +username: string,
  |}
|};
export type PageLayoutWithAuthQuery = {|
  variables: PageLayoutWithAuthQueryVariables,
  response: PageLayoutWithAuthQueryResponse,
|};
*/


/*
query PageLayoutWithAuthQuery {
  me {
    id
    uid
    username
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
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
        "name": "uid",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PageLayoutWithAuthQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PageLayoutWithAuthQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2d886cafc2745974d6c03e73793d45fb",
    "id": null,
    "metadata": {},
    "name": "PageLayoutWithAuthQuery",
    "operationKind": "query",
    "text": "query PageLayoutWithAuthQuery {\n  me {\n    id\n    uid\n    username\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bc742ff9473bb1abf301d5bd3f44c12f';

module.exports = node;
