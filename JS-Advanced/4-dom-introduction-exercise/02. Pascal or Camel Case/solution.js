function solve() {
   let text = document.getElementById('text').value;
   text = text.toLowerCase();
   let convention = document.getElementById('naming-convention').value;
   
   let output = '';
   let textAsArray = text.split(' ');   

   if (convention === 'Camel Case') {
      output += textAsArray[0]
      for (let i = 1; i < textAsArray.length; i++) {
        let word = textAsArray[i];        
        let newWord = word[0].toUpperCase() + word.substring(1);
        output += newWord;        
      }
   } else if (convention === 'Pascal Case') {
      textAsArray.forEach(element => {
        let newWord = element[0].toUpperCase() + element.substring(1);
        output += newWord;        
      });
   } else {
      output = 'Error!';
   }
   
   document.getElementById('result').textContent = output;
}