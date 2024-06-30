import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"





const SidebarRight = () => {
    return (
        <div className="fixed right-0 w-64 h-full bg-white text-gray-200 shadow rounded ">
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-black leading-7">Invitations</h4>
                    <Button variant="ghost" className="text-cyan-700 text-sm">Voir tout</Button>
                </div>

                <div className="mt-4 mb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Avatar className="w-10 h-10 shadow">
                                <AvatarImage src="" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="leading-7 ml-2 text-black">
                                <p className="text-sm font-medium">Ho Ney</p>
                                <p className="text-xs text-muted-foreground">20 ami(e)s en commun</p>
                            </div>
                        </div>
                        <span className="text-xs text-muted-foreground mb-5">1 j</span>
                    </div>
                    <div className="flex mt-2 space-x-2 ms-10">
                        <Button className="bg-cyan-700 font-normal text-sm py-1">Confirmer</Button>
                        <Button variant="outline" className="text-black font-normal text-sm">Refuser</Button>
                    </div>
                </div>

                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-black leading-7">Contacts</h4>
                <div className="mt-4 space-y-2">
                    {["Ericson Léon Toussaint", "Jacqueline Abdillah", "Koureiche Aly", "Rahim Fayasee J-w"].map((contact, index) => (
                        <Button key={index} variant="ghost" className="flex items-center space-x-2 w-full justify-start p-2 py-6">
                            <Avatar className="w-8 h-8 shadow">
                                <AvatarImage src="" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p className="text-sm font-medium leading-7 text-black">{contact}</p>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarRight;
