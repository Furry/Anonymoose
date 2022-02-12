import { pick } from "./global.js";

export type CharSet =
    "AlphabeticUpper" |
    "AlphabeticLower" |
    "AlphabeticUpperLower" |
    "AlphanumericUpper" |
    "AlphanumericLower" |
    "AlphanumericUpperLower" |
    "Numeric" |
    "Base64" |
    "Octal"

export function randomChars(len: number, charset: CharSet | String = "AlphanumericUpperLower") {
    let characters: string[];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";

    switch (charset) {
        case "AlphabeticUpper":
            characters = alphabet.toUpperCase().split("");
            break;
        case "AlphabeticLower":
            characters = alphabet.split("");
            break;
        case "AlphabeticUpperLower":
            characters = [
                ...alphabet.split(""), 
                ...alphabet.toUpperCase().split("")
            ];
            break;
        case "AlphanumericUpper":
            characters = [
                ...alphabet.toUpperCase().split(""),
                ...numbers.split("")
            ]
            break;
        case "AlphanumericLower":
            characters = [
                ...alphabet.split(""),
                ...numbers.split("")
            ]
            break;
        case "AlphanumericUpperLower":
            characters = [
                ...alphabet.split(""),
                ...alphabet.toUpperCase().split(""),
                ...numbers.split("")
            ];
            break;
        case "Numeric":
            characters = numbers.split("");
            break;
        case "Base64":
            characters = [
                ...alphabet.split(""),
                ...alphabet.toUpperCase().split(""),
                ...numbers.split(""),
                "+", "/"
            ];
            break;
        case "Octal":
            characters = "01234567".split("");
            break;
        default:
            characters = charset.split("");
            break;
        }

    const body = [];
    for (let x = 0; len > x; x++) {
        body.push(pick(characters));
    }

    return body.join("");
}