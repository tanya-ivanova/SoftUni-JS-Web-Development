function encodeAndDecodeMessages() {
    let textAreas = Array.from(document.getElementsByTagName('textarea'));
    let textareaEncode = textAreas[0];
    let textareaDecode = textAreas[1];

    let buttons = Array.from(document.getElementsByTagName('button'));
    let buttonEncode = buttons[0];
    let buttonDecode = buttons[1];
    
    buttonEncode.addEventListener('click', encode);
    buttonDecode.addEventListener('click', decode);

    function encode (event) {
        let message = textareaEncode.value;
        let encodedMessage = '';

        for (let char of message) {
            let code = char.charCodeAt(0);
            code += 1;
            let newChar = String.fromCharCode(code);
            encodedMessage += newChar;
        }
        textareaDecode.value = encodedMessage;
        textareaEncode.value = '';
    }

    function decode (event) {
        let message = textareaDecode.value;
        let decodedMessage = '';

        for (let char of message) {
            let code = char.charCodeAt(0);
            code -= 1;
            let newChar = String.fromCharCode(code);
            decodedMessage += newChar;
        }

        textareaDecode.value = decodedMessage;
    }
}