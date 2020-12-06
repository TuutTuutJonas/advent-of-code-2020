import { d6c1, d6c2 } from "../challenges/day6";
import { d6Mock } from "../challenges/data/day6";
describe("Day 5 works", () => {
    it("solves the first challenge", () => {
        expect(d6c1(d6Mock)).toBe(11);
    });

    it("solves the second challenge", () => {
        expect(d6c2(d6Mock)).toBe(6);
    });
});