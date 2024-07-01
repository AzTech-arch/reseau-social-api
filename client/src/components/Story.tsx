import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "./ui/button";
import { Plus } from 'lucide-react';




const Story = ({ imageSrc, name, isCreateStory }) => {
    return (
        <div className="relative w-full">
            <img src={imageSrc} alt={name} className="w-full h-full rounded-lg  rounded-b-none" />

            {isCreateStory ? (
                <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-full p-3 bg-cyan-700">
                    <Plus size={16} className="text-white" />
                </Button>
            ) : (
                <div className="absolute top-2 left-2">
                    <Avatar className="border-2 border-cyan-700">
                        <AvatarImage src="" alt="@shadcn" className="shadow" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            )}
            {/* <p className=" relative text-xs text-center mt-2 text-black top-3">{name}</p> */}
            <p className="relative text-sm text-center font-semibold leading-7 mt-2 top-3 text-black">{name}</p>
        </div>
    );
};

export default Story;
