import { AnimatePresence, motion } from "framer-motion";
import { FileImage, Mic, Paperclip, PlusCircle, SendHorizontal, ThumbsUp } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";
import { EmojiPicker } from "./EmojiPicker";
import { Message, loggedInUserData } from "./data";

interface ChatBottombarProps {
  sendMessage: (newMessage: Message) => void;
  isMobile: boolean;
}

const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];

const ChatBottombar: React.FC<ChatBottombarProps> = ({ sendMessage, isMobile }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleThumbsUp = () => {
    const newMessage: Message = {
      id: message.length + 1,
      name: loggedInUserData.name,
      avatar: loggedInUserData.avatar,
      message: "👍",
    };
    sendMessage(newMessage);
    setMessage("");
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: message.length + 1,
        name: loggedInUserData.name,
        avatar: loggedInUserData.avatar,
        message: message.trim(),
      };
      sendMessage(newMessage);
      setMessage("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setMessage((prev) => prev + "\n");
    }
  };

  return (
    <div className="p-2 flex justify-between w-full items-center gap-2">
      <div className="flex">
        <Popover>
          <PopoverTrigger asChild>
            <Link to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}>
              <PlusCircle size={20} className="text-muted-foreground" />
            </Link>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-full p-2">
            {message.trim() || isMobile ? (
              <div className="flex gap-2">
                <Link to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}>
                  <Mic size={20} className="text-muted-foreground" />
                </Link>
                {BottombarIcons.map((icon, index) => (
                  <Link key={index} to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}>
                    <icon.icon size={20} className="text-muted-foreground" />
                  </Link>
                ))}
              </div>
            ) : (
              <Link to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}>
                <Mic size={20} className="text-muted-foreground" />
              </Link>
            )}
          </PopoverContent>
        </Popover>
        {!message.trim() && !isMobile && (
          <div className="flex">
            {BottombarIcons.map((icon, index) => (
              <Link key={index} to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}>
                <icon.icon size={20} className="text-muted-foreground" />
              </Link>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key="input"
          className="w-full relative"
          layout
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ opacity: { duration: 0.05 }, layout: { type: "spring", bounce: 0.15 } }}
        >
          <Textarea
            autoComplete="off"
            value={message}
            ref={inputRef}
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            name="message"
            placeholder="Aa"
            className=" w-full border rounded-full flex items-center h-9 resize-none overflow-hidden bg-background"
          ></Textarea>
          <div className="absolute right-2 bottom-0.5">
            <EmojiPicker onChange={(value) => setMessage(message + value)} />
          </div>
        </motion.div>

        {message.trim() ? (
          <Link to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9 shrink-0")} onClick={handleSend}>
            <SendHorizontal size={20} className="text-muted-foreground" />
          </Link>
        ) : (
          <Link to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9 shrink-0")} onClick={handleThumbsUp}>
            <ThumbsUp size={20} className="text-muted-foreground" />
          </Link>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBottombar;
