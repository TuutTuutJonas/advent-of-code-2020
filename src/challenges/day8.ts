// ------------------------------------------------------------------------------------------
// Challenge 1 - Before any instruction is executed a second time, what value is accumulator?
// ------------------------------------------------------------------------------------------
export function d8c1(data: string[]): number {
    const instructions = prepareData(data);
    return executeInstructions(instructions).accumulator;
}


// ------------------------------------------------------------------------------------------
// Challenge 2 - Before any instruction is executed a second time, what value is accumulator?
// ------------------------------------------------------------------------------------------
export function d8c2(data: string[]): number {
    const instructions = prepareData(data);
    let accumulator = 0;
    const indicesToAlter: number[] = [];

    instructions.forEach((instruction, index) => {
        if (instruction.command === "nop" || instruction.command === "jmp")
            indicesToAlter.push(index);
    });
    for (const index of indicesToAlter) {
        const alteredInstructions = JSON.parse(JSON.stringify(instructions)) as Instruction[];
        alteredInstructions[index].command =
            alteredInstructions[index].command === "jmp" ? "nop" : "jmp";

        const result = executeInstructions(alteredInstructions, true);
        if (!result.duplicate) {
            accumulator = result.accumulator;
            break;
        }
    }

    return accumulator;
}


// ------------------------------------------------------------------------------------------
// Helper functions
// ------------------------------------------------------------------------------------------
function prepareData(data: string[]): Instruction[] {
    const result: Instruction[] = [];
    for (let index = 0; index < data.length; index++) {
        const split = data[index].split(" ");
        result.push({
            command: split[0] as "nop"|"jmp"|"acc",
            value: parseInt(split[1])
        });
    }

    return result;
}

function executeInstructions(instructions: Instruction[], c2?: boolean) {
    let accumulator = 0;
    let instructionIndex = 0;
    const executedIndices: number[] = [];
    let duplicateFound = false;

    while (!duplicateFound) {
        const newValues = executeSingleInstruction(
            instructions[instructionIndex], instructionIndex, accumulator);
        accumulator = newValues.accumulator;
        instructionIndex = newValues.instructionIndex;

        if (executedIndices.includes(instructionIndex)) duplicateFound = true;
        if (c2 && instructionIndex === instructions.length) break;
        executedIndices.push(instructionIndex);
    }

    return {
        duplicate: duplicateFound,
        accumulator: accumulator
    };
}

function executeSingleInstruction(instruction: Instruction, instructionIndex: number, accumulator: number): { instructionIndex: number, accumulator: number } {
    if (instruction.command === "nop") {
        instructionIndex++;
    } else if (instruction.command === "jmp") {
        instructionIndex = instructionIndex + instruction.value;
    } else if (instruction.command === "acc") {
        accumulator += instruction.value;
        instructionIndex++;
    }

    return {
        instructionIndex: instructionIndex,
        accumulator: accumulator
    };
}


interface Instruction {
    command: "nop" | "jmp" | "acc",
    value: number
}