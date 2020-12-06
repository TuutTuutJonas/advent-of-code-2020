export function d3c1(data: string[]): number {
    const lengthNeeded = data.length * 3;
    const lineLength = data[0].length;
    const patternRepeat = Math.ceil(lengthNeeded / lineLength);

    let trees = 0;
    data.forEach((line, index) => {
        const repeatedLine = line.repeat(patternRepeat);
        const item = repeatedLine[index * 3];
        if (item === "#") trees++;
    });
    return trees;
}


export function d3c2(data: string[]): number {
    const lineLength = data[0].length;
    const slopes = constructSlopes();

    slopes.forEach((slope, slopeIndex) => {
        let lineIndex = 0;
        for (let rowIndex = 0; rowIndex < data.length; rowIndex += slope.down) {
            const lengthNeeded = data.length * slope.right;
            const patternRepeat = Math.ceil(lengthNeeded / lineLength);
            const repeatedLine = data[rowIndex].repeat(patternRepeat);
            const item = repeatedLine[lineIndex];
            if (item === "#") slopes[slopeIndex].trees++;
            lineIndex += slope.right;
        }
    });
    return slopes.map((slope) => slope.trees).reduce((treesA, treesB) => treesA*treesB, 1);
}

function constructSlopes() {
    return [
        { right: 1, down: 1, trees: 0 }, // eslint-disable-line
        { right: 3, down: 1, trees: 0 }, // eslint-disable-line
        { right: 5, down: 1, trees: 0 }, // eslint-disable-line
        { right: 7, down: 1, trees: 0 }, // eslint-disable-line
        { right: 1, down: 2, trees: 0 } // eslint-disable-line
    ];
}