test('should match name string', () => {
    const name = "Vicky Alexander Susanto";
    expect(name).toBe("Vicky Alexander Susanto");
    expect(name).toMatch(/anto/);
});