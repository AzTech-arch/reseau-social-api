import Navbar from "../components/Navbar"
import SidebarRight from "../components/SidebarRight"
// import Sidebar from "../components/Sidebar"


export default function DashboardClient() {
    /**
    * ! STATE (état, données) de l'application
    */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 mt-10 h-full">
                {/* <Sidebar /> */}
                <main className=" bg-slate-300 container mx-auto">

                </main>
                <SidebarRight />
            </div>
        </div>
    )
}