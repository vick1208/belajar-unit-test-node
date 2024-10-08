import {calculate,calculateAndReturn} from '../src/sum.js';

test('test calculate', () => {
    const callback = jest.fn();

    calculate([10,10,10],callback);
    calculate([10,10,10,10,10],callback);

    expect(callback.mock.calls.length).toBe(2);
    console.log(callback.mock.calls);

    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);
});

test("test calculate without mock function", () => {
    const logging = (total) => {
        console.info(total);
    };

    calculate([10, 10, 10], logging);
    calculate([10, 10, 10, 10, 10], logging);
})

test("test mock return value", () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(40);
    callback.mockReturnValueOnce(190);

    expect(calculateAndReturn([10, 10, 10], callback)).toBe(40);
    expect(calculateAndReturn([10, 10, 10], callback)).toBe(190);

    expect(callback.mock.results[0].value).toBe(40);
    expect(callback.mock.results[1].value).toBe(190);
});

test("test mock implementation", () => {
    const callback = jest.fn();
    callback.mockImplementation((total) => {
        return total * 3;
    });

    expect(calculateAndReturn([10, 10, 10], callback)).toBe(90);
    expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(150);

    expect(callback.mock.results[0].value).toBe(90);
    expect(callback.mock.results[1].value).toBe(150);
});