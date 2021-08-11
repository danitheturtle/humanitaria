"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["main"],{

/***/ "./src/App/App.js":
/*!************************!*\
  !*** ./src/App/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-relay */ "../.yarn/__virtual__/react-relay-virtual-1c6706e880/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/index.js");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/MainPage */ "./src/App/containers/MainPage/index.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "./src/environment.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _AppQuery;







class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_relay__WEBPACK_IMPORTED_MODULE_1__.QueryRenderer, {
      environment: _environment__WEBPACK_IMPORTED_MODULE_3__.default,
      query: _AppQuery !== void 0 ? _AppQuery : (_AppQuery = __webpack_require__(/*! ./__generated__/AppQuery.graphql */ "./src/App/__generated__/AppQuery.graphql.js"), _AppQuery.hash && _AppQuery.hash !== "f49ea50a81661eb7e7cd272cbfb88f4d" && console.error("The definition of 'AppQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _AppQuery),
      variables: {},
      render: ({
        error,
        props
      }) => {
        if (error) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            children: "Error!"
          });
        }

        if (!props) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            children: "Loading..."
          });
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_containers_MainPage__WEBPACK_IMPORTED_MODULE_2__.default, { ...props
        });
      }
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/App/__generated__/AppQuery.graphql.js":
/*!***************************************************!*\
  !*** ./src/App/__generated__/AppQuery.graphql.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +notes: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +content: ?string,
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/

/*
query AppQuery {
  notes {
    _id
    content
  }
}
*/

const node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "alias": null,
    "args": null,
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "notes",
    "plural": true,
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "_id",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }],
    "storageKey": null
  }];
  return {
    "fragment": {
      "argumentDefinitions": [],
      "kind": "Fragment",
      "metadata": null,
      "name": "AppQuery",
      "selections": v0
      /*: any*/
      ,
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [],
      "kind": "Operation",
      "name": "AppQuery",
      "selections": v0
      /*: any*/

    },
    "params": {
      "cacheID": "898fa45cd52fc575a5f8784e94a5a190",
      "id": null,
      "metadata": {},
      "name": "AppQuery",
      "operationKind": "query",
      "text": "query AppQuery {\n  notes {\n    _id\n    content\n  }\n}\n"
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'f49ea50a81661eb7e7cd272cbfb88f4d';
module.exports = node;

/***/ }),

/***/ "./src/App/containers/MainPage/index.js":
/*!**********************************************!*\
  !*** ./src/App/containers/MainPage/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _mutations_createNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutations/createNote */ "./src/App/containers/MainPage/mutations/createNote.js");
/* harmony import */ var _mutations_deleteNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations/deleteNote */ "./src/App/containers/MainPage/mutations/deleteNote.js");
/* harmony import */ var _mutations_updateNote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mutations/updateNote */ "./src/App/containers/MainPage/mutations/updateNote.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const MainPage = ({
  notes
}) => {
  const [newNote, setNewNote] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [noteContentBeingUpdated, setNoteContentBeingUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [noteIdBeingUpdated, setNoteIdBeingUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("header", {
      children: "Notes"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
      children: notes.map(v => {
        const isBeingUpdated = noteIdBeingUpdated === v._id;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [isBeingUpdated ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              autoFocus: true,
              value: noteContentBeingUpdated,
              onChange: e => setNoteContentBeingUpdated(e.target.value)
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
            children: v.content
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              display: 'flex'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => {
                if (isBeingUpdated) {
                  (0,_mutations_updateNote__WEBPACK_IMPORTED_MODULE_3__.default)(v._id, noteContentBeingUpdated);
                  setNoteIdBeingUpdated('');
                  setNoteContentBeingUpdated('');
                } else {
                  setNoteIdBeingUpdated(v._id);
                  setNoteContentBeingUpdated(v.content);
                }
              },
              children: "update"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              onClick: () => (0,_mutations_deleteNote__WEBPACK_IMPORTED_MODULE_2__.default)(v._id),
              children: "delete"
            })]
          })]
        }, v._id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
        value: newNote,
        onChange: e => setNewNote(e.target.value),
        placeholder: "Add a note here"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        onClick: () => {
          if (newNote) {
            (0,_mutations_createNote__WEBPACK_IMPORTED_MODULE_1__.default)(newNote);
            setNewNote('');
          }
        },
        children: "create note"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ "./src/App/containers/MainPage/mutations/__generated__/createNoteMutation.graphql.js":
/*!*******************************************************************************************!*\
  !*** ./src/App/containers/MainPage/mutations/__generated__/createNoteMutation.graphql.js ***!
  \*******************************************************************************************/
/***/ ((module) => {

/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createNoteMutationVariables = {|
  content?: ?string
|};
export type createNoteMutationResponse = {|
  +createNote: ?{|
    +_id: ?string,
    +content: ?string,
  |}
|};
export type createNoteMutation = {|
  variables: createNoteMutationVariables,
  response: createNoteMutationResponse,
|};
*/

/*
mutation createNoteMutation(
  $content: String
) {
  createNote(content: $content) {
    _id
    content
  }
}
*/

const node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "content"
  }],
      v1 = [{
    "alias": null,
    "args": [{
      "kind": "Variable",
      "name": "content",
      "variableName": "content"
    }],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "createNote",
    "plural": false,
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "_id",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }],
    "storageKey": null
  }];
  return {
    "fragment": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Fragment",
      "metadata": null,
      "name": "createNoteMutation",
      "selections": v1
      /*: any*/
      ,
      "type": "Mutation",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Operation",
      "name": "createNoteMutation",
      "selections": v1
      /*: any*/

    },
    "params": {
      "cacheID": "a91c383e999fc12656d5e7ff07695106",
      "id": null,
      "metadata": {},
      "name": "createNoteMutation",
      "operationKind": "mutation",
      "text": "mutation createNoteMutation(\n  $content: String\n) {\n  createNote(content: $content) {\n    _id\n    content\n  }\n}\n"
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'adeba3f4c0016f9eb46f2857739341f8';
module.exports = node;

/***/ }),

/***/ "./src/App/containers/MainPage/mutations/__generated__/deleteNoteMutation.graphql.js":
/*!*******************************************************************************************!*\
  !*** ./src/App/containers/MainPage/mutations/__generated__/deleteNoteMutation.graphql.js ***!
  \*******************************************************************************************/
/***/ ((module) => {

/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteNoteMutationVariables = {|
  _id?: ?string
|};
export type deleteNoteMutationResponse = {|
  +deleteNote: ?string
|};
export type deleteNoteMutation = {|
  variables: deleteNoteMutationVariables,
  response: deleteNoteMutationResponse,
|};
*/

/*
mutation deleteNoteMutation(
  $_id: ID
) {
  deleteNote(_id: $_id)
}
*/

const node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  }],
      v1 = [{
    "alias": null,
    "args": [{
      "kind": "Variable",
      "name": "_id",
      "variableName": "_id"
    }],
    "kind": "ScalarField",
    "name": "deleteNote",
    "storageKey": null
  }];
  return {
    "fragment": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Fragment",
      "metadata": null,
      "name": "deleteNoteMutation",
      "selections": v1
      /*: any*/
      ,
      "type": "Mutation",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Operation",
      "name": "deleteNoteMutation",
      "selections": v1
      /*: any*/

    },
    "params": {
      "cacheID": "6b0e83d64674b2c64b29dce9f074d780",
      "id": null,
      "metadata": {},
      "name": "deleteNoteMutation",
      "operationKind": "mutation",
      "text": "mutation deleteNoteMutation(\n  $_id: ID\n) {\n  deleteNote(_id: $_id)\n}\n"
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = 'a5371187186204b2942ad2583c87fbc9';
module.exports = node;

/***/ }),

/***/ "./src/App/containers/MainPage/mutations/__generated__/updateNoteMutation.graphql.js":
/*!*******************************************************************************************!*\
  !*** ./src/App/containers/MainPage/mutations/__generated__/updateNoteMutation.graphql.js ***!
  \*******************************************************************************************/
/***/ ((module) => {

/**
 * @flow
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateNoteMutationVariables = {|
  content?: ?string,
  _id?: ?string,
|};
export type updateNoteMutationResponse = {|
  +updateNote: ?{|
    +_id: ?string,
    +content: ?string,
  |}
|};
export type updateNoteMutation = {|
  variables: updateNoteMutationVariables,
  response: updateNoteMutationResponse,
|};
*/

/*
mutation updateNoteMutation(
  $content: String
  $_id: ID
) {
  updateNote(_id: $_id, content: $content) {
    _id
    content
  }
}
*/

const node
/*: ConcreteRequest*/
= function () {
  var v0 = {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  },
      v1 = {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "content"
  },
      v2 = [{
    "alias": null,
    "args": [{
      "kind": "Variable",
      "name": "_id",
      "variableName": "_id"
    }, {
      "kind": "Variable",
      "name": "content",
      "variableName": "content"
    }],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "updateNote",
    "plural": false,
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "_id",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }],
    "storageKey": null
  }];
  return {
    "fragment": {
      "argumentDefinitions": [v0
      /*: any*/
      , v1
      /*: any*/
      ],
      "kind": "Fragment",
      "metadata": null,
      "name": "updateNoteMutation",
      "selections": v2
      /*: any*/
      ,
      "type": "Mutation",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [v1
      /*: any*/
      , v0
      /*: any*/
      ],
      "kind": "Operation",
      "name": "updateNoteMutation",
      "selections": v2
      /*: any*/

    },
    "params": {
      "cacheID": "4731bd4beeec173d07fbb688f761b2ef",
      "id": null,
      "metadata": {},
      "name": "updateNoteMutation",
      "operationKind": "mutation",
      "text": "mutation updateNoteMutation(\n  $content: String\n  $_id: ID\n) {\n  updateNote(_id: $_id, content: $content) {\n    _id\n    content\n  }\n}\n"
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '243024c90f652d36ad9a87f3847c033b';
module.exports = node;

/***/ }),

/***/ "./src/App/containers/MainPage/mutations/createNote.js":
/*!*************************************************************!*\
  !*** ./src/App/containers/MainPage/mutations/createNote.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-relay */ "../.yarn/__virtual__/react-relay-virtual-1c6706e880/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/index.js");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environment */ "./src/environment.js");
var _createNoteMutation;



const mutation = _createNoteMutation !== void 0 ? _createNoteMutation : (_createNoteMutation = __webpack_require__(/*! ./__generated__/createNoteMutation.graphql */ "./src/App/containers/MainPage/mutations/__generated__/createNoteMutation.graphql.js"), _createNoteMutation.hash && _createNoteMutation.hash !== "adeba3f4c0016f9eb46f2857739341f8" && console.error("The definition of 'createNoteMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _createNoteMutation);

function createNoteMutation(content) {
  const variables = {
    content
  };
  (0,react_relay__WEBPACK_IMPORTED_MODULE_0__.commitMutation)(_environment__WEBPACK_IMPORTED_MODULE_1__.default, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    updater: store => {
      const payload = store.getRootField('createNote');
      const root = store.getRoot();
      const notes = root.getLinkedRecords('notes');
      const newNotes = [...notes, payload];
      root.setLinkedRecords(newNotes, 'notes');
    },
    onError: err => console.error(err)
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNoteMutation);

/***/ }),

/***/ "./src/App/containers/MainPage/mutations/deleteNote.js":
/*!*************************************************************!*\
  !*** ./src/App/containers/MainPage/mutations/deleteNote.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-relay */ "../.yarn/__virtual__/react-relay-virtual-1c6706e880/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/index.js");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environment */ "./src/environment.js");
var _deleteNoteMutation;



const mutation = _deleteNoteMutation !== void 0 ? _deleteNoteMutation : (_deleteNoteMutation = __webpack_require__(/*! ./__generated__/deleteNoteMutation.graphql */ "./src/App/containers/MainPage/mutations/__generated__/deleteNoteMutation.graphql.js"), _deleteNoteMutation.hash && _deleteNoteMutation.hash !== "a5371187186204b2942ad2583c87fbc9" && console.error("The definition of 'deleteNoteMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _deleteNoteMutation);

function deleteNoteMutation(_id) {
  const variables = {
    _id
  };
  (0,react_relay__WEBPACK_IMPORTED_MODULE_0__.commitMutation)(_environment__WEBPACK_IMPORTED_MODULE_1__.default, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    updater: store => {
      const root = store.getRoot();
      const notes = root.getLinkedRecords('notes');
      const newNotes = notes.filter(v => v.getValue('_id') !== _id);
      root.setLinkedRecords(newNotes, 'notes');
    },
    onError: err => console.error(err)
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteNoteMutation);

/***/ }),

/***/ "./src/App/containers/MainPage/mutations/updateNote.js":
/*!*************************************************************!*\
  !*** ./src/App/containers/MainPage/mutations/updateNote.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-relay */ "../.yarn/__virtual__/react-relay-virtual-1c6706e880/0/cache/react-relay-npm-11.0.2-b643d9cfd2-f48518a961.zip/node_modules/react-relay/index.js");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environment */ "./src/environment.js");
var _updateNoteMutation;



const mutation = _updateNoteMutation !== void 0 ? _updateNoteMutation : (_updateNoteMutation = __webpack_require__(/*! ./__generated__/updateNoteMutation.graphql */ "./src/App/containers/MainPage/mutations/__generated__/updateNoteMutation.graphql.js"), _updateNoteMutation.hash && _updateNoteMutation.hash !== "243024c90f652d36ad9a87f3847c033b" && console.error("The definition of 'updateNoteMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _updateNoteMutation);

function updateNoteMutation(_id, content) {
  const variables = {
    _id,
    content
  };
  (0,react_relay__WEBPACK_IMPORTED_MODULE_0__.commitMutation)(_environment__WEBPACK_IMPORTED_MODULE_1__.default, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    updater: store => {
      const newUpdatedNote = store.getRootField('updateNote');
      const root = store.getRoot();
      const notes = root.getLinkedRecords('notes');
      const newNotes = notes.filter(v => v.getValue('_id') !== _id);
      root.setLinkedRecords([...newNotes, newUpdatedNote], 'notes');
    },
    onError: err => console.error(err)
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateNoteMutation);

/***/ }),

/***/ "./src/environment.js":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! relay-runtime */ "../.yarn/cache/relay-runtime-npm-11.0.2-c3b3a84bb1-aa6507f4cc.zip/node_modules/relay-runtime/index.js");
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(relay_runtime__WEBPACK_IMPORTED_MODULE_0__);


function fetchQuery(operation, variables) {
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new relay_runtime__WEBPACK_IMPORTED_MODULE_0__.Environment({
  network: relay_runtime__WEBPACK_IMPORTED_MODULE_0__.Network.create(fetchQuery),
  store: new relay_runtime__WEBPACK_IMPORTED_MODULE_0__.Store(new relay_runtime__WEBPACK_IMPORTED_MODULE_0__.RecordSource())
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (environment);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../.yarn/__virtual__/react-dom-virtual-424690f422/0/cache/react-dom-npm-17.0.2-f551215af1-1c1eaa3bca.zip/node_modules/react-dom/index.js");
/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App/App */ "./src/App/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_App_App__WEBPACK_IMPORTED_MODULE_2__.default, {}), document.getElementById('root'));

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "style/c69107863a1b40fec498.css";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map