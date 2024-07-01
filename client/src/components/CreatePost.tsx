import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Input } from "../components/ui/input"


const CreatePost = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-4">
                <Avatar>
                    <AvatarImage src="" alt="User Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Input
                    type="text"
                    placeholder={`Quoi de neuf, cousema Anjary ?`}
                    className="bg-gray-100 rounded-full cursor-pointer"
                
                    readOnly
                />
            </div>
        </div>
    );
};

export default CreatePost;
