export function d1c1(data: number[]): number {
    let answer = 0;
    data.forEach((number) => {
        const missing = 2020 - number;

        if (data.includes(missing)) answer = missing * number;
    });
    return answer;
}

export function d1c2(data: number[]): number {
    let answer = 0;
    data.forEach((number) => {
        data.forEach((secondNumber) => {
            if (secondNumber !== number) {
                const missing = 2020 - number - secondNumber;
                if (data.includes(missing)) answer = missing * number * secondNumber;
            }
        });
    });
    return answer;
}