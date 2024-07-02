import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Phone, Video, Info } from "lucide-react";
import { Button } from "../ui/button";

export default function ChatTopBar() {
    return (
        <header className="p-4 text-gray-100 flex items-center justify-between shadow bg-gray-800">
            <div className="flex items-center">
                <Avatar className="w-10 h-10 rounded-full">
                    <AvatarImage src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                    <h1 className="text-lg font-semibold">Ny Ando Andrianasolo</h1>
                    <p className="text-sm text-green-400">En ligne</p>
                </div>
            </div>
            <div className="flex items-center text-blue-500">
                <Button variant="ghost">
                    <Phone size={20} />
                </Button>
                <Button variant="ghost">
                    <Video size={20} />
                </Button>
                <Button variant="ghost">
                    <Info size={20} />
                </Button>
            </div>
        </header>
    );
}
