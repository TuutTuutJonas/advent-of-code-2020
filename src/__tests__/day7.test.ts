import { d7c1, d7c2 } from "../challenges/day7";
import { d7Mock, d7Mock2 } from "../challenges/data/day7";
describe("Day 7 works", () => {
    it("solves the first challenge", () => {
        expect(d7c1(d7Mock)).toBe(4);
    });

    it("solves the second challenge", () => {
        expect(d7c2(d7Mock)).toBe(32);
        expect(d7c2(d7Mock2)).toBe(126);
    });
});