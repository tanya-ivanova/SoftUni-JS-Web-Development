function matchFullName (input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = pattern.exec(input);

    while(validName !== null) {
        validNames.push(validName[0]);
        validName = pattern.exec(input);
    }
    console.log(validNames.join(" "));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");