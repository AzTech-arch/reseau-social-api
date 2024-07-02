import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import ChatContactList from './ChatContactList';
import { Search } from 'lucide-react';

const SidebarChat = () => {
    return (
        <div className="w-1/4 bg-white text-black h-full border-r">
            <header className="p-5 flex justify-between items-center bg-gray-800 text-white">
                <h1 className="text-2xl font-semibold">Discussions</h1>
                <div className="relative">
                    <Button variant="ghost" className="focus:outline-none">
                        <HiOutlineDotsHorizontal size={24} className="text-white" />
                    </Button>
                </div>
            </header>
            <div className="p-3 flex-1 overflow-y-auto">
                <div className="relative mb-3">
                    <Input type="text" placeholder="Rechercher sur Friendzy" className="bg-white text-slate-600 pl-10 pr-4 py-2 shadow-sm" />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
                <ChatContactList />
            </div>
        </div>
    );
};

export default SidebarChat;
