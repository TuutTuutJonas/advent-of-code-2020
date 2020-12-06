export function d5c1(data: string[]) {
    let highestId = 0;
    data.forEach((code) => {
        const rowString = code.substr(0, 7).replace(/(B)/g, "1").replace(/(F)/g, "0");
        const columnString = code.substr(7).replace(/(R)/g, "1").replace(/(L)/g, "0");
        const row = parseInt(rowString, 2);
        const column = parseInt(columnString, 2);
        const id = (row * 8) + column;

        if (id > highestId) highestId = id;
    });
    return highestId;
}

export function d5c2(data: string[]) {
    const allIds = [];
    data.forEach((code) => {
        const rowString = code.substr(0, 7).replace(/(B)/g, "1").replace(/(F)/g, "0");
        const columnString = code.substr(7).replace(/(R)/g, "1").replace(/(L)/g, "0");
        const row = parseInt(rowString, 2);
        const column = parseInt(columnString, 2);
        const id = (row * 8) + column;

        allIds.push(id);
    });

    const mySeat = allIds.find((id) => {
        if (allIds.includes(id + 2) && !allIds.includes(id + 1))
            return true;
        return false;
    });

    return mySeat + 1;
}