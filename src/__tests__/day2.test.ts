import { d2c1, d2c2 } from "../challenges/day2";
import { d2Mock } from "../challenges/data/day2";
describe("Day 2 works", () => {
    it("solves the first challenge", () => {
        expect(d2c1(d2Mock)).toBe(2);
    });

    it("solves the second challenge", () => {
        expect(d2c2(d2Mock)).toBe(1);
    });
});