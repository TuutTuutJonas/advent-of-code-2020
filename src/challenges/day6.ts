// ------------------------------------------------------------------------------------------
// Challenge 1 - For each group, count the number of questions to which anyone answered "yes"
// ------------------------------------------------------------------------------------------
export function d6c1(data: string): number {
    const groups = prepareDataC1(data);
    return groups.map((group) => group.length).reduce((a, b) => a + b);
}

// Prepare data by splitting it into groups and filtering the unique values per group
function prepareDataC1(data: string): string[] {
    const groupsAnswers: string[] = [];
    let groupIndex = 0;
    data.split("\n").forEach((line) => {
        if (line !== "")
            if (!groupsAnswers[groupIndex]) groupsAnswers.push(getUniqueChars(line));
            else groupsAnswers[groupIndex] = getUniqueChars(`${groupsAnswers[groupIndex]}${line}`);
        else groupIndex++;
    });

    return groupsAnswers;
}

// Function to find the unique characters in a string
function getUniqueChars(data: string): string {
    let uniqueChars="";
    for (let index=0;index < data.length;index++)
        if (!uniqueChars.includes(data.charAt(index))) uniqueChars += data[index];

    return uniqueChars;
}

// ------------------------------------------------------------------------------------------
// Challenge 2 - Find questions to which everyone in a group answered "yes"
// ------------------------------------------------------------------------------------------
export function d6c2(data: string): number {
    const groups = prepareDataC2(data);
    let returnValue = 0;
    groups.forEach((answers) => {
        const testedChars: TestedChar[] = [];
        answers.forEach((individualAnswers) => {
            for (let index = 0; index < individualAnswers.length; index++)
                if (!testedChars.find((a) => a.char === individualAnswers.charAt(index)))
                    testedChars.push(testNewCharacter(index, individualAnswers, answers));
        });
        returnValue += testedChars.filter((testChar) => testChar.answeredByEveryone).length;
    });
    return returnValue;
}

// Test a new character against the other answers
function testNewCharacter(index: number, individualAnswers: string, answers: string[]): TestedChar {
    const testChar = individualAnswers.charAt(index);
    return {
        char: testChar,
        answeredByEveryone: answeredByEveryone(testChar, answers)
    };
}

// Check if character was answered by everyone in the group
function answeredByEveryone(character: string, answerArray: string[]): boolean {
    return answerArray.find((individualAnswer) => {
        for (let charIndex = 0; charIndex < individualAnswer.length; charIndex++)
            if (individualAnswer[charIndex] === character)
                return false;
        return true;
    }) == null;
}

// Prepare data by splitting it into groups and individual answers within the groups
function prepareDataC2(data: string): string[][] {
    const groupsAnswers = [];
    let groupIndex = 0;
    data.split("\n").forEach((line) => {
        if (line !== "")
            if (!groupsAnswers[groupIndex])
                groupsAnswers.push([line]);
            else groupsAnswers[groupIndex].push(line);
        else groupIndex++;
    });
    return groupsAnswers;
}

interface TestedChar {
    char: string,
    answeredByEveryone: boolean
}