import { fromGlobalId as parseGlobalId } from "graphql-relay";

export function fromGlobalId(globalId, expectedType) {
  const { id, type } = parseGlobalId(globalId);

  if (expectedType && type !== expectedType) {
    throw new Error(
      `Expected an ID of type '${expectedType}' but got '${type}'.`,
    );
  }

  return id;
}

export const assignNodeType = type => obj => {
  if (obj) {
    Object.defineProperty(obj, "nodeType", {
      configurable: false,
      enumerable: false,
      value: type
    });
  }
  return obj;
}

export const getNodeType = obj => (obj ? obj.nodeType : undefined)