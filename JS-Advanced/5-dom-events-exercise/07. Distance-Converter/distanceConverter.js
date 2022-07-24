function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');

    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');
    
    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', onConvert);
    
    let units = {
       km: 1000,
       m: 1,
       cm: 0.01,
       mm: 0.001,
       mi: 1609.34,
       yrd: 0.9144,
       ft: 0.3048,
       in: 0.0254 
    }

    function onConvert (event) {        
        let input = Number(inputDistance.value) * units[inputUnits.value];
        let output = input / units[outputUnits.value];        
        outputDistance.value = output;
    }
}