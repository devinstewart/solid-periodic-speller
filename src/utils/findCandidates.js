/**
 * @param {string} inputWord
 * @param {{[key: string]:{name: string, number: number, symbol: string}}} symbols
 */
const findCandidates = (inputWord, symbols) => {
    const oneLetterSymbols = [];
    const twoLetterSymbols = [];

    for (let i = 0; i < inputWord.length; i++) {
        if (inputWord[i] in symbols && !oneLetterSymbols.includes(inputWord[i])) {
            oneLetterSymbols.push(inputWord[i]);
        }

        if (i <= inputWord.length - 2) {
            const two = inputWord.slice(i, i + 2);
            if (two in symbols && !twoLetterSymbols.includes(two)) {
                twoLetterSymbols.push(two);
            }
        }
    }

    return [...twoLetterSymbols, ...oneLetterSymbols];
};

export default findCandidates;
