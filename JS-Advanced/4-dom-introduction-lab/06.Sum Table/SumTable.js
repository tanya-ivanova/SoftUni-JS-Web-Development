function sumTable() {
    let rows = document.querySelector('table tbody').children;
    let sum = 0;
    
    for (let i = 1; i < rows.length - 1; i++) {
        let value = Number(rows[i].querySelector('td:last-child').textContent);
        sum += value;
    }

    document.getElementById('sum').textContent = sum;
}