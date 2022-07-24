function solve() {
  let counterCorrectAnswers = 0;
  let output = document.querySelector('#results h1');
  let result = document.getElementById('results');  
    
  let sections = Array.from(document.getElementsByTagName('section'));

  let lastSection = sections[sections.length - 1];  

  let answers = Array.from(document.getElementsByTagName('p'))
  .forEach(answer => answer.addEventListener('click', onClick));

  function onClick(event) {
    let parentLi = event.target.parentElement.parentElement;
    
    if(event.target.textContent === 'onclick' || event.target.textContent === 'JSON.stringify()' || event.target.textContent === 'A programming API for HTML and XML documents') {
      counterCorrectAnswers++;      
    }
    console.log(counterCorrectAnswers);

    let parentSection = parentLi.parentElement.parentElement;
    let nextSection = parentSection.nextElementSibling;
    parentSection.className = 'hidden';
    parentSection.style.display = 'none';
    
    if (parentSection === lastSection) {
      result.style.display = 'block';
      if (counterCorrectAnswers === sections.length) {
        output.textContent = 'You are recognized as top JavaScript fan!';

      } else {
        output.textContent = `You have ${counterCorrectAnswers} right answers`;
      }
      
    } else {
      nextSection.className = '';
      nextSection.style.display = 'block';
    } 
     
  }  
}
