import { d1c1, d1c2 } from "../challenges/day1";
import { d1Mock } from "../challenges/data/day1";
describe("Day 1 works", () => {
    it("solves the first challenge", () => {
        expect(d1c1(d1Mock)).toBe(514579);
    });

    it("solves the second challenge", () => {
        expect(d1c2(d1Mock)).toBe(241861950);
    });
});