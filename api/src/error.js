export class UnauthorizedError extends Error {
  constructor(msg = "401 Unauthorized") {
    super(msg);
    this.code = 401
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ForbiddenError extends Error {
  constructor(msg = "403 Access Denied") {
    super(msg);
    this.code = 403
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InputError extends Error {
  constructor(message = "400 Bad Request", inputId) {
    super(message);
    this.code = 400;
    this.forInputWithId = inputId;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export const validatorResultToErrorList = (errorList, inputId) => errorList.map(err => new InputError(err, inputId));
