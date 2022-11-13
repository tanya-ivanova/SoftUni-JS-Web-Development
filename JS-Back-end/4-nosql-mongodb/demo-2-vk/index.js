const mongoose = require('mongoose');
const Article = require('./models/Article');
const Comment = require('./models/Comment');


const connectionString = 'mongodb://localhost:27017/testdb';
start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('Database connected');

    // await Article.create({
    //     author: 'Peter',
    //     title: 'First Article',
    //     content: 'Lorem Ipsum Dolor Sit Amet'
    // });

    // await Comment.create({
    //     author: 'John',
    //     content: 'Nice article!'
    // });

    // const article = await Article.findOne({});
    // const comment = await Comment.findOne({});

    // //article.comments.push(comment._id);

    // article.comments.push(comment);
    // await article.save();

    //const article = await Article.findOne({}).populate('comments');
    const article = await Article.findOne({}).populate('comments', 'content');
    console.log(article);


    await mongoose.disconnect();
}