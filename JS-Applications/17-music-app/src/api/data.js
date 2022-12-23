import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function getById(id) {
    return get('/data/albums/' + id);
}

export async function createRecord(data) {
    return post('/data/albums', data);
}

export async function updateRecord(id, data) {
    return put('/data/albums/' + id, data);
}

export async function deleteRecord(id) {
    return del('/data/albums/' + id);
}

export async function search(query) {
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}