function attachGradientEvents() {
    let gradientDiv = document.getElementById('gradient');
    let resultDiv = document.getElementById('result');

    gradientDiv.addEventListener('mousemove', onMouseMove);
    gradientDiv.addEventListener('mouseout', onMouseOut);

    function onMouseMove(event) {
        let power = event.offsetX / (event.target.clientWidth);
        power = Math.trunc(power * 100);
        resultDiv.textContent = power + "%";        
    }

    function onMouseOut (event) {
        resultDiv.textContent = '';
    }
}