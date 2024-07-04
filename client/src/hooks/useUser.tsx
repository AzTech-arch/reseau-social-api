import { useContext } from 'react';
import { UserContext, UserContextType } from '../contexts/UserContext';

// Hook personnalisé pour utiliser le contexte utilisateur
const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export default useUser;
