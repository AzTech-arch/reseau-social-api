import api from './apiConfig';

// Définir les types Register pour typer les données d'inscription
type RegisterProps = { last_name: string, first_name: string, email: string, password: string }

// Définir le type Login pour typer les données de connexion
type LoginProps = { email: string, password: string }

// Définir le type User pour typer les données utilisateur
type User = { id: string, last_name: string, first_name: string, email: string, image?: string }

// Définir le type LoginResponse pour typer la réponse de connexion
type LoginResponse = { token: string, user: User }

// Définir le type UpdateUserImageResponse pour typer la mise à jour de la photo de profil
type UpdateUserImageResponse = { message: string, image: string }

// Inscrire un nouvel utilisateur
export const register = async (dataRegister: RegisterProps): Promise<void> => {
    try {
        const response = await api.post('/register', dataRegister);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        throw new Error('Erreur lors de l\'inscription');
    }
}

// Connecter un utilisateur
export const login = async (dataLogin: LoginProps): Promise<LoginResponse> => {
    try {
        const response = await api.post('/login', dataLogin);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.user.id);
            localStorage.setItem('last_name', response.data.user.last_name);
            localStorage.setItem('first_name', response.data.user.first_name);
            localStorage.setItem('email', response.data.user.email);
            localStorage.setItem('image', response.data.user.image || '');
        }
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        throw new Error('Erreur lors de la connexion');
    }
}

// Mettre à jour la photo de profil de l'utilisateur
export const updateUserImage = async (dataImage: FormData): Promise<UpdateUserImageResponse> => {
    try {
        const response = await api.post('/updateUserImage', dataImage, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la photo de profil:', error);
        throw new Error('Erreur lors de la mise à jour de la photo de profil');
    }
}

// Déconnecter un utilisateur
export const logout = async (): Promise<void> => {
    try {
        await api.post('/logout');
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('last_name');
        localStorage.removeItem('first_name');
        localStorage.removeItem('email');
        localStorage.removeItem('image');
    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
        throw new Error('Erreur lors de la déconnexion');
    }
}
