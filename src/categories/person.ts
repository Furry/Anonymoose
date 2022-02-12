import namesFirst from "../data/namesFirst.js"
import namesLast from "../data/namesLast.js";
import { Numeric } from "../index.js"
import { pick } from "./global.js"

/**
 * Generates a randomized Social Security Number.
 * 
 * @example
 * ```js
 * Person.SSN()
 * > 334-22-5121
 * ```
 */
export function SSN(): string {
    return Numeric.templateInt("X", "XXX-XX-XXXX")
}

/**
 * Selects a random first name.
 * @returns A random first name.
 * 
 * @example
 * ```js
 * Person.firstName()
 * > Jane
 * ```
 */
export function firstName(): string {
    return pick(namesFirst);
}

/**
 * Selects a random last name.
 * @returns A random last name.
 * 
 * @example
 * ```js
 * Person.lastName()
 * > Dean
 */
export function lastName(): string {
    return pick(namesLast);
}

/**
 * Selects a full first + last name, without a middle name.
 * @returns A random full-name. 
 * 
 * @example
 * ```js
 * Person.fullName()
 * > Jane Doe
 * ```
 */
export function fullName(): string {
    return firstName() + " " + lastName();
}