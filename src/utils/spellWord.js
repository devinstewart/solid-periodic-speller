/**
 * @param {string[]} candidates
 * @param {string} charsLeft
 * @returns {string[]}
 */
const spellWord = (candidates, charsLeft) => {
    if (charsLeft.length === 0) {
        return [];
    } else {
        if (charsLeft.length >= 2) {
            const two = charsLeft.slice(0, 2);
            const rest = charsLeft.slice(2);
            if (candidates.includes(two)) {
                if (rest.length > 0) {
                    const result = [two, ...spellWord(candidates, rest)];
                    if (result.join('') === charsLeft) {
                        return result;
                    }
                } else {
                    return [two];
                }
            }
        }

        if (charsLeft.length >= 1) {
            const one = charsLeft[0];
            const rest = charsLeft.slice(1);
            if (candidates.includes(one)) {
                if (rest.length > 0) {
                    const result = [one, ...spellWord(candidates, rest)];
                    if (result.join('') === charsLeft) {
                        return result;
                    }
                } else {
                    return [one];
                }
            }
        }
    }

    return [];
};

export default spellWord;
