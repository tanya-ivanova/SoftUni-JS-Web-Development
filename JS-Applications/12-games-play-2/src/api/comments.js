import { get, post } from "./api.js";

const endpoints = {
    byGameId: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    post: '/data/comments'
}

export async function loadAllComments(gameId) {
    return get(endpoints.byGameId(gameId));
}

export async function createComment(comment) {
    return post(endpoints.post, comment);
}