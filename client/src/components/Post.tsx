import { useState } from "react";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { BsHeart, BsChat, BsShare } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MoreHorizontal, Heart, MessageCircle } from "lucide-react";
import { Textarea } from "../components/ui/textarea";

const Post = () => {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };


    return (
        <Card className="mb-4 max-w-full p-4 shadow">
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
                    <Button variant="ghost">
                        <MoreHorizontal className="w-5 h-5 text-black" />
                    </Button>
                </div>
            </div>

            <CardContent className="p-4">
                <p className="text-base text-muted-foreground mb-3">
                    Experience the future of achievement with digital credentialing! As this field skyrockets, the ease of issuing, sharing, and verifying credentials has never been more crucial...
                </p>
                <img src="https://via.placeholder.com/500x300" alt="Post" className="w-full rounded-lg" />
            </CardContent>

            <div className="flex justify-between items-center px-4 mb-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FaHeart className="w-5 h-5 text-cyan-700" />
                    <p>187</p>
                </div>
                <p className="ml-2">1 commentaire</p>
            </div>

            <CardFooter className="flex justify-between items-center border-t pt-3 pb-0">
                <Button variant="ghost" className="flex items-center space-x-2 w-full">
                    <BsHeart className="w-5 h-5" />
                    <p>J'aime</p>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2 w-full" onClick={toggleComments}>
                    <BsChat className="w-5 h-5" />
                    <p>Commenter</p>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2 w-full">
                    <BsShare className="w-5 h-5" />
                    <p>Republier</p>
                </Button>
            </CardFooter>

            {showComments && (
                <div className="border-t mt-2 pt-2">
                    <div className="bg-white p-2 rounded-lg mb-2 shadow">
                        <div className="flex items-center space-x-2">
                            <Avatar className="shadow">
                                <AvatarImage className="w-8 h-8 rounded-full" src="" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>

                            <div className="flex items-center">
                                <span className="font-semibold mr-2">Cousema Anjary</span>
                                <span className="text-gray-500 text-sm">55 min</span>
                            </div>
                        </div>
                        <p className="text-gray-700 ms-12 mb-2">Tu es beau</p>
                        <div className="flex items-center ms-12">
                            <Button variant="ghost" size="sm" className="mr-2">
                                <Heart size={16} className="mr-1" />
                                Like
                            </Button>
                            <p className="text-sm text-gray-500 ml-4">12 likes</p>
                        </div>
                       
                    </div>
                    <div className="flex items-center space-x-4 mb-4 mt-4">
                        <Avatar className="shadow">
                            <AvatarImage src="" alt="Votre Avatar" />
                            <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                        <Textarea
                            placeholder="Écrivez un commentaire..."
                            className="flex-1 bg-gray-200 outline-none"
                            rows={1}
                        />
                        <Button className="bg-cyan-700 text-white">Envoyer</Button>
                    </div>
                </div>
            )}
        </Card>
    );
};

export default Post;
