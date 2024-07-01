import { MoreHorizontal, SquarePen } from "lucide-react";
import React from "react";
import { Link } from 'react-router-dom';
import { cn } from "../../lib/utils";
import { Avatar, AvatarImage } from "../ui/avatar";
import { buttonVariants } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

interface SidebarProps {
    isCollapsed: boolean;
    isMobile: boolean;
    users: {
        id: number;
        avatar: string;
        name: string;
        messages: { id: number; avatar: string; name: string; message: string }[];
    }[];
    onSelectUser: (user: any) => void;
    selectedUser: any;
}

export const SidebarChat: React.FC<SidebarProps> = ({ isCollapsed,  users, onSelectUser, selectedUser }) => {
    const links = users.map(user => ({
        name: user.name,
        messages: user.messages,
        avatar: user.avatar,
        variant: selectedUser.id === user.id ? "ghost" : "ghost", // Adjust variant as necessary
    }));

    return (
        <div className="relative group flex flex-col h-full gap-4 p-2">
            {!isCollapsed && (
                <div className="flex justify-between p-2 items-center">
                    <div className="flex gap-2 items-center text-2xl">
                        <p className="font-medium">Chats</p>
                        <span className="text-zinc-300">({links.length})</span>
                    </div>
                    <div>
                        <Link to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}>
                            <MoreHorizontal size={20} />
                        </Link>
                        <Link to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}>
                            <SquarePen size={20} />
                        </Link>
                    </div>
                </div>
            )}
            <nav className="grid gap-1 px-2 group-[data-collapsed=true]:justify-center group-[data-collapsed=true]:px-2">
                {links.map((link, index) =>
                    isCollapsed ? (
                        <TooltipProvider key={index}>
                            <Tooltip key={index} delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Link to="#" className={cn(buttonVariants({ variant: link.variant, size: "icon" }), "h-11 w-11 md:h-16 md:w-16")}>
                                        <Avatar className="flex justify-center items-center">
                                            <AvatarImage src={link.avatar} alt={link.avatar} width={6} height={6} className="w-10 h-10" />
                                        </Avatar>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="flex items-center gap-4">
                                    {link.name}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ) : (
                        <Link key={index} to="#" className={cn(buttonVariants({ variant: link.variant }), "justify-start gap-4 h-12")} onClick={() => onSelectUser(users[index])}>
                            <Avatar className="flex justify-center items-center">
                                <AvatarImage src={link.avatar} alt={link.avatar} width={6} height={6} className="w-10 h-10" />
                            </Avatar>
                            <div className="flex flex-col max-w-28">
                                <span>{link.name}</span>
                                {link.messages.length > 0 && (
                                    <span className="text-zinc-300 text-xs truncate">
                                        {link.messages[link.messages.length - 1].name.split(" ")[0]}: {link.messages[link.messages.length - 1].message}
                                    </span>
                                )}
                            </div>
                        </Link>
                    )
                )}
            </nav>
        </div>
    );
};

export default SidebarChat;
