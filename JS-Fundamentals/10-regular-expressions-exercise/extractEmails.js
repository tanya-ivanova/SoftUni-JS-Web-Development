function extractEmails (input) {
    let pattern = /(?<!\S)[A-Za-z0-9]+[\-\_\.]*[A-Za-z0-9]*@[a-z]+-*[a-z]*\.[a-z]+\.*[a-z]*\b/g;

    let match = pattern.exec(input);

    while(match !== null) {
        console.log(match[0]);
        match = pattern.exec(input);
    }
}

extractEmails("Please contact us at: support@github.com.");
extractEmails("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.");
extractEmails("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.");