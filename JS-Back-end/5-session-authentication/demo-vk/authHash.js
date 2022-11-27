const express = require('express');
const session = require('express-session');
const { register, login, users } = require('./userService');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(session({
    cookie: {secure: false},
    resave: false,
    saveUninitialized: true,
    secret: 'asdfasdfasdf'
}));

const homeTemplate = (user, users, isAdmin) => `<h1>Welcome, ${user || 'guest'}</h1>
${user == undefined ? '<p>Please <a href="/login">login here</a>. If you don\'t have an account, <a href="/register">please register</a>.</p>' : ''}
${isAdmin ? `<ul>
${users.map(u => `<li>${u.username} - ${u.failedAttempts} <a href="/reset?username=${u.username}">Reset</a></li>`).join('\n')}
</ul>` : ''}`;

app.get('/', (req, res) => {
    let user = {};
    if(req.session.user) {
        user = users.find(u => u.username.toLowerCase() == req.session.user.toLowerCase());
    }

    res.send(homeTemplate(user.username, users, (user.role || []).includes('admin')));
});

app.get('/reset', (req, res) => {
    let user = {};
    if(req.session.user) {
        user = users.find(u => u.username.toLowerCase() == req.session.user.toLowerCase());
    }

    if((user.role || []).includes('admin') == false) {
        return res.status(403).send('403 Forbidden');
    }
    console.log(req.query);
    const target = users.find(u => u.username.toLowerCase() == req.query.username.toLowerCase());
    target.failedAttempts = 0;
    res.redirect('/');

});

const registerTemplate = (error) => `<h1>Register</h1>
${error ? `<p>${error}</p>` : ''}
<form action="/register" method="post">
<label>Username: <input type="text", name="username"></label>
<label>Password: <input type="password", name="password"></label>
<label>Repeat: <input type="password", name="repass"></label>
<input type="submit" value="Sign up">
</form>`;

app.get('/register', (req, res) => {
    res.send(registerTemplate());
});

app.post('/register', async (req, res) => {
    try {
        if(req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required!');
        } else if(req.body.password != req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }

        await register(req.body.username, req.body.password);
        res.redirect('/');

    } catch (err) {
        res.send(registerTemplate(err.message));
    }
});

const loginTemplate = (error) => `<h1>Login</h1>
${error ? `<p>${error}</p>` : ''}
<form action="/login" method="post">
<label>Username: <input type="text", name="username"></label>
<label>Password: <input type="password", name="password"></label>
<input type="submit" value="Sign in">
</form>`;

app.get('/login', (req, res) => {
    res.send(loginTemplate());
});

app.post('/login', async (req, res) => {
    try {
        const result = await login(req.body.username, req.body.password);
        req.session.user = result.username;
        res.redirect('/');         

    } catch (err) {
        res.status(401).send(loginTemplate(err.message));
    }    
});

app.get('/getAdmin', (req, res) => {
    const user = users.find(u => u.username.toLowerCase() == req.session.user.toLowerCase());
    user.role.push('admin');
    res.redirect('/');
});

app.listen(3000);