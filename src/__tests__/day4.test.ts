import { d4c1, d4c2 } from "../challenges/day4";
import { d4Mock } from "../challenges/data/day4";
describe("Day 4 works", () => {
    it("solves the first challenge", () => {
        expect(d4c1(d4Mock)).toBe(2);
    });

    it("solves the second challenge", () => {
        expect(d4c2(d4Mock)).toBe(2);
    });
});