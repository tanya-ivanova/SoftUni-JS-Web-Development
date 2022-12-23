const profileController = require('express').Router();
const { hasUser } = require('../middlewares/guards');
const { getUserPosts } = require('../services/postService');


profileController.get('/', hasUser(), async (req, res) => {
    const myPosts = await getUserPosts(req.user._id);        
        

    res.render('my-posts', {
        title: 'Profile Page',
        posts: myPosts        
    });
});

module.exports = profileController;
