// utils/auth.js
export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token; // retourne true si le token existe, sinon false
}

export const removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('last_name');
    localStorage.removeItem('first_name');
    localStorage.removeItem('email');
    localStorage.removeItem('image');
    localStorage.removeItem('image_cover');
}