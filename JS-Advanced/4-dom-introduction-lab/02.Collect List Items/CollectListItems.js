function extractText() {
    let items = Array.from(document.getElementById('items').children);
    
    let result = document.getElementById('result');
    result.textContent = '';
    
    for (let item of items) {
        result.textContent += item.textContent + '\n';
    }
}