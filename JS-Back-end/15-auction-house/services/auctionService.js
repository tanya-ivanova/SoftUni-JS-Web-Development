const Auction = require("../models/Auction");

async function getAll() {
    return Auction.find({closed: false}).lean();
}

async function getAllClosed(userId) {
    return Auction.find({owner: userId, closed: true}).populate('bidder').lean();
}

async function getById(id) {
    return Auction.findById(id).populate('owner').populate('bidder').lean();
}

async function create(crypto) {
    return await Auction.create(crypto);
}

async function update(id, auction) {
    const existing = await Auction.findById(id);

    existing.title = auction.title;        
    existing.description = auction.description;
    existing.category = auction.category;
    existing.imageUrl = auction.imageUrl;
    existing.price = Number(auction.price);    
        
    await existing.save();
}

async function deleteById(id) {
    await Auction.findByIdAndDelete(id);
}

async function bidAuction(auctionId, userId, newPrice) {
    const auction = await Auction.findById(auctionId);
    
    auction.bidder = userId;
    auction.price = newPrice;
    
    await auction.save();
}

async function closeAuction(auctionId) {
    const auction = await Auction.findById(auctionId);
    auction.closed = true;

    await auction.save();
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    bidAuction,
    closeAuction,
    getAllClosed 
};