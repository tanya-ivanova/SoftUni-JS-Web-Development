function loadRepos() {
	const username = document.getElementById('username').value;
	let list = document.getElementById('repos');	

	list.innerHTML = '';

	fetch(`https://api.github.com/users/${username}/repost`)
		.then(handleResponse)
		.then(handleData)
		.catch(error => alert(error.message));

	
	function handleData(data) {
		data.forEach(element => {
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.href = element.html_url;
			a.textContent = element.full_name;			
			a.setAttribute('target', '_blank');

			li.appendChild(a);
			list.appendChild(li);
		});
	}

	function handleResponse(response) {
		//console.log(response);
		if(response.ok === false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		return response.json();
	}
}