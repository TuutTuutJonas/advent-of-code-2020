// eslint-disable-next-line
export function d12c1(data: string[]): number {
    let facing = 90;
    const values = {
        "0": 0, // North
        "90": 0, // East
        "180": 0, // South
        "270": 0 // West
    };

    // eslint-disable-next-line
    data.forEach((dataPoint) => {
        const instruction = {
            action: dataPoint[0],
            value: parseInt(dataPoint.substr(1))
        };

        if (instruction.action === "F")
            values[facing] += instruction.value;
        else if (instruction.action === "N")
            values["0"] += instruction.value;
        else if (instruction.action === "S")
            values["180"] += instruction.value;
        else if (instruction.action === "W")
            values["270"] += instruction.value;
        else if (instruction.action === "E")
            values["90"] += instruction.value;
        else if (instruction.action === "L")
            facing = changeDirection("L", instruction.value, facing);
        else if (instruction.action === "R")
            facing = changeDirection("R", instruction.value, facing);
    });
    return Math.abs(values["0"]-values["180"]) + Math.abs(values["90"]-values["270"]);
}

function changeDirection(direction: "L" | "R", value: number, facing: number): number {
    if (direction === "L") {
        facing -= value;
        if (facing < 0) facing = 360 + facing;
    } else if (direction === "R") {
        facing += value;
        if (facing >= 360) facing = facing - 360;
    }
    return facing;
}

// eslint-disable-next-line
export function d12c2(data: string[]): number {
    let waypoint = {
        "0": 1, // North
        "90": 10, // East
        "180": 0, // South
        "270": 0 // West
    };

    const ship = {
        "0": 0, // North
        "90": 0, // East
        "180": 0, // South
        "270": 0 // West
    };

    // eslint-disable-next-line
    data.forEach((dataPoint) => {
        const instruction = {
            action: dataPoint[0],
            value: parseInt(dataPoint.substr(1))
        };

        if (instruction.action === "F") {
            ship["0"] += instruction.value * waypoint["0"];
            ship["90"] += instruction.value * waypoint["90"];
            ship["180"] += instruction.value * waypoint["180"];
            ship["270"] += instruction.value * waypoint["270"];
        }

        if (instruction.action === "N")
            waypoint["0"] += instruction.value;
        else if (instruction.action === "S")
            waypoint["180"] += instruction.value;
        else if (instruction.action === "W")
            waypoint["270"] += instruction.value;
        else if (instruction.action === "E")
            waypoint["90"] += instruction.value;
        else if (instruction.action === "L")
            waypoint = rotateWaypoint("L", instruction.value, waypoint);
        else if (instruction.action === "R")
            waypoint = rotateWaypoint("R", instruction.value, waypoint);
    });

    return Math.abs(ship["0"]-ship["180"]) + Math.abs(ship["90"]-ship["270"]);
}

function rotateWaypoint(direction: "L"|"R", value: number, waypoint: { "0": number, "90": number, "180": number, "270": number, }): { "0": number, "90": number, "180": number, "270": number, } {
    const newWaypoint = { ...waypoint };
    if (direction === "R") // clockwise
        Object.keys(waypoint).forEach((waypointDirection) => {
            let facing = parseInt(waypointDirection);
            facing += value;
            if (facing >= 360) facing = facing - 360;
            newWaypoint[facing] = waypoint[waypointDirection];
        });
    else if (direction === "L") // counter-clockwise
        Object.keys(waypoint).forEach((waypointDirection) => {
            let facing = parseInt(waypointDirection);
            facing -= value;
            if (facing < 0) facing = 360 + facing;
            newWaypoint[facing] = waypoint[waypointDirection];
        });

    return newWaypoint;
}