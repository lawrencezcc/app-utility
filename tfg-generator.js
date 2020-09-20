function generateTempTFN(isIndividual) {
    const num = isIndividual ? 9 : 8;
    return new Array(num).fill(0).map(() => {
        return generateRandomNum(num);
    });
}

function BaseList() {
    this.indexList = Array.from(new Array(10).keys());
    this.base = [...this.indexList];

    this.next = function () {
        if (this.indexList.length > 0) {
            const target = generateRandomNum(this.indexList.length);
            return this.indexList.splice(target, 1);
        }
        return undefined;
    };
    this.next.bind(this);
}

//generate a num between min(include) and max(exclude)
function generateRandomNum(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}