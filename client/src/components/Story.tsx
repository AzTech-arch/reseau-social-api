import * as React from "react";

const Story = ({ imageSrc, name, profileImage, isCreateStory }) => {
    return (
        <div className="relative w-full h-full">
            <img src={imageSrc} alt={name} className="w-full h-full rounded-lg" />
            {isCreateStory ? (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                </div>
            ) : (
                <div className="absolute top-2 left-2">
                    <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-full border-2 border-blue-500" />
                </div>
            )}
            <p className="text-xs text-center mt-2 text-black">{name}</p>
        </div>
    );
};

export default Story;
