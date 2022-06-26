function extractFile (path) {
    let pathArr = path.split("\\");
    let file = pathArr.pop();
    let fileArr = file.split(".");
    let fileName = "";
    let fileExtension = "";
    
    if (fileArr.length === 2) {
        fileName = fileArr[0];
        fileExtension = fileArr[1];
    } else {
        fileExtension = fileArr.pop();
        fileName = fileArr.join(".");
    }

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');