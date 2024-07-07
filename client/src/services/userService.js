import axios from 'axios';

export const getUserProfile = (userId) => {
    return axios.get(`/api/user/${userId}`);
};

export const sendFriendRequest = (receiverId) => {
    return axios.post('/api/friend-request', { receiver_id: receiverId });
};
