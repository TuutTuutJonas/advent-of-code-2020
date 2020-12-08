import { d8c1, d8c2 } from "../challenges/day8";
import { d8Mock } from "../challenges/data/day8";
describe("Day 8 works", () => {
    it("solves the first challenge", () => {
        expect(d8c1(d8Mock)).toBe(5);
    });

    it("solves the second challenge", () => {
        expect(d8c2(d8Mock)).toBe(8);
    });
});