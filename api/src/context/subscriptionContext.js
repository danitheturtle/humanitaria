import { Context } from './index';
import session from '../session';

export class SubscriptionContext extends Context {
  constructor(ctx, msg, args, pubsubProvider) {
    super(ctx?.extra?.request, pubsubProvider);
    this.socketContext = ctx;
  }
  async getSession() {
    await session(this.req, null, () => {});
    return this;
  }
}