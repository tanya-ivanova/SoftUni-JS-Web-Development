function calc() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let sum = num1 + num2;

    let sumField = document.getElementById('sum');
    sumField.value = sum;

}
