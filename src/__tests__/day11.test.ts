import { d11c1 } from "../challenges/day11";
import { d11Mock } from "../challenges/data/day11";
describe("Day 11 works", () => {
    it("solves the first challenge", () => {
        expect(d11c1(d11Mock)).toBe(37);
    });

    // it("solves the second challenge", () => {
    //     expect(d10c2(d10Mock2)).toBe(8);
    //     expect(d10c2(d10Mock)).toBe(19208);
    // });
});