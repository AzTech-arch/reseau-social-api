import { useState } from "react";
import Navbar from "../components/Navbar";
import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";

export default function DashboardClient() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative min-h-screen w-full">
            {/* Background Gradient */}
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,160,255,0.08)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

            {/* Navbar */}
            <Navbar />

            <div className="flex flex-1 mt-10 h-full">
                {/* Left Sidebar */}
                <div className={`transition-all duration-700 ${isSidebarOpen ? 'mr-10' : 'mr-10'}`}>
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </div>

                {/* Main Content */}
                <main className={`flex-grow bg-slate-300 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} p-3`}>
                    {/* Contenu principal */}
                </main>

                {/* Right Sidebar */}
                <div className="flex-shrink-0 w-64 ml-10">
                    <SidebarRight />
                </div>
            </div>
        </div>
    );
}
