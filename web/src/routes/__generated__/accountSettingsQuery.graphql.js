/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type accountSettingsQueryVariables = {||};
export type accountSettingsQueryResponse = {|
  +me: ?{|
    +id: string,
    +uid: string,
    +username: string,
    +email: ?string,
    +name: ?string,
    +picture: ?string,
    +timezone: ?string,
    +locale: ?string,
  |}
|};
export type accountSettingsQuery = {|
  variables: accountSettingsQueryVariables,
  response: accountSettingsQueryResponse,
|};
*/


/*
query accountSettingsQuery {
  me {
    id
    uid
    username
    email
    name
    picture
    timezone
    locale
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "picture",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "timezone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "locale",
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
    "name": "accountSettingsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "accountSettingsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6515172b2f7044cdc6a5d0d40dd02e56",
    "id": null,
    "metadata": {},
    "name": "accountSettingsQuery",
    "operationKind": "query",
    "text": "query accountSettingsQuery {\n  me {\n    id\n    uid\n    username\n    email\n    name\n    picture\n    timezone\n    locale\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '919985b33347e2fbba5ec9536b308013';

module.exports = node;
