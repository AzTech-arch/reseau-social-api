import { Info, Phone, Video } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Avatar, AvatarImage } from '../ui/avatar';
import { buttonVariants } from '../ui/button';
import { UserData } from './data';

interface ChatTopbarProps {
  selectedUser: UserData;
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];

const ChatTopbar: React.FC<ChatTopbarProps> = ({ selectedUser }) => {
  return (
    <div className="w-full h-20 flex p-4 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} width={6} height={6} className="w-10 h-10" />
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{selectedUser.name}</span>
          <span className="text-xs">Active 2 mins ago</span>
        </div>
      </div>
      <div>
        {TopbarIcons.map((icon, index) => (
          <Link key={index} to="#" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}>
            <icon.icon size={20} className="text-muted-foreground" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatTopbar;
