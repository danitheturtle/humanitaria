/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createUserInput = {|
  username: string,
  passwordHash: string,
  email?: ?string,
  clientMutationId?: ?string,
|};
export type LandingCreateUserMutationVariables = {|
  input: createUserInput
|};
export type LandingCreateUserMutationResponse = {|
  +createUser: ?{|
    +me: ?{|
      +id: string,
      +uid: string,
    |}
  |}
|};
export type LandingCreateUserMutation = {|
  variables: LandingCreateUserMutationVariables,
  response: LandingCreateUserMutationResponse,
|};
*/


/*
mutation LandingCreateUserMutation(
  $input: createUserInput!
) {
  createUser(input: $input) {
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
    "concreteType": "createUserPayload",
    "kind": "LinkedField",
    "name": "createUser",
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
    "name": "LandingCreateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LandingCreateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f86df4304c98253c8fbd2c8eb040bbd4",
    "id": null,
    "metadata": {},
    "name": "LandingCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation LandingCreateUserMutation(\n  $input: createUserInput!\n) {\n  createUser(input: $input) {\n    me {\n      id\n      uid\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c0e2647a33a8894f8ef42f3adad9f0dc';

module.exports = node;
