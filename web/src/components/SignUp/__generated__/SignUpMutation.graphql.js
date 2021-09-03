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
export type SignUpMutationVariables = {|
  input: createUserInput
|};
export type SignUpMutationResponse = {|
  +createUser: ?{|
    +me: ?{|
      +id: string,
      +uid: string,
    |}
  |}
|};
export type SignUpMutation = {|
  variables: SignUpMutationVariables,
  response: SignUpMutationResponse,
|};
*/


/*
mutation SignUpMutation(
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
    "name": "SignUpMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4ff9f52a7c3b1ac08ee537bdd94b2c37",
    "id": null,
    "metadata": {},
    "name": "SignUpMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpMutation(\n  $input: createUserInput!\n) {\n  createUser(input: $input) {\n    me {\n      id\n      uid\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '04da9afc72b5a6679277d09f8c2f5498';

module.exports = node;
