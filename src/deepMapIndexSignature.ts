import { RecursiveKeyof } from "./recursiveKeyof";

/**
 * Get the Type of whatever the array is holding
 */
type TypeOfArrayElement<ArrayType extends any[]> =
  ArrayType extends (infer ElementType)[] ? ElementType : never;

/**
 * Map type to generate lhs and rhs
 */
type DeepMapIndexSignature<
  Input = unknown,
  Output = unknown
> = Input extends object
  ? // Input OK
    Output extends Array<unknown>
    ? // Is array
      {
        [key in RecursiveKeyof<Input>]?: keyof TypeOfArrayElement<Output>;
      }
    : Output extends object
    ? // Is object
      {
        [key in RecursiveKeyof<Input>]?: RecursiveKeyof<Output>;
      }
    : // Output NOT OK
      {
        [key in RecursiveKeyof<Input>]: never;
      }
  : // Input NOT OK
    never;

export { DeepMapIndexSignature };
