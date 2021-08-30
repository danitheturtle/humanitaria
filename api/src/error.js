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
    if (message instanceof Array) {
      super(message.join('; '));
      this.messageList = message;
    } else {
      super(message);
      this.messageList = [message];
    }
    this.code = 403;
    this.errorOnInput = inputId;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}