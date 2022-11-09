function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    
    let commitsList = document.getElementById('commits');

    commitsList.innerHTML = '';

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);

    function handleResponse(response) {
        if(response.ok === false) {
            throw new Error(`${response.status}`);
        }
        return response.json();
    }

    function handleData(data) {
        data.forEach(el => {
            const li = document.createElement('li');
            li.textContent = `${el.commit.author.name}: ${el.commit.message}`;

            commitsList.appendChild(li);
        });
    }

    function handleError(error) {        
        const li = document.createElement('li');
        li.textContent = `Error: ${error.message} (Not Found)`;

        commitsList.appendChild(li);
    }
}