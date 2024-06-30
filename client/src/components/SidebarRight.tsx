import { Button } from "./ui/button";

const SidebarRight = () => {
    return (
        <div className="fixed right-0 w-64 h-full bg-white text-gray-200 shadow rounded ">
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-black font">Invitations</h4>
                    <Button variant="ghost" className="text-cyan-700 text-sm">Voir tout</Button>
                </div>

                <div className="mt-4 mb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User" />
                            <div className="ml-2">
                                <p className="text-sm font-medium">Ho Ney</p>
                                <p className="text-xs text-gray-400">20 ami(e)s en commun</p>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400 mb-4">1 j</span>
                    </div>
                    <div className="flex mt-2 space-x-2 ms-12">
                        <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">Confirmer</button>
                        <button className="px-3 py-1 text-sm text-gray-300 bg-gray-700 rounded hover:bg-gray-600">Supprimer</button>
                    </div>
                </div>

                <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-black">Contacts</h4>
                <div className="mt-4 space-y-2 ms-2">
                    {["Ericson Léon Toussaint", "Jacqueline Abdillah", "Koureiche Aly", "Rahim Fayasee J-w"].map((contact, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32" alt="User" />
                            <p className="text-sm">{contact}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarRight;
