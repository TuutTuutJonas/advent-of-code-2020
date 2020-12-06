import * as challenges from "./challenges/index";

solveChallenges();
function solveChallenges() {
    console.log("Day 1 - Challenge 1: ", challenges.d1c1(challenges.d1Data));
    console.log("Day 1 - Challenge 2: ", challenges.d1c2(challenges.d1Data));
    console.log("--------------------");
    console.log("Day 2 - Challenge 1: ", challenges.d2c1(challenges.d2Data));
    console.log("Day 2 - Challenge 2: ", challenges.d2c2(challenges.d2Data));
    console.log("--------------------");
    console.log("Day 3 - Challenge 1: ", challenges.d3c1(challenges.d3Data));
    console.log("Day 3 - Challenge 2: ", challenges.d3c2(challenges.d3Data));

    console.log("--------------------");
    console.log("Day 4 - Challenge 1: ", challenges.d4c1(challenges.d4Data));
    console.log("Day 4 - Challenge 2: ", challenges.d4c2(challenges.d4Data));

    console.log("--------------------");
    console.log("Day 5 - Challenge 1: ", challenges.d5c1(challenges.d5Data));
    console.log("Day 5 - Challenge 2: ", challenges.d5c2(challenges.d5Data));

    console.log("--------------------");
    console.log("Day 6 - Challenge 1: ", challenges.d6c1(challenges.d6Data));
    console.log("Day 6 - Challenge 2: ", challenges.d6c2(challenges.d6Data));
}