import { whitelist, isEmpty, isEmail, normalizeEmail, trim } from 'validator';

const allowedSpecialCharacters = "\~\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\:\;\<\,\>\.\?";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const alphabet = lowercase + uppercase;
const numbers = "0123456789";
export const validCharacters = alphabet + numbers + allowedSpecialCharacters
export const usernameChars = alphabet + numbers + "\-\_";
export const idCharacters = lowercase + numbers;

const sanitizersByKey = {
  username: dirtyVal => whitelist(trim(dirtyVal), usernameChars),
  email: dirtyVal => isEmail(trim(dirtyVal)) ? normalizeEmail(trim(dirtyVal)) : "",
  __default: dirtyVal => trim(dirtyVal)
}
//true means error
const validatorsByKey = {
  username: val => false,
  email: val => !isEmail(val),
  passwordHash: val => false,
  __default: val => false
}

const sanitize = (args) => Object.entries(args).reduce((result, [k, v]) => {
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
      result[k] = result[k] && !isEmpty(v);
    }
  }
  return result;
}, {});

export const validateAndCleanInput = (args, keysRequired = []) => {
  const cleanedInput = sanitize(args);
  const validationResult = validate(cleanedInput, keysRequired);
  return [cleanedInput, validationResult];
}