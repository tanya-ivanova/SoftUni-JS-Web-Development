import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/shoes/' + id);
}

export async function search(query) {
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}

export async function createRecord(data) {
    return post('/data/shoes', data);
}

export async function updateRecord(id, data) {
    return put('/data/shoes/' + id, data);
}

export async function deleteRecord(id) {
    return del('/data/shoes/' + id);
}