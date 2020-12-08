// ------------------------------------------------------------------------------------------
// Challenge 1 - How many bag colors can eventually contain at least one shiny gold bag?
// ------------------------------------------------------------------------------------------
export function d7c1(data: string[]): number {
    const bagsWithContent = prepareData(data);

    let foundBags = findBagsWithContent("shiny gold", bagsWithContent);
    const allBags = foundBags;
    while (foundBags.length > 0) {
        const indirectly: BagContent[] = [];
        foundBags.forEach((bagWithContent) => {
            const newBags = findBagsWithContent(bagWithContent.bag, bagsWithContent);
            newBags.forEach((bag) => {
                if (!indirectly.map(b => b.bag).includes(bag.bag))
                    indirectly.push(bag);
            });
        });
        foundBags = indirectly;

        indirectly.forEach((bag) => {
            if (!allBags.map(b => b.bag).includes(bag.bag)) allBags.push(bag);
        });
    }

    return allBags.length;
}

function findBagsWithContent(bagName: string, data: BagContent[]): BagContent[] {
    return data.filter((bagContent) => {
        return bagContent.content.find((content) => content.bag === bagName);
    });
}


// eslint-disable-next-line
function prepareData(data: string[]): BagContent[] {
    const preparedData: BagContent[] = [];
    data.forEach((dataPoint) => {
        const array = dataPoint.replace(",", "").replace(".", "").split(" ");
        const content = [];
        if (array.length >= 8) {
            content.push({
                quantity: parseInt(array[4]),
                bag: [array[5], array[6]].join(" ")
            });
            const items = (array.length - 8) / 4;
            for (let i = 0; i < items; i++)
                content.push({
                    quantity: parseInt(array[(i*4)+8]),
                    bag: [array[(i*4)+9], array[(i*4)+10]].join(" ")
                });
        }

        preparedData.push({
            bag: [array[0], array[1]].join(" "),
            content: content
        });
    });

    return preparedData;
}


// ------------------------------------------------------------------------------------------
// Challenge 2 - Amount of bags total for one shiny gold bag
// ------------------------------------------------------------------------------------------
let bagsWithContent: BagContent[] = [];
export function d7c2(data: string[]): number {
    bagsWithContent = prepareData(data);
    const shinyBag = findBagByName("shiny gold");
    let answer = 0;
    shinyBag.content.forEach((shinyBagContent) => {
        answer += getAmountFromBagContent([shinyBagContent]);
    });

    return answer;
}

function getAmountFromBagContent(contents: { quantity: number, bag: string }[]): number {
    let answer = 0;
    contents.forEach((content) => {
        answer += content.quantity;
        let contentCount = 0;
        const newBag = findBagByName(content.bag);
        if (newBag.content.length > 0)
            contentCount += getAmountFromBagContent(newBag.content);
        answer += (content.quantity * contentCount);
    });
    return answer;
}

interface BagContent {
    bag: string,
    content: {quantity: number, bag: string}[]
}

function findBagByName(name: string): BagContent {
    return bagsWithContent.find((bagWithContent) => bagWithContent.bag === name);
}