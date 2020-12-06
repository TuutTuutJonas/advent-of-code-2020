export function d2c1(data: string[]): number {
    const ruleArray = data.map((rule) => rule.replace(":", "").split(/[\s-]+/));
    const validPasswords = ruleArray.filter((rule) => {
        const characterMatches = locations(rule[2], rule[3]).length;
        return characterMatches >= parseInt(rule[0]) && characterMatches <= parseInt(rule[1]);
    });
    return validPasswords.length;
}

function locations(substring: string, string: string): number[] {
    const indices = [];
    let i = -1;
    while ((i=string.indexOf(substring, i+1)) >= 0) indices.push(i);
    return indices;
}

export function d2c2(data: string[]) {
    const ruleArray = data.map((rule) => rule.replace(":", "").split(/[\s-]+/));
    const validPasswords = ruleArray.filter((rule) => {
        const firstIndex = parseInt(rule[0]) - 1;
        const secondIndex = parseInt(rule[1]) - 1;
        const firstCondition =
            (rule[3][firstIndex] === rule[2] && rule[3][secondIndex] !== rule[2]);
        const secondCondition =
            (rule[3][firstIndex] !== rule[2] && rule[3][secondIndex] === rule[2]);

        return firstCondition || secondCondition;
    });
    return validPasswords.length;
}