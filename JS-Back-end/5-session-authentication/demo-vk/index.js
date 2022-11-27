const server = require('http').createServer((req, res) => {
    if (req.url == '/') {
        action(req, res);

    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(3000);

function parseCookie(req) {
    if (req.headers.cookie) {
        const cookies = Object.fromEntries(req.headers.cookie
            .split(';')
            .map(c => c.trim())
            .map(c => c.split('=')));

        console.log(cookies);

        return cookies;
    }

    return {};
}

const sessions = {};

function action(req, res) {
    const cookies = parseCookie(req);
    const sessionId = cookies.sessionId || (Math.random() * 999999).toString(16);
    const session = sessions[sessionId] || {};
    
    //do stuff
    session.visited = (session.visited || 0) + 1;

    sessions[sessionId] = session;


    res.writeHead(200, [
        'Set-cookie', `sessionId=${sessionId}; httpOnly`,
        'Set-cookie', 'theme=dark'
    ]);
    res.write(`<p>Hello</p><p>You have visited this page ${session.visited} times</p>`);
    res.end();
}

// function action(req, res) {
//     const cookies = parseCookie(req);

//     let visited = 0;

//     visited++;

//     res.writeHead(200, {
//         'Set-cookie': `visited=${visited}; httpOnly`
//     });
//     res.write(`<p>Hello</p><p>You have visited this page ${visited} times</p>`);
//     res.end();
// }