import { Image, Paperclip, Smile, SendHorizontal } from "lucide-react";
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button";

export default function ChatBottomBar() {
    return (
        <div className="flex items-center bg-white p-2  border-gray-300 space-x-2">


            <Button variant="ghost" size="sm" >
                <Image className="text-gray-500" size={24} />
            </Button>

            <Button variant="ghost" size="sm" >
                <Paperclip className="text-gray-500" size={24} />
            </Button>

            <Textarea
                placeholder="Aa"
                className="shadow "
            />
            <Button variant="ghost" size="sm" >
                <Smile className="text-gray-500" size={24} />
            </Button>

            <Button variant="ghost" size="sm" >
                <SendHorizontal className="text-gray-500" size={24} />
            </Button>
        </div>
    );
}
