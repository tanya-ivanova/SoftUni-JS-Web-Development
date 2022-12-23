const Publication = require("../models/Publication");

async function getAll() {
    return Publication.find({}).lean();
}

async function getById(id) {
    return Publication.findById(id).populate('owner').lean();
}

async function getByUserSharing(userId) {
    return (await Publication.find({sharings: userId}).lean());
}

async function getByOwner(userId) {
    return (await Publication.find({owner: userId}).lean());
}

async function create(publication) {
    return await Publication.create(publication);
}

async function update(id, publication) {
    const existing = await Publication.findById(id);

    existing.title = publication.title;
    existing.paintingTechnique = publication.paintingTechnique;
    existing.artPicture = publication.artPicture;
    existing.certificate = publication.certificate;

    await existing.save();
}

async function deleteById(id) {
    await Publication.findByIdAndRemove(id);
}

async function sharePublication(publicationId, userId) {
    const publication = await Publication.findById(publicationId);
    
    publication.sharings.push(userId);
    await publication.save();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    sharePublication,
    getByUserSharing,
    getByOwner
};