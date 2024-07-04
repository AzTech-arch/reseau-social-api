import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { register as registerService, login as loginService } from '../services/authService';
import { isAuthenticated } from '../utils/auth';


export default function useAuth() {
    /**
     * ! STATE (état, données) de l'application
     */
   
    const [auth , setAuth] = useState(isAuthenticated());

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {
        // Vérifier si l'utilisateur est authentifié
        if (auth) {
            // Récupérer les données de l'utilisateur
        }

    });
}