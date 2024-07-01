import { Card, CardHeader, CardContent, CardFooter } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { BsHeart, BsChat, BsShare, BsSend } from "react-icons/bs";

const Post = () => {
  return (
    <Card className="mb-4 max-w-full">
      <CardHeader className="flex items-center space-x-4">
        <Avatar className="w-10 h-10 shadow">
          <AvatarImage src="https://via.placeholder.com/40" alt="Company Logo" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Parchment, An Instructure Company</p>
          <p className="text-xs text-gray-500">8 695 abonnés · 1 j</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">
          Experience the future of achievement with digital credentialing! As this field skyrockets, the ease of issuing, sharing, and verifying credentials has never been more crucial...
        </p>
        <img src="https://via.placeholder.com/500x300" alt="Post" className="w-full rounded-lg mb-2" />
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <img src="https://via.placeholder.com/20" alt="Like" className="w-5 h-5" />
          <img src="https://via.placeholder.com/20" alt="Heart" className="w-5 h-5" />
          <p>187</p>
          <p className="ml-2">· 1 commentaire · 3 republications</p>
        </div>
      </CardFooter>
      <CardFooter className="flex justify-around items-center border-t pt-2">
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
    