function generateReport() {
    let output = document.getElementById('output');
    let boxes = Array.from(document.querySelectorAll('thead tr th input'));
    console.log(boxes);
    let data = Array.from(document.querySelectorAll('tbody tr'));
    let outputArray = [];

    for (let i = 0; i < data.length; i++) {
        let reportObj = {};

        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j].checked) {
                reportObj[boxes[j].name] = data[i].children[j].textContent;
            }
        }

        outputArray.push(reportObj);
    }

    output.value = JSON.stringify(outputArray);
}