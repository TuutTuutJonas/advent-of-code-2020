// eslint-disable-next-line
export function d11c1(data: string[]): number {
    let preparedData = prepareData(data);

    const dataCopy: string[][] = JSON.parse(JSON.stringify(preparedData));
    let occupiedCounter = 0;
    let previousCounter = 0;
    let initial = true;
    while (initial || occupiedCounter !== previousCounter) {
        initial = false;
        previousCounter = occupiedCounter;
        occupiedCounter = 0;
        preparedData.forEach((row, rowIndex) => {
            row.forEach((seat, seatIndex) => {
                const occupied = adjacentSeatsFilled(preparedData, rowIndex, seatIndex);
                if (seat === "L" && occupied === 0)
                    dataCopy[rowIndex][seatIndex] = "#";
                if (seat === "#" && occupied >= 4)
                    dataCopy[rowIndex][seatIndex] = "L";

                if (dataCopy[rowIndex][seatIndex] === "#")
                    occupiedCounter++;
            });
        });
        preparedData = JSON.parse(JSON.stringify(dataCopy));
    }
    return occupiedCounter;
}

// eslint-disable-next-line
function adjacentSeatsFilled(data: string[][], rowIndex: number, seatIndex: number): number {
    let occupied = 0;
    if (data[rowIndex][seatIndex - 1] === "#") occupied++;
    if (data[rowIndex][seatIndex + 1] === "#") occupied++;

    if (data[rowIndex-1] && data[rowIndex-1][seatIndex - 1] === "#") occupied++;
    if (data[rowIndex-1] && data[rowIndex-1][seatIndex + 1] === "#") occupied++;
    if (data[rowIndex - 1] && data[rowIndex - 1][seatIndex] === "#") occupied++;

    if (data[rowIndex+1] && data[rowIndex+1][seatIndex - 1] === "#") occupied++;
    if (data[rowIndex+1] && data[rowIndex+1][seatIndex + 1] === "#") occupied++;
    if (data[rowIndex+1] && data[rowIndex+1][seatIndex] === "#") occupied++;

    return occupied;
}

function prepareData(data: string[]): string[][] {
    const converted: string[][] = [];
    for (let index = 0; index < data.length; index++)
        converted.push(data[index].split(""));
    return converted;
}