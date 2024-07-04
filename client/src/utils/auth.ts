export const isAuthenticated = () => {
    const token = localStorage.getItem('userToken');
    return !!token; // retourne true si le token existe, sinon false
}