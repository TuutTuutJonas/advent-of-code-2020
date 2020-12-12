import { d12c1, d12c2 } from "../challenges/day12";
import { d12Mock } from "../challenges/data/day12";
describe("Day 12 works", () => {
    it("solves the first challenge", () => {
        expect(d12c1(d12Mock)).toBe(25);
    });

    it("solves the second challenge", () => {
        expect(d12c2(d12Mock)).toBe(286);
    });
});