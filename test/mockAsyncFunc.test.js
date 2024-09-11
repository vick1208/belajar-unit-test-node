import {getBalance} from '../src/async.js';

test('mock async func', async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(100);
    await expect(getBalance("Eko",from)).resolves.toEqual({
        name: "Eko",
        balance: 100
    });

    expect(from.mock.calls.length).toBe(1);
    
});

test.failing("mock async function rejected", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Dor"));

    await getBalance("Eko", from);
});

test("mock async function error matchers", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");

    await expect(getBalance("Eko", from)).rejects.toBe("Rejected");
});