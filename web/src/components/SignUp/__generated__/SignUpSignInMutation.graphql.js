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
export type SignUpSignInMutationVariables = {|
  input: signInInput
|};
export type SignUpSignInMutationResponse = {|
  +signIn: ?{|
    +me: ?{|
      +id: string,
      +uid: string,
    |}
  |}
|};
export type SignUpSignInMutation = {|
  variables: SignUpSignInMutationVariables,
  response: SignUpSignInMutationResponse,
|};
*/


/*
mutation SignUpSignInMutation(
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
    "name": "SignUpSignInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpSignInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "272596bfb58b4011bab1db975ca09073",
    "id": null,
    "metadata": {},
    "name": "SignUpSignInMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpSignInMutation(\n  $input: signInInput!\n) {\n  signIn(input: $input) {\n    me {\n      id\n      uid\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b3514e2b7ebe4bba94bf042a832f6969';

module.exports = node;
