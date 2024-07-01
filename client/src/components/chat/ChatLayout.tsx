import React, { useEffect, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { Chat } from "./Chat";
import { Sidebar } from "./SidebarChat";
import { userData } from "./data";



export const ChatLayout: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedUser, setSelectedUser] = useState(userData[0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => setIsMobile(window.innerWidth <= 768);
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);
        return () => window.removeEventListener("resize", checkScreenWidth);
    }, []);

    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel minSize={isMobile ? 0 : 24}>
                <Sidebar
                    isCollapsed={isCollapsed || isMobile}
                    links={userData.map(user => ({
                        name: user.name,
                        messages: user.messages ?? [],
                        avatar: user.avatar,
                        variant: selectedUser.name === user.name ? "grey" : "ghost",
                    }))}
                    isMobile={isMobile}
                />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel minSize={30}>
                <Chat
                    messages={selectedUser.messages}
                    selectedUser={selectedUser}
                    isMobile={isMobile}
                />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};
