/**
 * The class to handle all numeric randomization.
 */
export function int(size: number = 1): number {
    switch (size) {
        case 1:
            return Math.floor(Math.random() * 10);
        default:
            if (1 > size) {
                throw "Cannot create a number with a length less then one." 
            }
            return Math.floor(Math.random() * (("1" + new Array(size).fill("0").join("")) as any));
    }
}

/**
 * Replaces given characters in a string with a unique random number each.
 * @param replacer A character that should be replaced with a random number.
 * @param input The input string to template
 * 
 * @example
 * ```js
 * templateInt("X", "(XXX) XXX-XXXX")
 */
export function templateInt(replacer: string, input: string): string {
    while (input.includes(replacer)) {
        input = input.replace(replacer, int().toString());
    }

    return input;
}