import { useState } from 'react';
import ChatContactList from './ChatContactList';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const SidebarChat = () => {
   

    

    return (
        <div className="w-1/4 bg-white text-black h-full">
            <header className="p-4 border-b border-gray-700 flex justify-between items-center ">
                <h1 className="text-2xl font-semibold">Discussions</h1>
                <div className="relative">
                    <Button variant="ghost" className="focus:outline-none">
                        <HiOutlineDotsHorizontal size={24} className="text-black" />
                    </Button>
                </div>
            </header>
            <div className="p-3">
                <Input placeholder="Rechercher dans Messenger" className="mb-4" />
{/* 
                <div className="flex space-x-4 mb-4">
                    <Button variant={activeTab === 'messages' ? 'default' : 'outline'} onClick={() => setActiveTab('messages')}>Messagerie</Button>
                    <Button variant={activeTab === 'communities' ? 'default' : 'outline'} onClick={() => setActiveTab('communities')}>Communautés</Button>
                </div> */}

                <div className="overflow-y-auto h-full">
                    <ChatContactList />
                </div>
            </div>
        </div>
    );
};

export default SidebarChat;
