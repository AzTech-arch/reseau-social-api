import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Invitation from "../components/Invitation";

export default function InvitationClient() {

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
                <main className={`flex-grow  transition-all duration-300 mr-20 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                    {/* Contenu principal */}
                   <Invitation />
                </main>
            </div>
        </div>
    );
}