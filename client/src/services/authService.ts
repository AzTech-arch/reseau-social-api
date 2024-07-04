import api from './apiConfig'

// Définir les types des données du formulaire
type dataRegisterProps = { last_name: string, first_name: string, email: string, password: string }
type dataLoginProps = { email: string, password: string };


// Inscrire un nouvel utilisateur
export const register = async (dataRegister: dataRegisterProps) => {
    try {
        // Appel à l'API pour enregistrer un nouvel utilisateur
        const response = await api.post('/register', dataRegister)
        return response.data // Retourner les données de la réponse de l'API

    } catch (error) {
        // Gérer les erreurs et les afficher dans la console
        console.error('Erreur lors de l\'inscription:', error)
    }
}

// Connecter un utilisateur
export const login = async (dataLogin: dataLoginProps) => {
    try {
        // Appel à l'API pour connecter un utilisateur
        const response = await api.post('/login', dataLogin);

        if (response.data.token) {
            // Enregistrer le token dans le localStorage
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.user.id)
            localStorage.setItem('last_name', response.data.user.last_name)
            localStorage.setItem('first_name', response.data.user.first_name)
            localStorage.setItem('email', response.data.user.email)
        }

    } catch (error) {
        // Gérer les erreurs et les afficher dans la console
        console.error('Erreur lors de la connexion:', error);
    }
};