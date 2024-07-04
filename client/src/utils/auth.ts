import Cookies from 'js-cookie';


export const isAuthenticated = (): boolean => {
    return !!Cookies.get('auth_token'); // Vérifie si le cookie 'auth_token' existe
};
