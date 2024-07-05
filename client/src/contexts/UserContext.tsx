import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Définir le type User pour typer les données utilisateur
type User = {
    id: string;
    last_name: string;
    first_name: string;
    email: string;
    image?: string;
};

// Définir l'interface UserContextType pour typer le contexte utilisateur
export interface UserContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

// Initialiser les données utilisateur par défaut
const defaultUser: User = {
    id: '',
    last_name: '',
    first_name: '',
    email: '',
    image: ''
};

// Créer le contexte utilisateur avec les types appropriés
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Composant fournisseur du contexte utilisateur (UserProvider)
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(defaultUser);

    // Utilisation du hook useEffect pour récupérer les données utilisateur depuis le localStorage
    useEffect(() => {
        setUser({
            id: localStorage.getItem('id') || '',
            last_name: localStorage.getItem('last_name') || '',
            first_name: localStorage.getItem('first_name') || '',
            email: localStorage.getItem('email') || '',
            image: localStorage.getItem('image') || ''
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
