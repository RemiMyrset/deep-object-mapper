import { compact, isObject, get, set, isArray as _isArray } from "lodash";
import { log } from "./log";

/**
 * Iterator
 */
function iterate<Input, Output>(
  /**
   * User never needs to operate these
   */
  options?: {
    input: Input;
    map: any;
    output?: Output;
    stack?: string;
    skippedProperties?: string[];
    verbose?: boolean;
  }
): {
  output: Output;
  skippedProperties: string[];
} {
  const {
    input,
    map,
    output = {} as Output,
    stack,
    skippedProperties = [],
    verbose,
  } = options || {};

  for (const property in input) {
    const path = compact([stack, property]).join(".");
    const type = typeof input[property];
    const mappedKey: string | undefined = map[path];

    const isDate = input[property] instanceof Date;
    const isArray = _isArray(input[property]);
    const isFunction = typeof input[property] === "function";

    if (
      /** Iterate objects only */
      isObject(input[property]) &&
      /**
       *  Do not iterate these 👇
       */
      !(input[property] instanceof Date) &&
      !isArray &&
      !isFunction
    ) {
      // Is object. Go deeper
      iterate({
        input: input[property],
        map,
        output,
        stack: path,
        skippedProperties,
        verbose,
      });
    } else {
      let value: any = get(input, property);
      if (mappedKey) {
        const oldValue = get(output, mappedKey);
        if (isArray && _isArray(oldValue)) {
          /**
           * Since it is possible to map
           * - Multiple objects into an object
           * An implementation was made to allow mapping of
           * - Multiple lists into a list
           * (Instead of overwriting)
           */
          value = oldValue.concat(value);
        }

        log({
          message: `${path}:${isDate ? "Date" : isArray ? "Array" : type}`,
          context: `Mapped to ${mappedKey}`,
          verbose,
        });

        set(output as object, mappedKey, value);
      } else {
        skippedProperties.push(path);
        log({
          message: `${path}:${isDate ? "Date" : isArray ? "Array" : type}`,
          context: `Skipped`,
          verbose,
        });
      }
    }
  }
  return { output, skippedProperties };
}

export { iterate };
