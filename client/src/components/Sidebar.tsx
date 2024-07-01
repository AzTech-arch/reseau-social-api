import { FC } from "react";
import { Button } from "./ui/button";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BsPostcardHeart } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import SidebarToggleButton from "./SidebarToggleButton";

interface SidebarProps {
    isOpen: boolean // boolean pour savoir si le sidebar est ouvert ou non
    toggleSidebar: () => void // fonction pour basculer le sidebar

}



const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {


    return (
        <div className={`fixed left-0 h-full bg-white text-gray-200 shadow-md transition-all duration-300 ${isOpen ? 'w-64' : 'w'}`}>
            <div className="flex flex-col flex-grow p-4">
                <div className="flex items-center justify-between">
                    <Button variant="secondary" className="flex items-center space-x-2 w-full justify-start p-2 py-7 mb-2">
                        <Avatar className="w-10 h-10 shadow">
                            <AvatarImage src="" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {isOpen && <p className="text-sm font-semibold leading-7 text-black">Cousema Anjary</p>}
                    </Button>
                    <SidebarToggleButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
                </div>
                <div className="mt-2">
                    {isOpen ? (
                        <div className="mb-2">
                            <span className="text-base leading-7 text-slate-600 font-semibold font-mono">Contenu</span>
                        </div>
                    ) : (
                        <div className="mb-3 flex items-center justify-center">
                            <HiOutlineDotsHorizontal size={24} className="text-black" />
                        </div>
                    )}
                    <Button variant="ghost" className="flex items-center space-x-2 w-full justify-start p-2 py-6 ps-4">
                        <LiaUserFriendsSolid size={isOpen ? 24 : 24} className="text-black mr-2" />
                        {isOpen && <p className="text-base font-semibold leading-7 text-black">Ami(e)s</p>}
                    </Button>
                    <Button variant="ghost" className="flex items-center space-x-2 w-full justify-start p-2 py-6 ps-4">
                        <BsPostcardHeart size={isOpen ? 24 : 24} className="text-black mr-2" />
                        {isOpen && <p className="text-base font-semibold leading-7 text-black">Fils</p>}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
