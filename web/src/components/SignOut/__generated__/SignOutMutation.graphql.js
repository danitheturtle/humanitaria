/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signOutInput = {|
  clientMutationId?: ?string
|};
export type SignOutMutationVariables = {|
  input: signOutInput
|};
export type SignOutMutationResponse = {|
  +signOut: ?{|
    +clientMutationId: ?string
  |}
|};
export type SignOutMutation = {|
  variables: SignOutMutationVariables,
  response: SignOutMutationResponse,
|};
*/


/*
mutation SignOutMutation(
  $input: signOutInput!
) {
  signOut(input: $input) {
    clientMutationId
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
    "concreteType": "signOutPayload",
    "kind": "LinkedField",
    "name": "signOut",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
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
    "name": "SignOutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignOutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "483420a672400d7561b938bd2310c65f",
    "id": null,
    "metadata": {},
    "name": "SignOutMutation",
    "operationKind": "mutation",
    "text": "mutation SignOutMutation(\n  $input: signOutInput!\n) {\n  signOut(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '841c1f8258a2aee9aa2e81697d104aae';

module.exports = node;
