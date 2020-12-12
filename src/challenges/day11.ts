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
export function d11c2(data: string[]): number {
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
                const occupied = adjacentSeatsFilledC2(preparedData, rowIndex, seatIndex);
                if (seat === "L" && occupied === 0) dataCopy[rowIndex][seatIndex] = "#";
                else if (seat === "#" && occupied >= 5) dataCopy[rowIndex][seatIndex] = "L";

                if (dataCopy[rowIndex][seatIndex] === "#") occupiedCounter++;
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

// eslint-disable-next-line
function adjacentSeatsFilledC2(data: string[][], rowIndex: number, seatIndex: number): number {
    let occupied = goInDirection(data, rowIndex, seatIndex, "left");
    occupied += goInDirection(data, rowIndex, seatIndex, "right");
    occupied += goInDirection(data, rowIndex, seatIndex, "down");
    occupied += goInDirection(data, rowIndex, seatIndex, "up");
    occupied += goInDirection(data, rowIndex, seatIndex, "upright");
    occupied += goInDirection(data, rowIndex, seatIndex, "upleft");
    occupied += goInDirection(data, rowIndex, seatIndex, "downleft");
    occupied += goInDirection(data, rowIndex, seatIndex, "downright");

    return occupied;
}

// eslint-disable-next-line
function goInDirection(data: string[][], rowIndex: number, seatIndex: number, type: "left"|"right"|"down"|"up"|"upright"|"upleft"|"downright"|"downleft"): number {
    let occupied = 0;
    while (verticalCheck(data, rowIndex, type) && horizontalCheck(data, seatIndex, type)) {
        if (type.includes("left")) seatIndex--;
        else if (type.includes("right")) seatIndex++;

        if (type.includes("down")) rowIndex--;
        else if (type.includes("up")) rowIndex++;

        if (data[rowIndex] && data[rowIndex][seatIndex] === "L") { break; }
        else if (data[rowIndex] && data[rowIndex][seatIndex] === "#") {
            occupied++;
            break;
        }
    }

    return occupied;
}

function verticalCheck(data: string[][], rowIndex: number, type2: "left"|"right"|"down"|"up"|"upright"|"upleft"|"downright"|"downleft"): boolean {
    if (!type2.includes("down") && !type2.includes("up")) return true;
    return (type2.includes("down") ? (rowIndex > 0) : (rowIndex < data.length - 1));
}

function horizontalCheck(data: string[][], seatIndex: number, type2: "left"|"right"|"down"|"up"|"upright"|"upleft"|"downright"|"downleft"): boolean {
    if (!type2.includes("left") && !type2.includes("right")) return true;
    return (type2.includes("left") ? (seatIndex > 0) : (seatIndex < data[0].length-1));
}

function prepareData(data: string[]): string[][] {
    const converted: string[][] = [];
    for (let index = 0; index < data.length; index++)
        converted.push(data[index].split(""));
    return converted;
}