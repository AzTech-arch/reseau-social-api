import {  Image, Paperclip, Smile, SendHorizontal } from "lucide-react";

export default function ChatBottomBar() {
    return (
        <div className="flex items-center bg-white p-2  border-gray-300 space-x-2">
           
            <button className="p-2 rounded-full hover:bg-gray-100">
                <Image className="text-gray-500" size={24} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
                <Paperclip className="text-gray-500" size={24} />
            </button>
            <input
                type="text"
                placeholder="Aa"
                className="flex-grow p-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="p-2 rounded-full hover:bg-gray-100">
                <Smile className="text-gray-500" size={24} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
                <SendHorizontal className="text-gray-500" size={24} />
            </button>
        </div>
    );
}
