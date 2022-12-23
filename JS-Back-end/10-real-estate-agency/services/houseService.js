const House = require("../models/House");

async function getAll() {
    return House.find({}).lean();
}

async function getLastThree() {
    return House.find({}).sort({createdAt: -1}).limit(3).lean();
}

async function searchHouses(search) {
    const query = {};  
    query.type = new RegExp(search, 'i');
    //return House.find({type: {$regex: text, $options: 'i'}}.lean();
    return House.find(query).lean();    
}

async function getById(id) {
    return House.findById(id).lean();
}

async function getByIdDetailed(id) {
    return House.findById(id).populate('usersRented').lean();
}


async function create(house) {
    return await House.create(house);
}

async function update(id, house) {
    const existing = await House.findById(id);

    existing.name = house.name;
    existing.type = house.type;
    existing.year = house.year;
    existing.city = house.city;
    existing.imageUrl = house.imageUrl;
    existing.description = house.description;
    existing.availablePieces = house.availablePieces;

    await existing.save();
}

async function deleteById(id) {
    await House.findByIdAndDelete(id);
}

async function rentHouse(houseId, userId) {
    const house = await House.findById(houseId);
    
    house.usersRented.push(userId);
    house.availablePieces--;
    await house.save();
}



module.exports = {
    getLastThree,
    getAll,
    getById,
    getByIdDetailed,
    create,
    update,
    deleteById,
    rentHouse,
    searchHouses    
};