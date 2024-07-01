import React from 'react';

const Post = ({ user, content, imageUrl, time }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <div className="flex items-center space-x-4">
                <img src={user.profileImage} alt={user.name} className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-400">{time}</p>
                </div>
            </div>
            <p className="mt-2">{content}</p>
            {imageUrl && <img src={imageUrl} alt="Post" className="w-full mt-2 rounded-lg" />}
        </div>
    );
};

export default Post;
