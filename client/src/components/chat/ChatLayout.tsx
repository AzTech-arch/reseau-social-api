import ChatTopBar from "./ChatTopBar";
import SidebarChat from './SidebarChat';
import ChatList from './ChatList';
import ChatBottomBar from "./ChatBottonBar";

const ChatLayout = () => {
    const messages = [
        { type: 'incoming', text: "Hey Bob, how's it going?", avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
        { type: 'outgoing', text: "Hi Alice! I'm good, just finished a great book. How about you?", avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },



        // Add more messages here...
    ];

    return (
        <div className="flex bg-white shadow-sm border ">
            <SidebarChat />
            <div className="flex-1 flex flex-col">
                <ChatTopBar />

                <div className="overflow-y-auto max-h-96 h-screen">
                    <ChatList messages={messages} />
                </div>

                <footer className="bg-white  border-gray-300 p-4 ">
                    <ChatBottomBar />
                </footer>
            </div>
        </div>
    );
};

export default ChatLayout;
