"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _databaseConnection = require("../config/databaseConnection");

var _mongodb = require("mongodb");

class MongoDbRepo {
  constructor(collectionName) {
    this.collection = (0, _databaseConnection.getDB)().collection(collectionName);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.collection.find({}).toArray((err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }

  geById(_id) {
    return new Promise((resolve, reject) => {
      this.collection.findOne({
        _id: (0, _mongodb.ObjectId)(_id)
      }, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }

  updateOne(_id, opt) {
    return new Promise((resolve, reject) => {
      this.collection.findOneAndUpdate({
        _id: (0, _mongodb.ObjectId)(_id)
      }, {
        $set: opt
      }, {
        returnOriginal: false
      }, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data.value);
      });
    });
  }

  deleteOne(_id) {
    return new Promise((resolve, reject) => {
      this.collection.findOneAndDelete({
        _id: (0, _mongodb.ObjectId)(_id)
      }, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }

  create(opt) {
    return new Promise((resolve, reject) => {
      this.collection.insertOne(opt, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
      1;
    });
  }

}

var _default = MongoDbRepo;
exports.default = _default;