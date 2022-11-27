import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/offers?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/offers/' + id);
}

export async function createRecord(data) {
    return post('/data/offers', data);
}

export async function updateRecord(id, data) {
    return put('/data/offers/' + id, data);
}

export async function deleteRecord(id) {
    return del('/data/offers/' + id);
}