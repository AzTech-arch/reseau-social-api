import api from './apiConfig';

// Définir les types Register pour typer les données d'inscription
type RegisterProps = { last_name: string, first_name: string, email: string, password: string }

// Définir le type Login pour typer les données de connexion
type LoginProps = { email: string, password: string }

// Définir le type User pour typer les données utilisateur
type User = { id: string, last_name: string, first_name: string, email: string }

// Définir le type LoginResponse pour typer la réponse de connexion
type LoginResponse = { token: string, user: User }




// Inscrire un nouvel utilisateur
export const register = async (dataRegister: RegisterProps): Promise<void> => {
    try {
        // Appel à l'API pour enregistrer un nouvel utilisateur
        const response = await api.post('/register', dataRegister)
        return response.data; // Retourner les données de la réponse de l'API

    } catch (error) {
        // Gérer les erreurs et les afficher dans la console
        console.error('Erreur lors de l\'inscription:', error)
    }
}

// Connecter un utilisateur
export const login = async (dataLogin: LoginProps): Promise<LoginResponse> => {
    try {
        // Appel à l'API pour connecter un utilisateur
        const response = await api.post('/login', dataLogin)

        if (response.data.token) {
            // Enregistrer le token et les informations utilisateur dans le localStorage
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.user.id)
            localStorage.setItem('last_name', response.data.user.last_name)
            localStorage.setItem('first_name', response.data.user.first_name)
            localStorage.setItem('email', response.data.user.email)
        }
        return response.data // Retourner les données de la réponse de l'API
    } catch (error) {
        // Gérer les erreurs et les afficher dans la console
        console.error('Erreur lors de la connexion:', error)
        throw new Error('Erreur lors de la connexion')
    }
}

// Déconnecter un utilisateur
export const logout = async (): Promise<void> => {
    try {
        // Appel à l'API pour déconnecter l'utilisateur
        await api.post('/logout')
        // Supprimer le token et les informations utilisateur du localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        localStorage.removeItem('last_name')
        localStorage.removeItem('first_name')
        localStorage.removeItem('email')
    } catch (error) {
        // Gérer les erreurs et les afficher dans la console
        console.error('Erreur lors de la déconnexion:', error)
    }
}
