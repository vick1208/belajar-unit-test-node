import {sum} from '../src/sum.js';

beforeAll(() => {
    console.log("Before All");
    
});

afterAll(() => {
    console.log("After All");
    
});

beforeEach(() => {
    console.log("Before Each");
});

afterEach(() => {
    console.log("After Each");
});

test('should do first test ', () => {
    expect(sum(10,10)).toBe(20);
    console.log("test one");
});

test('should do second test ', () => {
    expect(sum(10,10)).toBe(20);
    console.log("test two");
});