import elements from './periodicTable';

/**
 * @returns {{[key: string]:{name: string, number: number, symbol: string}}}
 */
const loadPeriodicTable = () => {
    const symbols = {};
    for (const element of elements) {
        symbols[element.symbol.toLowerCase()] = element;
    }

    return symbols;
};

export default loadPeriodicTable;
