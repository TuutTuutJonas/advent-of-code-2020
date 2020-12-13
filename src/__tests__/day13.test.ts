import { d13c1, d13c2 } from "../challenges/day13";
import { d13Mock, d13Mock2, d13Mock3, d13Mock4, d13Mock5, d13Mock6 } from "../challenges/data/day13";
describe("Day 13 works", () => {
    it("solves the first challenge", () => {
        expect(d13c1(d13Mock)).toBe(295);
    });

    it("solves the second challenge", () => {
        expect(d13c2(d13Mock)).toBe(1068781);
        expect(d13c2(d13Mock2)).toBe(3417);
        expect(d13c2(d13Mock3)).toBe(754018);
        expect(d13c2(d13Mock4)).toBe(779210);
        expect(d13c2(d13Mock5)).toBe(1261476);
        expect(d13c2(d13Mock6)).toBe(1202161486);
    });
});