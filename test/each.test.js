import {sumAll} from '../src/sum.js';

const table = [
    [[],0],
    [[3,3,3],9],
    [[3,3,3,3],12],
    [[3,3,3,3,3],15],
]


test.each(table)(
    "test sumAll(%s) should result %i",
    (numbers,expectedResult) => {
        expect(sumAll(numbers)).toBe(expectedResult);
    }
);