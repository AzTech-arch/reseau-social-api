import ChatLayout from "../components/chat/ChatLayout";
import Navbar from "../components/Navbar";
import SidebarRight from "../components/SidebarRight";


export default function Chat() {

    return (
        <div className="relative max-h-full min-h-screen w-full">
        <div className="absolute bg-fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <Navbar />
        <div className="flex flex-1 mt-10 h-full overflow-hidden">
            <main className="flex-grow transition-all duration-300 ml-20">
                <ChatLayout />
            </main>
            <div className="flex-shrink-0 w-64 ml-20">
                <SidebarRight />
            </div>
        </div>
    </div>
    )

}