import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}

export async function getByUser(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getById(id) {
    return get('/data/posts/' + id);
}

export async function createRecord(data) {
    return post('/data/posts', data);
}

export async function updateRecord(id, data) {
    return put('/data/posts/' + id, data);
}

export async function deleteRecord(id) {
    return del('/data/posts/' + id);
}