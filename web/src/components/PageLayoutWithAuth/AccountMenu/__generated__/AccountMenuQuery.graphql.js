/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AccountMenuQueryVariables = {||};
export type AccountMenuQueryResponse = {|
  +me: ?{|
    +id: string,
    +uid: string,
    +username: string,
  |}
|};
export type AccountMenuQuery = {|
  variables: AccountMenuQueryVariables,
  response: AccountMenuQueryResponse,
|};
*/


/*
query AccountMenuQuery {
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
    "name": "AccountMenuQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AccountMenuQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "88ae788fc017af7b1c3c9621486e6ff0",
    "id": null,
    "metadata": {},
    "name": "AccountMenuQuery",
    "operationKind": "query",
    "text": "query AccountMenuQuery {\n  me {\n    id\n    uid\n    username\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '60af93ab057fb3e6fea17e9abd3b043f';

module.exports = node;
