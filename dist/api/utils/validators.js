"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAndCleanInput = exports.validCharacters = exports.usernameChars = exports.idCharacters = void 0;
var _validator = require("validator");
const allowedSpecialCharacters = "~!@#$%^&*()_-+={[}]|:;<,>./?\\";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const alphabet = lowercase + uppercase;
const numbers = "0123456789";
const validCharacters = alphabet + numbers + allowedSpecialCharacters;
exports.validCharacters = validCharacters;
const usernameChars = alphabet + numbers + "-_";
exports.usernameChars = usernameChars;
const idCharacters = lowercase + numbers;
exports.idCharacters = idCharacters;
const sanitizersByKey = {
  username: dirtyVal => (0, _validator.whitelist)((0, _validator.trim)(dirtyVal), usernameChars),
  email: dirtyVal => (0, _validator.isEmail)((0, _validator.trim)(dirtyVal)) ? (0, _validator.normalizeEmail)((0, _validator.trim)(dirtyVal)) : "",
  __default: dirtyVal => (0, _validator.trim)(dirtyVal)
};
//true means error
const validatorsByKey = {
  username: () => false,
  email: val => !(0, _validator.isEmail)(val),
  passwordHash: () => false,
  __default: () => false
};
const sanitize = args => Object.entries(args).reduce((result, [k, v]) => {
  if (typeof v === 'object') {
    result[k] = sanitize(v);
  } else {
    result[k] = sanitizersByKey[k] ? sanitizersByKey[k](v) : sanitizersByKey.__default(v);
  }
  return result;
}, {});
const validate = (args, keysRequired) => Object.entries(args).reduce((result, [k, v]) => {
  if (typeof v === 'object') {
    result[k] = validate(v);
  } else {
    result[k] = validatorsByKey[k] ? validatorsByKey[k](v) : validatorsByKey.__default(v);
    if (keysRequired.includes(k)) {
      result[k] = result[k] && !(0, _validator.isEmpty)(v);
    }
  }
  return result;
}, {});
const validateAndCleanInput = (args, keysRequired = []) => {
  const cleanedInput = sanitize(args);
  const validationResult = validate(cleanedInput, keysRequired);
  return [cleanedInput, validationResult];
};
exports.validateAndCleanInput = validateAndCleanInput;