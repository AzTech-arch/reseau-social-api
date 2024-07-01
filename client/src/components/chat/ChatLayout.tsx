import React, { useEffect, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { cn } from "../../lib/utils";
import SidebarChat from "./SidebarChat";
import Chat from "./Chat";

interface ChatLayoutProps {
    defaultLayout?: number[];
    defaultCollapsed?: boolean;
    navCollapsedSize?: number;
}

const userData = [
    {
        id: 1,
        avatar: '/User1.png',
        name: 'Jane Doe',
        messages: [
            { id: 1, avatar: '/User1.png', name: 'Jane Doe', message: 'Hey, how are you?' },
            { id: 2, avatar: '/LoggedInUser.jpg', name: 'You', message: 'I am good, thanks!' },
            { id: 3, avatar: '/User1.png', name: 'Jane Doe', message: 'That is great!' },
        ],
    },
    {
        id: 2,
        avatar: '/User2.png',
        name: 'John Doe',
        messages: [],
    },
    {
        id: 3,
        avatar: '/User3.png',
        name: 'Elizabeth Smith',
        messages: [],
    },
    {
        id: 4,
        avatar: '/User4.png',
        name: 'John Smith',
        messages: [],
    }
];

export const ChatLayout: React.FC<ChatLayoutProps> = ({
    defaultLayout = [320, 480],
    defaultCollapsed = false,
    navCollapsedSize = 8,
}) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
    const [selectedUser, setSelectedUser] = useState(userData[0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);

        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);

    return (
        <ResizablePanelGroup
            direction="horizontal"
            onLayout={(sizes: number[]) => {
                document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
            }}
            className="h-full items-stretch"
        >
            <ResizablePanel
                defaultSize={defaultLayout[0]}
                collapsedSize={navCollapsedSize}
                collapsible={true}
                minSize={isMobile ? 0 : 24}
                maxSize={isMobile ? 8 : 30}
                onCollapse={() => {
                    setIsCollapsed(true);
                    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`;
                }}
                onExpand={() => {
                    setIsCollapsed(false);
                    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`;
                }}
                className={cn(
                    isCollapsed && "min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out"
                )}
            >
                <SidebarChat
                    isCollapsed={isCollapsed || isMobile}
                    isMobile={isMobile}
                    users={userData}
                    onSelectUser={setSelectedUser}
                    selectedUser={selectedUser}
                />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                <Chat
                    messages={selectedUser.messages}
                    selectedUser={selectedUser}
                    isMobile={isMobile}
                />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default ChatLayout;
