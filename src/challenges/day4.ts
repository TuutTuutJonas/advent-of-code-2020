export function d4c1(data: string): number {
    const passengers = cleanData(data);
    const requiredValues = ["byr", "iyr", "eyr", "hgt", "hcl", "hcl", "ecl", "pid"];
    let answer = 0;
    passengers.forEach((passenger) => {
        let validPassenger = true;
        requiredValues.forEach((value) => {
            if (!passenger.includes(`${value}:`)) validPassenger = false;
        });
        if (validPassenger) answer++;
    });
    return answer;
}

function cleanData(data: string): string[] {
    const passengers = [];
    let passengerIndex = 0;
    data.split("\n").forEach((line) => {
        if (line !== "")
            if (!passengers[passengerIndex]) passengers.push(line);
            else passengers[passengerIndex] = `${passengers[passengerIndex]} ${line}`;
        else passengerIndex++;
    });
    return passengers;
}
// eslint-disable-next-line
export function d4c2(data: string): number {
    const passengers = cleanData(data);
    const requiredValues = ["byr", "iyr", "eyr", "hgt", "hcl", "hcl", "ecl", "pid"];

    let answer = 0;
    passengers.forEach((passenger) => {
        let validPassenger = true;
        requiredValues.forEach((key) => {
            if (!passenger.includes(`${key}:`)) validPassenger = false;
            else if (key === "byr" && !validateByr(key, passenger)) validPassenger = false;
            else if (key === "iyr" && !validateIyr(key, passenger)) validPassenger = false;
            else if (key === "eyr" && !validateEyr(key, passenger)) validPassenger = false;
            else if (key === "ecl" && !validateEcl(key, passenger)) validPassenger = false;
            else if (key === "pid" && !validatePid(key, passenger)) validPassenger = false;
            else if (key === "hgt" && !validateHgt(key, passenger)) validPassenger = false;
            else if (key === "hcl" && !validateHcl(key, passenger)) validPassenger = false;
        });
        if (validPassenger) answer++;
    });
    return answer;
}

function validateByr(key: string, passenger: string): boolean {
    const extracted = extractValue(key, passenger);
    const value = extracted.length > 0 ? parseInt(extracted) : 0;
    if (extracted.length === 4 && value >= 1920 && value <= 2002) return true;
    return false;
}

function validateIyr(key: string, passenger: string): boolean {
    const extracted = extractValue(key, passenger);
    const value = extracted.length > 0 ? parseInt(extracted) : 0;
    if (extracted.length === 4 && value >= 2010 && value <= 2020) return true;
    return false;
}

function validateEyr(key: string, passenger: string): boolean {
    const extracted = extractValue(key, passenger);
    const value = extracted.length > 0 ? parseInt(extracted) : 0;
    if (extracted.length === 4 && value >= 2020 && value <= 2030) return true;
    return false;
}

function validateEcl(key: string, passenger: string): boolean {
    const extracted = extractValue(key, passenger);
    const valid = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    if (valid.indexOf(extracted) >= 0) return true;
    return false;
}

function validatePid(key: string, passenger: string): boolean {
    const extracted = extractValue(key, passenger);
    if (extracted.length !== 9) return false;
    if (!isNaN(parseInt(extracted))) return true;
    return false;
}

function validateHcl(key: string, passenger: string): boolean {
    const extracted = extractValue(key, passenger);
    if (extracted.length !== 7) return false;
    if (extracted.substring(1).match(/([a-f0-9])\w+/g)) return true;
    return false;
}

function validateHgt(key: string, passenger: string): boolean {
    const extracted = extractValue(key, passenger);
    if (!extracted.includes("cm") && extracted.includes("in")) {
        const value = parseInt(extracted.replace("in", ""));
        if (!isNaN(value) && value >= 59 && value <= 76) return true;
    } else if (extracted.includes("cm") && !extracted.includes("in")) {
        const value = parseInt(extracted.replace("cm", ""));
        if (!isNaN(value) && value >= 150 && value <= 193) return true;
    }
    return false;
}

function extractValue(key: string, line: string): string {
    const startIndex = line.indexOf(`${key}:`) + `${key}:`.length;

    const substring = line.substr(startIndex);
    const endIndex = substring.indexOf(" ");
    let returnValue = "";
    if (endIndex !== -1) returnValue = substring.substr(0, endIndex).trim();
    else returnValue = substring.trim();
    return returnValue;
}