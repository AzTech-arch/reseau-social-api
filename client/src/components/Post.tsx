import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { BsHeart, BsChat, BsShare, BsSend } from "react-icons/bs";
import { MoreHorizontal } from "lucide-react";

const Post = () => {
    return (
        <Card className="mb-4 max-w-full p-4">
            <div className="flex items-start justify-between p-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-10 h-10 shadow">
                        <AvatarImage src="" alt="Company Logo" />
                        <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <p className="text-sm font-semibold">Cousema Anjary</p>
                        <p className="text-xs text-gray-500">4 h · <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg></span></p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
            </div>

            <CardContent className="p-4">
                <p className="text-sm mb-2">
                    Experience the future of achievement with digital credentialing! As this field skyrockets, the ease of issuing, sharing, and verifying credentials has never been more crucial...
                </p>
                <img src="https://via.placeholder.com/500x300" alt="Post" className="w-full rounded-lg mb-2" />
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t p-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <img src="https://via.placeholder.com/20" alt="Like" className="w-5 h-5" />
                    <img src="https://via.placeholder.com/20" alt="Heart" className="w-5 h-5" />
                    <p>187</p>
                    <p className="ml-2">· 1 commentaire · 3 republications</p>
                </div>
            </CardFooter>
            <CardFooter className="flex justify-around items-center border-t pt-2 p-4">
                <Button variant="ghost" className="flex items-center space-x-2">
                    <BsHeart className="w-5 h-5" />
                    <p>J'aime</p>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2">
                    <BsChat className="w-5 h-5" />
                    <p>Commenter</p>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2">
                    <BsShare className="w-5 h-5" />
                    <p>Republier</p>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2">
                    <BsSend className="w-5 h-5" />
                    <p>Envoyer</p>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Post;
