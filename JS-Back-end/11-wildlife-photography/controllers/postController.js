const { create, getById, update, deleteById, voteForPost, downvoteForPost, getAll, getByIdDetailed } = require('../services/postService');
const { parseError } = require('../util/parser');
const { hasUser } = require('../middlewares/guards');

const postController = require('express').Router();


postController.get('/', async (req, res) => {
    const posts = await getAll();

    res.render('all-posts', {
        title: 'All Posts',
        posts
    });
});

postController.get('/:id/details', async (req, res) => {
    const post = await getByIdDetailed(req.params.id);

    const authorFullName = `${post.author.firstName} ${post.author.lastName}`;
    const peopleVoted = post.votes.map(v => v.email).join(', ');

    if (post.author._id == req.user?._id) {
        post.isOwner = true;
    } else if (post.votes.map(v => v._id.toString()).includes(req.user?._id.toString())) {
        post.hasVoted = true;
    }

    res.render('details', {
        title: 'Post Details',
        post,
        authorFullName,
        peopleVoted
    });
});

postController.get('/create', hasUser(), (req, res) => {
    res.render('create', {
        title: 'Create Post'
    });
});

postController.post('/create', hasUser(), async (req, res) => {
    const post = {
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        creationDate: req.body.creationDate,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        author: req.user._id
    };

    try {
        if (Object.values(post).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await create(post);
        res.redirect('/post');

    } catch (error) {
        res.render('create', {
            title: 'Create Post',
            body: post,
            errors: parseError(error)
        });
    }
});

postController.get('/:id/edit', hasUser(), async (req, res) => {
    const post = await getById(req.params.id);

    if (post.author != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Post',
        post
    });
});

postController.post('/:id/edit', hasUser(), async (req, res) => {
    const post = await getById(req.params.id);

    if (post.author != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        creationDate: req.body.creationDate,
        imageUrl: req.body.imageUrl,
        description: req.body.description
    };

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited);
        res.redirect(`/post/${req.params.id}/details`);

    } catch (error) {
        res.render('edit', {
            title: 'Edit Post',
            post: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

postController.get('/:id/delete', hasUser(), async (req, res) => {
    const post = await getById(req.params.id);

    if (post.author != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/post');

});

postController.get('/:id/vote/:type', hasUser(), async (req, res) => {
    const post = await getById(req.params.id);
    const value = req.params.type == 'upvote' ? 1 : -1;

    try {
        if (post.author == req.user._id) {
            post.isOwner = true;
            throw new Error('Cannot vote for your own post');
        }

        if(post.votes.map(v => v.toString()).includes(req.user._id.toString())) {
            post.hasVoted = true;
            throw new Error('Cannot vote twice');
        }

        await voteForPost(req.params.id, req.user._id, value);
        res.redirect(`/post/${req.params.id}/details`);

    } catch (error) {
        res.render('details', {
            title: 'Post Details',
            post,
            errors: parseError(error)
        });
    }
});

module.exports = postController;