const http = require('http');
const router = require('./router');
const {homePage, aboutPage, defaultPage} = require('./controllers/homeController');
const {catalogPage, createPage, createItem} = require('./controllers/catalogController');

router.get('/', homePage);
router.get('/catalog', catalogPage);
router.get('/create', createPage);
router.post('/create', createItem);
router.get('/about', aboutPage);
router.get('default', defaultPage);

// const server = http.createServer((req, res) => {
//    console.log('>>>', req.method, req.url);

//    router.match(req, res);
// });

const server = http.createServer(router.match);

server.listen(3000);
