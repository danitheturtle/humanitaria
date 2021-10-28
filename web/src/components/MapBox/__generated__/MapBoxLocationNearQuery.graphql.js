/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MapBoxLocationNear_location$ref = any;
export type locationNearInput = {|
  lat?: ?string,
  lon?: ?string,
  zoom?: ?number,
|};
export type MapBoxLocationNearQueryVariables = {|
  input: locationNearInput
|};
export type MapBoxLocationNearQueryResponse = {|
  +$fragmentRefs: MapBoxLocationNear_location$ref
|};
export type MapBoxLocationNearQuery = {|
  variables: MapBoxLocationNearQueryVariables,
  response: MapBoxLocationNearQueryResponse,
|};
*/


/*
query MapBoxLocationNearQuery(
  $input: locationNearInput!
) {
  ...MapBoxLocationNear_location_2VV6jB
}

fragment MapBoxLocationNear_location_2VV6jB on Query {
  locationNear(input: $input) {
    id
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MapBoxLocationNearQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "MapBoxLocationNear_location"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MapBoxLocationNearQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Location",
        "kind": "LinkedField",
        "name": "locationNear",
        "plural": false,
        "selections": [
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
    ]
  },
  "params": {
    "cacheID": "4e54919b59fe8517a6e83d10de952804",
    "id": null,
    "metadata": {},
    "name": "MapBoxLocationNearQuery",
    "operationKind": "query",
    "text": "query MapBoxLocationNearQuery(\n  $input: locationNearInput!\n) {\n  ...MapBoxLocationNear_location_2VV6jB\n}\n\nfragment MapBoxLocationNear_location_2VV6jB on Query {\n  locationNear(input: $input) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a78aca625f9ac3b3a4a01c8966b3b3e';

module.exports = node;
