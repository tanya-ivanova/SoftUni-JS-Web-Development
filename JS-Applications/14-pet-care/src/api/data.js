import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getById(id) {
    return get('/data/pets/' + id);
}

export async function createRecord(data) {
    return post('/data/pets', data);
}

export async function updateRecord(id, data) {
    return put('/data/pets/' + id, data);
}

export async function deleteRecord(id) {
    return del('/data/pets/' + id);
}