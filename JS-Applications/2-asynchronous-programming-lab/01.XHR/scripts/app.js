function loadRepos() {   
   let responseDiv = document.getElementById('res');
   console.log(responseDiv);

   const url = 'https://api.github.com/users/testnakov/repos';
   const request = new XMLHttpRequest();

   request.addEventListener('readystatechange', handleResponse);

   function handleResponse() {
      if(request.readyState === 4 && request.status === 200) {
         responseDiv.textContent = request.responseText;
      }      
   }

   request.open('GET', url);
   request.send();
}