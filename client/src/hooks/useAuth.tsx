import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginService, logout as logoutService } from '../services/authService';
import { isAuthenticated, removeToken } from '../utils/auth';
import useUser from '../hooks/useUser';

// Définir le type User pour typer les données utilisateur
type User = {
    id: string;
    last_name: string;
    first_name: string;
    email: string;
}

// Définir le type LoginData pour typer les données de connexion
type LoginData = {
    email: string;
    password: string;
}

// Définir le type LoginResponse pour typer la réponse de connexion
type LoginResponse = {
    token: string;
    user: User;
}

// Hook personnalisé pour gérer l'authentification
export default function useAuth() {
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [auth, setAuth] = useState(isAuthenticated());

    useEffect(() => {
        if (auth) {
            setUser({
                id: localStorage.getItem('userId') || '',
                last_name: localStorage.getItem('last_name') || '',
                first_name: localStorage.getItem('first_name') || '',
                email: localStorage.getItem('email') || '',
            });
        }
    }, [auth, setUser]);

    // Authentifier l'utilisateur
    const login = async (dataLogin: LoginData) => {
        try {
            const response: LoginResponse = await loginService(dataLogin);

            // Si la réponse contient un token
            if (response.token) {
                setAuth(true);

                // Stocker les informations de l'utilisateur dans le stockage local
                localStorage.setItem('userId', response.user.id);
                localStorage.setItem('last_name', response.user.last_name);
                localStorage.setItem('first_name', response.user.first_name);
                localStorage.setItem('email', response.user.email);

                // Mettre à jour l'état utilisateur
                setUser(response.user);

                // Rediriger vers une page protégée après la connexion réussie
                navigate('/fiendzy');
            }
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }

    // Déconnexion de l'utilisateur
    const logout = async () => {
        try {
            await logoutService();
            removeToken();
            setAuth(false);
            setUser({
                id: '',
                last_name: '',
                first_name: '',
                email: '',
            });
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
            throw error;
        }
    }

    return {
        isAuthenticated: auth,
        user,
        login,
        logout,
    }
}
