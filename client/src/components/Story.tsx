import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "./ui/button";
import { Plus } from 'lucide-react';
import { FC } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "../components/ui/dialog";

import { BsImage } from "react-icons/bs";

interface StoryProps {
    imageSrc: string;
    name: string;
    isCreateStory?: boolean;
}

const Story: FC<StoryProps> = ({ imageSrc, name, isCreateStory }) => {
    const [open, setOpen] = useState(false);

    const toggleDialog = () => {
        setOpen(!open);
    };

    return (
        <div className="relative w-full">
            <img src={imageSrc} alt={name} className="w-full h-full rounded-lg rounded-b-none" />

            {isCreateStory ? (
                <>
                    <Button
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-full p-3 bg-cyan-700"
                        onClick={toggleDialog}
                    >
                        <Plus size={16} className="text-white" />
                    </Button>
                    <Dialog open={open} onOpenChange={toggleDialog}>
                        <DialogContent className="max-w-xl p-4">
                            <DialogHeader className="flex justify-between items-center">
                                <DialogTitle>Créer une story</DialogTitle>
                            </DialogHeader>
                            <div className="flex flex-col space-y-4">
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
                                <Button className="bg-cyan-700 text-white">Publier</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </>
            ) : (
                <div className="absolute top-2 left-2">
                    <Avatar className="border-2 border-cyan-700">
                        <AvatarImage src="" alt="@shadcn" className="shadow" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            )}
            <p className="relative text-sm text-center font-semibold leading-7 mt-2 top-3 text-black">{name}</p>
        </div>
    );
};

export default Story;
