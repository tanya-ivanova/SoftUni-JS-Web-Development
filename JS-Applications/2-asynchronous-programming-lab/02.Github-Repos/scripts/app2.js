async function loadRepos() {
	const username = document.getElementById('username').value;
	let list = document.getElementById('repos');	

	list.innerHTML = '';

	try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if(response.ok === false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

        const data = await response.json();

        data.forEach(element => {
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.href = element.html_url;
			a.textContent = element.full_name;			
			a.setAttribute('target', '_blank');

			li.appendChild(a);
			list.appendChild(li);
		});

    } catch (error) {
        alert(error.message);
    }	
}