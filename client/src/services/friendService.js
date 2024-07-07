// src/services/friendService.js
import api from './apiConfig';

// Récupérer la liste des amis
export const sendFriendRequest = async (receiverId) => {
    try {
        const response = await api.post('/friend/request', { receiver_id: receiverId });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la demande d\'ami:', error);
    }
};

// Accepter une demande d'ami
export const acceptFriendRequest = async (requestId) => {
    try {
        const response = await api.post(`/friend/accept/${requestId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'acceptation de la demande d\'ami:', error);
    }
};

// Refuser une demande d'ami
export const rejectFriendRequest = async (requestId) => {
    try {
        const response = await api.post(`/friend/reject/${requestId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors du rejet de la demande d\'ami:', error);
    }
};

// Supprimer un ami
export const removeFriend = async (friendId) => {
    try {
        const response = await api.delete(`/friend/remove/${friendId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'ami:', error);
    }
};
