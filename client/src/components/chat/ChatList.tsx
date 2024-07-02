import { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

interface ChatListProps {
    messages: Array<{ type: string; text: string; avatar: string }>;
}

const ChatList = ({ messages }: ChatListProps) => {
    const messagesContainerRef = useRef < HTMLDivElement > (null);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop =
                messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div ref={messagesContainerRef} className="flex-1  p-4 ">
            <AnimatePresence>
                {messages.map((message, index) => (
                    <motion.div
                        key={index}
                        layout
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className={`flex mb-4 ${message.type === 'outgoing' ? 'justify-end' : ''}`}
                    >
                        {message.type === 'incoming' && (
                            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                <Avatar className="w-8 h-8 rounded-full">
                                    <AvatarImage src={message.avatar} alt="User Avatar" />
                                    <AvatarFallback>?</AvatarFallback>
                                </Avatar>
                            </div>
                        )}
                        <div className={`flex max-w-96 rounded-lg p-3 gap-3 ${message.type === 'outgoing' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700'}`}>
                            <p>{message.text}</p>
                        </div>
                        {message.type === 'outgoing' && (
                            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                                <Avatar className="w-8 h-8 rounded-full">
                                    <AvatarImage src={message.avatar} alt="My Avatar" />
                                    <AvatarFallback>?</AvatarFallback>
                                </Avatar>
                            </div>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ChatList;
