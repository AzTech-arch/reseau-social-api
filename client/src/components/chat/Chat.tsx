import React from "react";
import ChatTopbar from "./ChatTopbar";
import ChatList from "./ChatList";

interface ChatProps {
    messages?: {
        id: number;
        avatar: string;
        name: string;
        message: string;
    }[];
    selectedUser: {
        avatar: string;
        name: string;
    };
    isMobile: boolean;
}

export const Chat: React.FC<ChatProps> = ({ messages, selectedUser, isMobile }) => {
    const [messagesState, setMessages] = React.useState(messages ?? []);

    const sendMessage = (newMessage: { id: number; name: string; avatar: string; message: string; }) => {
        setMessages([...messagesState, newMessage]);
    };

    return (
        <div className="flex flex-col justify-between w-full h-full">
            <ChatTopbar selectedUser={selectedUser} />
            <ChatList
                messages={messagesState}
                selectedUser={selectedUser}
                sendMessage={sendMessage}
                isMobile={isMobile}
            />
        </div>
    );
}

export default Chat;
