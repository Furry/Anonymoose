/**
 * Picks a random element from an Arraay
 * @param arr The array to pick from
 * @returns An element from the array.
 */
export function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}