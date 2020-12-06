import { d3c1, d3c2 } from "../challenges/day3";
import { d3Mock } from "../challenges/data/day3";
describe("Day 3 works", () => {
    it("solves the first challenge", () => {
        expect(d3c1(d3Mock)).toBe(7);
    });

    it("solves the second challenge", () => {
        expect(d3c2(d3Mock)).toBe(336);
    });
});