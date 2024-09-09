test('string should not match', () => {
    const name = "Eko Kurniawan Khannedy";
    

    expect(name).not.toBe("Rob");
    expect(name).not.toEqual("Rob");
    expect(name).not.toMatch(/rob/);
});
test('number should not match', () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});