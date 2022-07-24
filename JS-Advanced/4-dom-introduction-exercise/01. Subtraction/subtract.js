function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let subtractResult = firstNumber - secondNumber;

    document.getElementById('result').textContent = subtractResult;
}