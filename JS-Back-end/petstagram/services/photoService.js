const Photo = require("../models/Photo");

async function getAll() {
    return Photo.find({}).populate('owner').lean();
}

async function getById(id) {
    return Photo.findById(id).populate('owner').lean();
}

async function getUserPhotos(userId) {
    return Photo.find({owner: userId}).lean();
}

async function create(photo) {
    return await Photo.create(photo);
}

async function update(id, photo) {
    const existing = await Photo.findById(id);

    existing.name = photo.name;        
    existing.age = Number(photo.age);
    existing.description = photo.description;
    existing.location = photo.location;
    existing.imageUrl = photo.imageUrl;
    
    await existing.save();
}

async function deleteById(id) {
    await Photo.findByIdAndDelete(id);
}

async function commentPhoto(photoId, userId, comment) {
    const photo = await Photo.findById(photoId);
    
    photo.commentList.push({
        userId,
        comment
    });
    await photo.save();
}



module.exports = {
    getAll,
    getById,
    getUserPhotos,
    create,
    update,
    deleteById,
    commentPhoto
};