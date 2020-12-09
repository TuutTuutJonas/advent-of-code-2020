import { d9c1, d9c2 } from "../challenges/day9";
import { d9Mock } from "../challenges/data/day9";
describe("Day 9 works", () => {
    it("solves the first challenge", () => {
        expect(d9c1(d9Mock, 5)).toBe(127);
    });

    it("solves the second challenge", () => {
        expect(d9c2(d9Mock, 5)).toBe(62);
    });
});