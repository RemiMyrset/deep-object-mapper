/**
 * Recursive keyof
 */
type RecursiveKeyof<
  // Generic
  T = unknown
> = T extends Date
  ? // Is Date
    never // We do not want getDay, getHours etc
  : T extends Array<any>
  ? // Is array
    never // We do not want concat, copyWithin etc
  : T extends object
  ? // Is valid
    {
      [Key in keyof T & (string | number)]:
        | `${Key}`
        | `${Key}.${RecursiveKeyof<T[Key]>}`;
    }[keyof T & (string | number)]
  : // Is invalid
    never;

export { RecursiveKeyof };
