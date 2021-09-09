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
    +picture: ?string,
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
    picture
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
        "name": "picture",
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
    "cacheID": "7d7850f00d9f346051c7284e4e7bfd2e",
    "id": null,
    "metadata": {},
    "name": "AccountMenuQuery",
    "operationKind": "query",
    "text": "query AccountMenuQuery {\n  me {\n    id\n    uid\n    picture\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cc0c3fd16d6ebfc5fc38c139c6cad91c';

module.exports = node;
