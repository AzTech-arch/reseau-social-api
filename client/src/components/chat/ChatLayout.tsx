import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ChatTopBar from "./ChatTopBar";
import SidebarChat from './SidebarChat';

const ChatLayout = () => {
    const messages = [
        { type: 'incoming', text: "Hey Bob, how's it going?", avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
        { type: 'outgoing', text: "Hi Alice! I'm good, just finished a great book. How about you?", avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
        { type: 'incoming', text: "That book sounds interesting! What's it about?", avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
        // Add more messages here...
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-white shadow-lg border">
            <SidebarChat />
            <div className="flex-1 flex flex-col h-full">
                <ChatTopBar />
                <div className="flex-1 overflow-y-auto p-4">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex mb-4 ${message.type === 'outgoing' ? 'justify-end' : ''}`}>
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
                        </div>
                    ))}
                </div>
                <footer className="bg-white border-t border-gray-300 p-4">
                    <div className="flex items-center">
                        <input type="text" placeholder="Type a message..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" />
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ChatLayout;
