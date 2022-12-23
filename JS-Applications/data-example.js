import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function getByUser(userId) {
    return get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getById(id) {
    return get('/data/theaters/' + id);
}

export async function createRecord(data) {
    return post('/data/theaters', data);
}

export async function updateRecord(id, data) {
    return put('/data/theaters/' + id, data);
}

export async function deleteRecord(id) {
    return del('/data/theaters/' + id);
}

export async function addLike(theaterId) {
    return post('/data/likes', {theaterId});
}

export async function getTotalLikesCount(theaterId) {
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function getLikeForUser(theaterId, userId) {
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}