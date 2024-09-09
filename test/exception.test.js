import { callMe, MyException } from "../src/exception.js";

test('should throw exception', () => {
    expect(() => { callMe("Eko") }).toThrow();
    expect(() => { callMe("Eko") }).toThrow(MyException);
    expect(() => { callMe("Eko") }).toThrow("Waduh ada apa ini");
});
test('should not throw exception', () => {
    expect(callMe("Ardian")).toBe("OK");
})