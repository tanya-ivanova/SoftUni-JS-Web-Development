import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/games?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get('/data/games/' + id);
}

export async function getTheLatest3Games() {
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function createRecord(data) {
    return post('/data/games', data);
}

export async function updateRecord(id, data) {
    return put('/data/games/' + id, data);
}

export async function deleteRecord(id) {
    return del('/data/games/' + id);
}