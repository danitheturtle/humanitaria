/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapBoxLocationNear_location$ref: FragmentReference;
declare export opaque type MapBoxLocationNear_location$fragmentType: MapBoxLocationNear_location$ref;
export type MapBoxLocationNear_location = {|
  +locationNear: ?{|
    +id: string
  |},
  +$refType: MapBoxLocationNear_location$ref,
|};
export type MapBoxLocationNear_location$data = MapBoxLocationNear_location;
export type MapBoxLocationNear_location$key = {
  +$data?: MapBoxLocationNear_location$data,
  +$fragmentRefs: MapBoxLocationNear_location$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "input"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./MapBoxLocationNearQuery.graphql.js')
    }
  },
  "name": "MapBoxLocationNear_location",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "input",
          "variableName": "input"
        }
      ],
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
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '0a78aca625f9ac3b3a4a01c8966b3b3e';

module.exports = node;
