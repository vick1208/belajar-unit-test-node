import { sum,sumAll } from '../src/sum.js';

test('test sum 1 + 2', () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
})

test('should sum all', () => {
    const numbers = [3,3,3,3];
    expect(sumAll(numbers)).toBe(12);
});

