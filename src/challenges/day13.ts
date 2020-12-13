export function d13c1(data: string[]) {
    const arrivalTime = parseInt(data[0]);
    const buses = data[1].split(",").filter((bus) => bus !== "x").map((bus) => parseInt(bus));

    const firstDepartures = buses
        .map((bus) => arrivalTime + (bus - (arrivalTime % bus)));

    const nextDepartureTime = Math.min(...firstDepartures);
    return (nextDepartureTime - arrivalTime) * buses[firstDepartures.indexOf(nextDepartureTime)];
}

export function d13c2(data: string[]): number {
    const [firstBus, ...buses] = data[1]
        .split(",")
        .map((bus, index) => [parseInt(bus, 10), index])
        .filter(([bus]) => !Number.isNaN(bus));

    let multiplier = firstBus[0];
    let timestamp = 0;

    buses.forEach(([bus, busIndex]) => {
        const runUntilItBreaks = true;
        while (runUntilItBreaks) {
            if ((timestamp + busIndex) % bus === 0) {
                multiplier *= bus;
                break;
            }
            timestamp += multiplier;
        }
    });

    return timestamp;
}