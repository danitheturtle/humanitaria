/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type countToNumberInput = {|
  number?: ?number,
  clientSubscriptionId?: ?string,
|};
export type CountToNumberSubscriptionVariables = {|
  input: countToNumberInput
|};
export type CountToNumberSubscriptionResponse = {|
  +countToNumber: ?{|
    +number: ?number
  |}
|};
export type CountToNumberSubscription = {|
  variables: CountToNumberSubscriptionVariables,
  response: CountToNumberSubscriptionResponse,
|};
*/


/*
subscription CountToNumberSubscription(
  $input: countToNumberInput!
) {
  countToNumber(input: $input) {
    number
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
    "concreteType": "countToNumberPayload",
    "kind": "LinkedField",
    "name": "countToNumber",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
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
    "name": "CountToNumberSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CountToNumberSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "83d1b3396ae4dc25b3c4321b2d973b4d",
    "id": null,
    "metadata": {},
    "name": "CountToNumberSubscription",
    "operationKind": "subscription",
    "text": "subscription CountToNumberSubscription(\n  $input: countToNumberInput!\n) {\n  countToNumber(input: $input) {\n    number\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9c93d11c5355136c510dbb0ec77f8b36';

module.exports = node;
