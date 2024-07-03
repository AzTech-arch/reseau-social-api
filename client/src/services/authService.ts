import api from './apiConfig'

// Définir les interfaces des données de l'utilisateur
type dataRegisterProps = { lastname: string, firstname: string, email: string, password: string }


// Inscrire un nouvel utilisateur
export const register = async (dataRegister: dataRegisterProps) => {
    try {
        // Appel à l'API pour enregistrer un nouvel utilisateur
        const response = await api.post('/register', dataRegister)
        return response.data; // Retourner les données de la réponse de l'API

    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
    }
}