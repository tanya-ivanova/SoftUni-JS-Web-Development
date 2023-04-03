const Book = require("../models/Book");

async function getAll() {
    return Book.find({}).lean();
}

async function getById(id) {
    return Book.findById(id).lean();
}

async function getByUserWishings(userId) {
    return (await Book.find({wishingList: userId}).lean());
}

async function create(book) {
    return await Book.create(book);
}

async function update(id, book) {
    const existing = await Book.findById(id);

    existing.title = book.title;
    existing.author = book.author;
    existing.genre = book.genre;        
    existing.stars = Number(book.stars);
    existing.imageUrl = book.imageUrl;
    existing.review = book.review;
    
    await existing.save();
}

async function deleteById(id) {
    await Book.findByIdAndDelete(id);
}

async function wishToRead(offerId, userId) {
    const book = await Book.findById(offerId);
    
    book.wishingList.push(userId);
    await book.save();
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    wishToRead,
    getByUserWishings
};