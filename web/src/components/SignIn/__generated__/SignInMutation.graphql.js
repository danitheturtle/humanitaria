/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signInInput = {|
  usernameOrEmail?: ?string,
  passwordHash?: ?string,
  clientMutationId?: ?string,
|};
export type SignInMutationVariables = {|
  input: signInInput
|};
export type SignInMutationResponse = {|
  +signIn: ?{|
    +me: ?{|
      +id: string,
      +uid: string,
    |}
  |}
|};
export type SignInMutation = {|
  variables: SignInMutationVariables,
  response: SignInMutationResponse,
|};
*/


/*
mutation SignInMutation(
  $input: signInInput!
) {
  signIn(input: $input) {
    me {
      id
      uid
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "signInPayload",
    "kind": "LinkedField",
    "name": "signIn",
    "plural": false,
    "selections": [
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "be4822fdda7d8c1626530ddecf0f8322",
    "id": null,
    "metadata": {},
    "name": "SignInMutation",
    "operationKind": "mutation",
    "text": "mutation SignInMutation(\n  $input: signInInput!\n) {\n  signIn(input: $input) {\n    me {\n      id\n      uid\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bb2c3e4ba763542e2244ee2406d4891b';

module.exports = node;
