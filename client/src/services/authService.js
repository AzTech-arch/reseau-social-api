import api from './apiConfig'

// Inscrire un nouvel utilisateur
export const register = async (dataRegister) => {
    try {
        // Appel à l'API pour enregistrer un nouvel utilisateur
        const response = await api.post('/register', dataRegister)
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error)
    }
}


// Authentifier un utilisateur
export const login = async (dataLogin) => {
    try {
        // Appel à l'API pour authentifier un utilisateur
        const response = await api.post('/login', dataLogin)

        // Si la réponse de l'API contient un token JWT 
        if (response.data.token) {
            // Stocker le token JWT dans localStorage etc
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.user.id);
            localStorage.setItem('last_name', response.data.user.last_name);
            localStorage.setItem('first_name', response.data.user.first_name);
            localStorage.setItem('email', response.data.user.email);
            localStorage.setItem('image', response.data.user.image);
        }
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'authentification:', error)
    }
}

// Mettre à jour la photo de profil de l'utilisateur
export const updateUserPhoto = async (dataImage) => {
    try {
        // Appel à l'API pour mettre à jour la photo de profil de l'utilisateur
        const response = await api.post('/updateUserImage', dataImage, { headers: { 'Content-Type': 'multipart/form-data' } })
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de la mise à jour de la photo de profil:', error)
    }
}

// Déconnecter un utilisateur
export const logout = async () => {
    try {
        await api.post('/logout');
        // Supprimer les données utilisateur du stockage local
        localStorage.removeItem('userToken')
        localStorage.removeItem('userId')
        localStorage.removeItem('firstname')
        localStorage.removeItem('lastname')
        localStorage.removeItem('email')
        localStorage.removeItem('image')
        localStorage.removeItem('coverPhoto')

    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error)
    }
}