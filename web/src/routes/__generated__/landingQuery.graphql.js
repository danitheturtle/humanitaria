/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type landingQueryVariables = {||};
export type landingQueryResponse = {|
  +me: ?{|
    +id: string,
    +uid: string,
    +username: string,
    +email: ?string,
  |}
|};
export type landingQuery = {|
  variables: landingQueryVariables,
  response: landingQueryResponse,
|};
*/


/*
query landingQuery {
  me {
    id
    uid
    username
    email
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
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
    "name": "landingQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "landingQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8f6788c569ec40a5b7150d26c608dd95",
    "id": null,
    "metadata": {},
    "name": "landingQuery",
    "operationKind": "query",
    "text": "query landingQuery {\n  me {\n    id\n    uid\n    username\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3b6db57063555ae3fb11494eb6161a85';

module.exports = node;
