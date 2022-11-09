import * as api from './api.js';

const endpoints = {
    furnitures: '/data/catalog',
    furnitureById: '/data/catalog/',
    myFurnitures: '/data/catalog?'
}

export async function getAllFurnitures() {
    return api.get(endpoints.furnitures);
}

export async function getMyFurnitures(userId) {
    return api.get(endpoints.myFurnitures + `where=_ownerId%3D%22${userId}%22`);
}

export async function getById(id) {
    return api.get(endpoints.furnitureById + id);
}

export async function createFurniture(furniture) {
    return api.post(endpoints.furnitures, furniture);
}