import { iterate } from "./iterate";
import { log } from "./log";
import { DeepMapIndexSignature } from "./deepMapIndexSignature";
import { isArray as _isArray, cloneDeep } from "lodash";

/**
 * Recursive Object Mapper
 */
function deepMap<Input, Output>(options?: {
  /**
   * Input / source object to map items from.
   */
  input: Input;
  /**
   * Keys for mapping input to output
   */
  map?: DeepMapIndexSignature<Input, Output>;
  /**
   * By default, the output object is created from scratch.
   *
   * You can supply an object to additively map to.
   */
  writeTarget?: Output;
  /**
   * Log messages
   */
  verbose?: boolean;
}): {
  output?: Output;
  skippedProperties?: string[];
} {
  const { input, map, writeTarget, verbose = false } = options || {};

  if (!input) {
    log({
      message: "No Input",
      error: true,
    });
    return {
      output: undefined,
      skippedProperties: undefined,
    };
  }

  if (!map) {
    log({
      message: "No Map",
      error: true,
    });
    return {
      output: undefined,
      skippedProperties: undefined,
    };
  }

  const { output, skippedProperties } = iterate<Input, Output>({
    input: cloneDeep(input),
    map,
    verbose,
    output: cloneDeep(writeTarget),
  });

  log({
    message: `Mapping complete`,
    verbose,
  });
  if (skippedProperties.length) {
    log({
      message: `${
        skippedProperties.length
      } keys were not mapped: ${skippedProperties.join(", ")}`,
      verbose,
    });
  }

  return { output, skippedProperties };
}

export { deepMap };
