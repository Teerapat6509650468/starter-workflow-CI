const { add, subtract, multiply } = require("../math");

describe('simple arithmetic', () => {
    console.log("addition");
    test('expect 5 + 3 = 8', () => {
        expect(add(5, 3)).toBe(8);
    });

    console.log("substract");
    test('expect 5 - 1 = 4', () => {
        expect(subtract(5, 1)).toBe(4);
    });

    console.log("multiply");
    test('expect 2 * 3 = 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });   
});