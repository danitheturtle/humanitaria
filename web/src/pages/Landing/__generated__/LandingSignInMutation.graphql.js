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
export type LandingSignInMutationVariables = {|
  input: signInInput
|};
export type LandingSignInMutationResponse = {|
  +signIn: ?{|
    +me: ?{|
      +username: string,
      +uid: string,
    |}
  |}
|};
export type LandingSignInMutation = {|
  variables: LandingSignInMutationVariables,
  response: LandingSignInMutationResponse,
|};
*/


/*
mutation LandingSignInMutation(
  $input: signInInput!
) {
  signIn(input: $input) {
    me {
      username
      uid
      id
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uid",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LandingSignInMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LandingSignInMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3e1a9a397caf523b3451d8abe7b4713d",
    "id": null,
    "metadata": {},
    "name": "LandingSignInMutation",
    "operationKind": "mutation",
    "text": "mutation LandingSignInMutation(\n  $input: signInInput!\n) {\n  signIn(input: $input) {\n    me {\n      username\n      uid\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '21ea814292b42836614e2e6143d400ca';

module.exports = node;
