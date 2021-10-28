/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AddressString_Address$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationOnClick_location$ref: FragmentReference;
declare export opaque type LocationOnClick_location$fragmentType: LocationOnClick_location$ref;
export type LocationOnClick_location = {|
  +locationNear: ?{|
    +id: string,
    +placeId: ?string,
    +lat: ?string,
    +lon: ?string,
    +category: ?string,
    +subCategory: ?string,
    +boundingBox: ?{|
      +x1: ?string,
      +y1: ?string,
      +x2: ?string,
      +y2: ?string,
    |},
    +$fragmentRefs: AddressString_Address$ref,
  |},
  +$refType: LocationOnClick_location$ref,
|};
export type LocationOnClick_location$data = LocationOnClick_location;
export type LocationOnClick_location$key = {
  +$data?: LocationOnClick_location$data,
  +$fragmentRefs: LocationOnClick_location$ref,
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
      "operation": require('./LocationOnClickQuery.graphql.js')
    }
  },
  "name": "LocationOnClick_location",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "placeId",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lat",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lon",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "category",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "subCategory",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "BoundingBox",
          "kind": "LinkedField",
          "name": "boundingBox",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "x1",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "y1",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "x2",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "y2",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AddressString_Address"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '3c380a428e3e1b7c276f42c535912d3d';

module.exports = node;
