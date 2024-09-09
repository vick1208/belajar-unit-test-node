test('numbers', () => {
    const value = 3+3;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);

    expect(value).toBeLessThan(7);
    expect(value).toBeLessThanOrEqual(7);
    expect(value).toBe(6);
});