import { calculator } from "../utils/calculator";

describe('Calculator', () => {
    test('Sums two positive numbers', () => {
        //Arange
        const firstNumber = 5;
        const secondNumber = 7;
        const expectedResult = 12;
    
        //Act
        const actualResult = calculator.sum(firstNumber, secondNumber);
    
        //Assert
        expect(actualResult).toBe(expectedResult);
    });
    
    test('Add undefined to a positive number', () => {
        expect(calculator.sum(2)).toBe(NaN);
    });
});
