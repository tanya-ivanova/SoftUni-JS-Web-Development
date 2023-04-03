const Ad = require("../models/Ad");

async function getAll() {
    return Ad.find({}).lean();
}

async function getFirstThree() {
    return Ad.find({}).limit(3).lean();
}

async function getById(id) {
    return Ad.findById(id).populate('owner').populate('usersApplied').lean();
}

async function create(ad) {
    return await Ad.create(ad);
}

async function update(id, ad) {
    const existing = await Ad.findById(id);

    existing.headline = ad.headline;        
    existing.location = ad.location;    
    existing.name = ad.name;
    existing.companyDescription = ad.companyDescription;
    
    await existing.save();
}

async function deleteById(id) {
    await Ad.findByIdAndDelete(id);
}

async function apply(adId, userId) {
    const ad = await Ad.findById(adId);
    
    ad.usersApplied.push(userId);
    await ad.save();
}

async function searchAds(search) {
    // const query = {};  
    // query.type = new RegExp(search, 'i');
    // return House.find(query).lean();
    const allAds = await Ad.find({}).populate('owner').lean();
       
    return allAds.filter(x => x.owner.email == search);
}

module.exports = {
    getAll,
    getFirstThree,
    getById,
    create,
    update,
    deleteById,
    apply,    
    searchAds
};