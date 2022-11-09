function solve() {
  const email = document.querySelector('#login [name="email"]');
  const password = document.querySelector('#login [name="password"]');
  const loginBtn = document.querySelector('#login button');
  
  loginBtn.addEventListener('click', onLogin);

  async function onLogin(event) {
    event.preventDefault();

    if(email.value === '' || password.value === '') {
      alert('All fields are required!');
      return;
    }

    const user = {
      email: email.value,
      password: password.value
    }

    try {
      const responseLogin = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      if(responseLogin.ok === false) {
        const error = await responseLogin.json();
        throw new Error(error.message);
      }

      const dataLogin = await responseLogin.json();
      console.log(dataLogin);

      sessionStorage.setItem('accessToken', dataLogin.accessToken);
      sessionStorage.setItem('ownerId', dataLogin._id);

      window.location = '../06.Furniture/homeLogged.html';

    } catch (error) {
      alert(error.message);
    }
  }
  
}

solve();