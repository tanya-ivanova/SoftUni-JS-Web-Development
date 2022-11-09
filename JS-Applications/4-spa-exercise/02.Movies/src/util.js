export function getToken() {
    return JSON.parse(sessionStorage.getItem('user')).accessToken;    
}

export function getUserId() {
    return JSON.parse(sessionStorage.getItem('user'))._id;
}