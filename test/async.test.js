import { sayHelloAsync } from '../src/async.js';

test('should test async hello', async () => {
    const result = await sayHelloAsync("Rian");
    expect(result).toBe("Hello Rian");
});

test('should test async matcher', async () => {
    await expect(sayHelloAsync("Rian")).resolves.toBe("Hello Rian");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});