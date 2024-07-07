import axios from 'axios';

export const getUserProfile = (userId) => {
    return axios.get(`/user/${userId}`);
};

export const sendFriendRequest = (receiverId) => {
    return axios.post('/friend-request', { receiver_id: receiverId });
};

export const searchUsers = (query) => {
    return axios.get(`/search/users?query=${query}`);
};
