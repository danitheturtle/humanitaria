import { Request } from 'express';
import db from './db';
import { ForbiddenError, UnauthorizedError } from './error';

export class Context {
  constructor(req) {
    this.req = req;
  }
}