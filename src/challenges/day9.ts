// ------------------------------------------------------------------------------------------
// Challenge 1 - Find first number which is not the sum of two of the 25 numbers before it.
// ------------------------------------------------------------------------------------------
export function d9c1(data: number[], preambleSize: number): number {
    let breakingNumber = 0;
    for (let index = preambleSize; index < data.length; index++) {
        const num = data[index];
        const preambleData = getPreambleData(data, index, preambleSize);
        const hasPair = findPair(preambleData, num);
        if (!hasPair) {
            breakingNumber = num;
            break;
        }
    }
    return breakingNumber;
}

function getPreambleData(data: number[], index: number, preambleSize: number): number[] {
    const startIndex = index - preambleSize;
    return data.filter((_, dataIndex) => {
        return (dataIndex >= startIndex) && dataIndex < (startIndex + preambleSize);
    });
}

function findPair(data: number[], searchValue: number): boolean {
    return data.find((num) => {
        const missing = searchValue - num;
        if (data.includes(missing) && missing !== num)
            return true;
        return false;
    }) != null;
}


// ------------------------------------------------------------------------------------------
// Challenge 2 - Find the weakness, add together the smallest and largest number in contiguous range
// ------------------------------------------------------------------------------------------
export function d9c2(data: number[], preambleSize: number): number {
    const searchValue = d9c1(data, preambleSize);
    let answerSet: number[] = [];

    for (let index = 0; index < data.length; index++) {
        const num = data[index];
        if (num > searchValue) break;

        let sum = num;
        answerSet = [num];
        let searchIndex = index + 1;
        while (sum <= (searchValue - data[searchIndex])) {
            if (data[searchIndex] === num) break;
            sum += data[searchIndex];
            answerSet.push(data[searchIndex]);
            searchIndex++;
        }
        if (sum === searchValue && answerSet.length) break;
    }

    const sortedAnswers = answerSet.sort((a, b) => a - b);
    return sortedAnswers[0] + sortedAnswers[sortedAnswers.length-1];
}
