import { Button } from "./ui/button";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BsPostcardHeart } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

const Sidebar = () => {
    return (
        <div className="fixed  left-0 w-64 h-full bg-white text-gray-200 shadow-md">
            <div className="flex flex-col flex-grow p-4">
                <Button variant="secondary" className="flex items-center space-x-2 w-full justify-start p-2 py-7 mb-2">
                    <Avatar className="w-10 h-10 shadow">
                        <AvatarImage src="" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-semibold leading-7 text-black">Cousema Anjary</p>
                </Button>
                <div className="mt-2">
                    <div className="mb-2">
                        <span className="text-base leading-7 text-slate-600 font-semibold font-mono">Contenu</span>
                    </div>
                    <Button variant="ghost" className="flex items-center space-x-2 w-full justify-start p-2 py-6">
                        <LiaUserFriendsSolid size={24} className="text-black mr-2" />
                        <p className="text-base font-semibold leading-7 text-black">Ami(e)s</p>
                    </Button>
                    <Button variant="ghost" className="flex items-center space-x-2 w-full justify-start p-2 py-6">
                        <BsPostcardHeart size={24} className="text-black mr-2" />
                        <p className="text-base font-semibold leading-7 text-black">Fils</p>
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
