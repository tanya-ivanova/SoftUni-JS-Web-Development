const Crypto = require("../models/Crypto");

async function getAll() {
    return Crypto.find({}).lean();
}

async function getById(id) {
    return Crypto.findById(id).lean();
}

async function create(crypto) {
    return await Crypto.create(crypto);
}

async function update(id, offer) {
    const existing = await Crypto.findById(id);

    existing.name = offer.name;        
    existing.imageUrl = offer.imageUrl;
    existing.price = Number(offer.price);
    existing.description = offer.description;
    existing.payment = offer.payment;
    
    await existing.save();
}

async function deleteById(id) {
    await Crypto.findByIdAndDelete(id);
}

async function buyCrypto(offerId, userId) {
    const offer = await Crypto.findById(offerId);
    
    offer.boughtCrypto.push(userId);
    await offer.save();
}

async function searchCrypto(search, payment) {
    // const query = {};  
    // query.type = new RegExp(search, 'i');
    // return House.find(query).lean();

    return Crypto.find({
        name: {$regex: search, $options: 'i'},
        payment: {$regex: payment, $options: 'i'}
    }).lean();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    buyCrypto,    
    searchCrypto
};