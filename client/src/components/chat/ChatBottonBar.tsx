import { Image, Paperclip, SendHorizontal } from "lucide-react";
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button";
import { EmojiPicker } from "../EmojiPicker";
import { useState } from "react";

export default function ChatBottomBar() {
    const [message, setMessage] = useState<string>("");

    const handleEmojiSelect = (emoji: { native: string }) => {
        setMessage(prevMessage => prevMessage + emoji.native);
    };

    return (
        <div className="flex items-center bg-white  border-gray-300 space-x-2">
            <Button variant="ghost" size="sm" >
                <Image className="text-gray-500" size={24} />
            </Button>

            <Button variant="ghost" size="sm" >
                <Paperclip className="text-gray-500" size={24} />
            </Button>

            <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Aa"
                className="flex-grow shadow"
            />

            <EmojiPicker onChange={handleEmojiSelect} />

            <Button variant="ghost" size="sm" >
                <SendHorizontal className="text-gray-500" size={24} />
            </Button>
        </div>
    );
}
