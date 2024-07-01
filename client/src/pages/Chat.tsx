import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SidebarRight from "../components/SidebarRight";

export default function Chat() {
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
                  
                </main>

                {/* Right Sidebar */}
                <div className="flex-shrink-0 w-64 ml-20">
                    <SidebarRight />
                </div>
            </div>
        </div>
    )

}