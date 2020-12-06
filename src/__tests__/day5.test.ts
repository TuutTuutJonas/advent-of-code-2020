import { d5c1 } from "../challenges/day5";
import { d5Mock } from "../challenges/data/day5";
describe("Day 5 works", () => {
    it("solves the first challenge", () => {
        expect(d5c1(d5Mock)).toBe(820);
    });
});