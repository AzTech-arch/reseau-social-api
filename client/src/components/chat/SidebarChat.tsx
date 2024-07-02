import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import ChatContactList from './ChatContactList';
import { Search } from 'lucide-react';

const SidebarChat = () => {
    return (
        <div className="w-1/4 bg-white  border-r">
            <header className="p-5 flex justify-between items-center shadow text-white">
                <h1 className="text-2xl font-semibold text-cyan-700 ">Discussions</h1>
                <div className="relative">
                    <Button variant="ghost">
                        <HiOutlineDotsHorizontal size={24} className="text-cyan-700 " />
                    </Button>
                </div>
            </header>

            <div className="p-4 ">
                <div className="relative mb-4">
                    <Input type="text" placeholder="Rechercher Contact" className="bg-white text-slate-600 pl-10 pr-4 py-2 shadow-sm" />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
                <div className=" overflow-y-auto max-h-96 h-screen">
                    <ChatContactList />
                </div>
            </div>
        </div>
    );
};

export default SidebarChat;
