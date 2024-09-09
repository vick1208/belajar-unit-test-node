import {sumAll} from '../src/sum.js';

describe('when call function sumAll', () => {
    it('should get 12', () => {
        expect(sumAll([4,4,4])).toBe(12);
    });
    it('should get 20', () => {
        expect(sumAll([4,4,4,4,4])).toBe(20);
    });
});