function chatLogger(input) {
    let chatLog = [];

    while(input[0] !== 'end') {
        let [command, ...params] = input.shift().split(' ');
        
        if (command === 'Chat') {
            let message = params[0];
            chatLog.push(message);
        } else if (command === 'Delete') {
            let message = params[0];

            if (chatLog.includes(message)) {
                let index = chatLog.indexOf(message);
                chatLog.splice(index, 1);
            }
        } else if (command === 'Edit') {
            let message = params[0];
            let editedMessage = params[1];

            if (chatLog.includes(message)) {
                let index = chatLog.indexOf(message);
                chatLog.splice(index, 1, editedMessage);
            }
        } else if (command === 'Pin') {
            let message = params[0];            

            if (chatLog.includes(message)) {
                let index = chatLog.indexOf(message);
                chatLog.splice(index, 1);
                chatLog.push(message);
            }
        } else if (command === 'Spam') {
            chatLog.push(...params);
        }
    }

    console.log(chatLog.join('\n'));
}

chatLogger(["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"]);