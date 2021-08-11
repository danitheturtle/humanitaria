"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoDbRepository = _interopRequireDefault(require("../repository/mongoDbRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NoteService {
  constructor() {
    this.NoteRepository = new _mongoDbRepository.default('Notes');
  }

  getAllNotes() {
    return this.NoteRepository.getAll();
  }

  updateNote(_id, opt) {
    return this.NoteRepository.updateOne(_id, opt);
  }

  deleteNote(_id) {
    return this.NoteRepository.deleteOne(_id);
  }

  createNote(opt) {
    return this.NoteRepository.create(opt);
  }

}

var _default = NoteService;
exports.default = _default;