import  { useState } from 'react';

import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
const SidebarChat = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-1/4 bg-white border-r border-gray-300">
      <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
        <h1 className="text-2xl font-semibold">Chat Web</h1>
        <div className="relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-2 px-3">
                <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 1</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 2</a></li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
        <ContactList />
      </div>
    </div>
  );
};

const ContactList = () => {
  const contacts = [
    { name: 'Alice', message: 'Hoorayy!!', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { name: 'Martin', message: 'That pizza place was amazing! We should go again sometime. 🍕', avatar: 'https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    { name: 'Charlie', message: 'Hey, do you have any recommendations for a good movie to watch?', avatar: 'https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
    // Add more contacts here...
  ];

  return (
    <>
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <Avatar className="w-12 h-12 rounded-full">
              <AvatarImage src={contact.avatar} alt={`${contact.name} Avatar`} />
              <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{contact.name}</h2>
            <p className="text-gray-600">{contact.message}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SidebarChat;
