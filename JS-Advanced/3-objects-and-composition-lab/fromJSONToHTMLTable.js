function fromJSONToHTMLTable (input) {
    const objFromJSON = JSON.parse(input);        

    let output = '<table>' + '\n' + '<tr>';

    let keys = Object.keys(objFromJSON[0]);    
    for (let key of keys) {
        output += '<th>' + escapeHTML(key) + '</th>';
    }

    output += '</tr>' + '\n';

    for (let obj of objFromJSON) {
        let values = Object.values(obj);        
        output += '<tr>';
        for (let value of values) {
            output += '<td>' + escapeHTML(value) + '</td>';
        }

        output += '</tr>' + '\n';
    }

    output += '</table>';

    console.log(output);

    function escapeHTML(value) {
        return value
          .toString()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
    }
    
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);