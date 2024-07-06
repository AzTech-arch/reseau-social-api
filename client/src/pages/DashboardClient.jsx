import { useState } from "react";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SidebarRight from "../components/SidebarRight";
import { StoryCarousel } from "../components/StoryCarousel";
import Post from "../components/Post";


export default function DashboardClient() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div className="relative min-h-screen w-full">
            {/* Background Gradient */}
            <div className="absolute bg-fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <Navbar />

            <div className="flex flex-1 mt-10 h-full overflow-x-hidden">
                {/* Left Sidebar */}
                <div className={`transition-all duration-700 ${isSidebarOpen ? 'mr-20' : 'mr-20'}`}>
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </div>

                {/* Main Content */}
                <main className={`flex-grow  transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                    {/* Contenu principal */}
                    <div className="flex space-x-2 mb-4">
                        <StoryCarousel />
                    </div>
                    <CreatePost />
                    <Post />
                </main>

                {/* Right Sidebar */}
                <div className="flex-shrink-0 w-64 ml-20">
                    <SidebarRight />
                </div>
            </div>
        </div>
    );
}
