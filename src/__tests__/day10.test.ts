import { d10c1, d10c2 } from "../challenges/day10";
import { d10Mock, d10Mock2 } from "../challenges/data/day10";
describe("Day 10 works", () => {
    it("solves the first challenge", () => {
        expect(d10c1(d10Mock2)).toBe(35);
        expect(d10c1(d10Mock)).toBe(220);
    });

    it("solves the second challenge", () => {
        expect(d10c2(d10Mock2)).toBe(8);
        expect(d10c2(d10Mock)).toBe(19208);
    });
});