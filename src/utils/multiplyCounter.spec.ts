import {describe, expect, it} from "vitest";
import {multiplyCounter} from "./multiplyCounter.ts";

describe("multiplyCounter", () => {
    it("should multiply by 2", () => {
        const result = multiplyCounter(2,2);

        expect(result).toBe(4)

    })
})