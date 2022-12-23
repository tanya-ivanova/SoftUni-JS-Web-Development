const Post = require("../models/Post");

async function getAll() {
    return Post.find({}).lean();
}

async function getById(id) {
    return Post.findById(id).lean();
}

async function getByIdDetailed(id) {
    return Post.findById(id).populate('author').populate('votes').lean();
}

async function getUserPosts(userId) {
    return (await Post.find({author: userId}).populate('author').lean());
}

async function create(post) {
    return await Post.create(post);
}

async function update(id, post) {
    const existing = await Post.findById(id);

    existing.title = post.title;
    existing.keyword = post.keyword;
    existing.location = post.location;
    existing.creationDate = post.creationDate;
    existing.imageUrl = post.imageUrl;
    existing.description = post.description;    

    await existing.save();
}

async function deleteById(id) {
    await Post.findByIdAndDelete(id);
}

async function voteForPost(postId, userId, value) {
    const post = await Post.findById(postId);
    
    post.votes.push(userId);
    post.rating += value;
    await post.save();
}


module.exports = {
    getAll,
    getById,
    getByIdDetailed,
    create,
    update,
    deleteById,
    voteForPost,
    getUserPosts
};