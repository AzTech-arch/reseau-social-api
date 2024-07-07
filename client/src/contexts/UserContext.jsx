import { createContext, useState, useEffect } from 'react';

// Création d'un nouveau contexte appelé UserContext
const UserContext = createContext();

// Composant fournisseur du contexte utilisateur (UserProvider)
export const UserProvider = ({ children }) => {

    // Utilisation du hook useState pour initialiser les données utilisateur
    const [user, setUser] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        image: '',
        image_cover: ''
    });

    useEffect(() => {
        // Récupérer les données utilisateur depuis le localStorage uniquement lors de l'initialisation
        const userData = {
            id: localStorage.getItem('id') || '', // Récupérer l'ID utilisateur depuis le localStorage ou une chaîne vide
            first_name: localStorage.getItem('first_name') || '',
            last_name: localStorage.getItem('last_name') || '',
            email: localStorage.getItem('email') || '',
            image: localStorage.getItem('image') || '',
            image_cover: localStorage.getItem('cover_image') || ''
        };
        // Mettre à jour les données utilisateur dans le contexte
        setUser(userData)
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Export du contexte UserContext pour utilisation dans d'autres fichiers
export { UserContext };