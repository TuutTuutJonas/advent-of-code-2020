export function d10c1(data: number[]): number {
    const sorted = data.sort((a, b) => a - b);
    let joltageRating = 0;
    const occurences: Occurence[] = [];
    sorted.forEach((joltage) => {
        const difference = joltage - joltageRating;
        const arrayIndex = findDifferenceIndex(difference, occurences);
        if (arrayIndex === -1)
            occurences.push({
                difference: difference,
                occurences: 1
            });
        else occurences[arrayIndex].occurences++;
        joltageRating = joltage;
    });

    const oneJoltDifference = occurences[findDifferenceIndex(1, occurences)].occurences;
    const threeJoltDifference = occurences[findDifferenceIndex(3, occurences)].occurences + 1;
    return oneJoltDifference * threeJoltDifference;
}

function findDifferenceIndex(difference: number, data: Occurence[]): number {
    return data.findIndex((differenceOccurence) => differenceOccurence.difference === difference);
}

interface Occurence {
    difference: number,
    occurences: number
}

export function d10c2(data: number[]) {
    data.push(0);
    data.sort((a, b) => a-b);
    data.push(data[data.length - 1] + 3);

    return getCombinations(data);
}

function getCombinations(data: number[], memorized = {}): number {
    const solutionKey = data.join(",");
    if (solutionKey in memorized) return memorized[solutionKey];

    let combinations = 1;
    for (let index = 1; index < data.length - 1; index++)
        if (data[index + 1] - data[index - 1] <= 3) {
            const newArray = [data[index - 1]].concat(data.slice(index + 1));
            combinations += getCombinations(newArray, memorized);
        }

    memorized[solutionKey] = combinations;
    return combinations;
}