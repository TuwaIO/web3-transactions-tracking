/**
 * Checks if the provided item is an object.
 *
 * This function determines whether the given input is an object
 * and not null or an array. It excludes arrays and non-object
 * types, ensuring the result is strictly a plain object.
 *
 * @param {any} item - The input item to be checked.
 * @returns {item is Record<string, any>} True if the input is an object, otherwise false.
 */
const isObject = (item: any): item is Record<string, any> => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

/**
 * Merges properties of the source object into the target object deeply.
 * This function recursively merges nested objects and overrides properties in the target object with the corresponding properties from the source object.
 *
 * @param {T} target - The target object to which properties will be merged.
 * @param {Partial<T>} source - The source object containing properties to merge into the target object.
 * @return {T} The resulting object after merging the source object into the target object.
 */
export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const targetValue = target[key as keyof T];
      const sourceValue = source[key as keyof T];

      if (isObject(targetValue) && isObject(sourceValue)) {
        output[key as keyof T] = deepMerge(targetValue as object, sourceValue as object) as T[keyof T];
      } else {
        output[key as keyof T] = sourceValue as T[keyof T];
      }
    });
  }

  return output;
}
