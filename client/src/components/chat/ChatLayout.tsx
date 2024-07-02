import ChatTopBar from "./ChatTopBar";
import SidebarChat from './SidebarChat';
import ChatList from './ChatList';

const ChatLayout = () => {
  const messages = [
    { type: 'incoming', text: "Hey Bob, how's it going?", avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { type: 'outgoing', text: "Hi Alice! I'm good, just finished a great book. How about you?", avatar: 'https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    
   
    // Add more messages here...
  ];

  return (
    <div className="flex h-full bg-white shadow-lg border">
      <SidebarChat />
      <div className="flex-1 flex flex-col h-full">
        <ChatTopBar />
        <ChatList messages={messages} />
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
