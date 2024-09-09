import {sayHello} from '../src/sayHello.js';

test('should success', () => {
    expect(sayHello("Bob")).toBe("Hello Bob");
});

test.failing("sayHello error",()=>{
    sayHello(null);
});

test('sayHello error matchers', () => {
    expect(() => sayHello(null)).toThrow();
});