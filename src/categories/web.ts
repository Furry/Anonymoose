import { pick } from "./global.js";
import { templateInt } from "./numeric.js";

const headers = [
    "Mozilla/#.#",
    "Chromium/#.#",
    "Chromium-Like"
]

const systems = [
    "Windows",
    "Linux",
    "Macintosh",
    "MacOS",
    "Mobile",
    "MX1",
    "Android #",
];

const architectures = [
    "x86_64", 
    "x64",
    "ARM",
    "Win64; x64",
    "Win32; x64"
];

const renderingEngines = [
    "Blink/#.#.#",
    "Presto/#.#.#",
    "AppleWebKit/###.## (KHTML, like Gecko)",
]

/**
 * Generates a random agent.
 * @returns A randomly-generated user agent.
 */
export function userAgent(): string {
    return templateInt("#", 
        `${pick(headers)} (${pick(systems)}; ${pick(architectures)}) ${pick(renderingEngines)}`);
}