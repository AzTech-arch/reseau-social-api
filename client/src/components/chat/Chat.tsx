import React, { useState } from "react";
import { ChatList } from "./ChatList";
import ChatTopbar from "./ChatTopbar";
import { Message, UserData } from "./data";

interface ChatProps {
    messages?: Message[];
    selectedUser: UserData;
    isMobile: boolean;
}

export const Chat: React.FC<ChatProps> = ({ messages, selectedUser, isMobile }) => {
    const [messagesState, setMessages] = useState<Message[]>(messages ?? []);

    const sendMessage = (newMessage: Message) => {
        setMessages([...messagesState, newMessage]);
    };

    return (
        <div className="flex flex-col justify-between w-full h-full">
            <ChatTopbar selectedUser={selectedUser} />
            <ChatList messages={messagesState} selectedUser={selectedUser} sendMessage={sendMessage} isMobile={isMobile} />
        </div>
    );
};
