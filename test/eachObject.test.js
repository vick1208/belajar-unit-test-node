import {sumAll} from '../src/sum.js';

const table = [
    {
        numbers:[],
        expected: 0
    },
    {
        numbers:[3,3],
        expected: 6
    },
    {
        numbers:[3,3,3],
        expected: 9
    },
    {
        numbers:[3,3,3,3],
        expected: 12
    },
]

test.each(table)(
    'test sumAll($numbers) should result $expected',
    ({numbers,expected}) => {
        expect(sumAll(numbers)).toBe(expected);
    }
);
