'use client';


import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../components/ui/popover"
import { Smile } from "lucide-react";
import Picker from '@emoji-mart/react';
import data from "@emoji-mart/data"

interface EmojiPickerProps {
    onChange: (value: { native: string }) => void;
}

export const EmojiPicker = ({
    onChange
}: EmojiPickerProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <Smile className="text-gray-500" size={24} />
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <Picker
                    emojiSize={18}
                    theme="light"
                    data={data}
                    maxFrequentRows={1}
                    onEmojiSelect={(emoji: any) => onChange(emoji)}
                />
            </PopoverContent>
        </Popover>
    )
}
