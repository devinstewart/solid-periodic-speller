import findCandidates from './findCandidates';
import spellWord from './spellWord';

/**
 * @param {string} inputWord
 * @param {{[key: string]:{name: string, number: number, symbol: string}}} symbols
 */
const check = (inputWord, symbols) => {
    const candidates = findCandidates(inputWord, symbols);
    const elements = spellWord(candidates, inputWord);

    const result = [];
    for (const element of elements) {
        result.push(symbols[element]);
    }

    return result;
};

export default check;
