function solve() {
    const email = document.querySelector('#register [name="email"]');
    const password = document.querySelector('#register [name="password"]');
    const repass = document.querySelector('#register [name="rePass"]');
    const registerBtn = document.querySelector('#register button');
    
    registerBtn.addEventListener('click', onRegister);
  
    async function onRegister(event) {
      event.preventDefault();
  
      if(email.value === '' || password.value === '') {
        alert('All fields are required!');
        return;
      }

      if(password.value !== repass.value) {
        alert('Passwprds must match!');
        return;
      }
  
      const user = {
        email: email.value,
        password: password.value
      }
  
      try {
        const responseRegister = await fetch('http://localhost:3030/users/register', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        if(responseRegister.ok === false) {
          const error = await responseRegister.json();
          throw new Error(error.message);
        }
  
        const dataRegister = await responseRegister.json();
        console.log(dataRegister);
  
        sessionStorage.setItem('accessToken', dataRegister.accessToken);
        sessionStorage.setItem('ownerId', dataRegister._id);
  
        window.location = '../06.Furniture/homeLogged.html';
  
      } catch (error) {
        alert(error.message);
      }
    }
    
  }
  
  solve();