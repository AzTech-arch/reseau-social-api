import { useState } from "react";
import useAuth from '../hooks/useAuth'
import { BsImage } from "react-icons/bs";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "../components/ui/dialog";

export default function CreatePost() {
    /**
     * ! STATE (état, données) de l'application
     */
    const { user } = useAuth()

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);



    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const toggleDialog = () => {
        setOpen(!open);
    };

    const handleRemoveFile = () => {
        setFile(null);
    };


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10 shadow">
                    <AvatarImage src="" alt="User Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Input
                    type="text"
                    placeholder={`Quoi de neuf, ${user.first_name} ?`}
                    className="bg-gray-100 rounded-full cursor-pointer"
                    readOnly
                    onClick={toggleDialog}
                />
            </div>

            <Dialog open={open} onOpenChange={toggleDialog}>
                <DialogContent className="max-w-xl p-4">
                    <DialogHeader className="flex justify-between items-center">
                        <DialogTitle>Créer une publication</DialogTitle>
                    </DialogHeader>

                    <div className="flex items-center space-x-4 mb-4">
                        <Avatar className="w-10 h-10 shadow">
                            <AvatarImage src="" alt="User Avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className="font-semibold">Cousema Abdillah</p>
                            <p className="text-sm text-gray-500">Ami(e)s</p>
                        </div>
                    </div>

                    <Textarea
                        placeholder="Quoi de neuf, Cousema ?"
                        className="w-full mb-4"
                        rows={4}
                    />

                    <div className="border rounded-lg p-4 mb-4">
                        {file ? (
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500"></p>
                                <Button variant="ghost" onClick={handleRemoveFile}>

                                </Button>
                            </div>
                        ) : (
                            <label className="flex flex-col items-center justify-center h-32 border-dashed border-2 border-gray-300 rounded-lg cursor-pointer">
                                <input
                                    type="file"
                                    className="hidden"
                                // onChange={handleFileChange}
                                />
                                <BsImage className="text-gray-500 w-10 h-10 mb-2" />
                                <p className="text-gray-500">Ajouter des photos/vidéos</p>
                                <p className="text-gray-500">ou faites glisser-déposer</p>
                            </label>
                        )}
                    </div>

                    <Button className="w-full bg-cyan-700 text-white">Publier</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};
