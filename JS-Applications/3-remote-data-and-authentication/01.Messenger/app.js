function attachEvents() {
    const messages = document.getElementById('messages');    
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const url = 'http://localhost:3030/jsonstore/messenger';    

    sendBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh);

    async function onSend(event) {
        event.preventDefault();

        const name = document.querySelector('[name="author"]');
        const content = document.querySelector('[name="content"]');
        
        const message = {
            author: name.value, 
            content: content.value
        };

        name.value = '';
        content.value = '';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(message)
            });

            if(response.ok === false) {
                const error = await response.json();
                throw new Error(error.message);
            }
        } catch (error) {
            alert(error.message);
        }
    }

    async function onRefresh(event) {
        try {
            const response = await fetch(url);
            if(response.ok === false) {
                const error = await response.json();
                throw new Error(error.message);
            }

            const data = await response.json();

            let output = [];

            Object.values(data).forEach(m => {
                output.push(`${m.author}: ${m.content}`);
            });

            messages.value = output.join('\n');

            
        } catch (error) {
            alert(error.message);
        }
    }
}

attachEvents();