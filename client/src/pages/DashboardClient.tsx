import Navbar from "../components/Navbar"
import SidebarRight from "../components/SidebarRight"
 import Sidebar from "../components/Sidebar"


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
        // <div className="bg-gray-200 min-h-screen flex flex-col">
        //     <Navbar />
        //     <div className="flex flex-1 mt-10 h-full">
        //         {/* <div className="flex-shrink-0 w-64 mr-4">
        //             <Sidebar />
        //         </div> */}

        //         <main className="flex-grow bg-slate-300 mx-4">
        //             {/* Contenu principal */}
        //         </main>

        //         <div className="flex-shrink-0 w-64 ml-4">
        //             <SidebarRight />
        //         </div>
        //     </div>
        // </div>

        <div className="relative min-h-screen w-full ">
           <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,160,255,0.08)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <Navbar />
            <div className="flex flex-1 mt-10 h-full">
                 <div className="flex-shrink-0 w-64 mr-4">
                    <Sidebar />
                </div> 

                <main className="flex-grow bg-slate-300 mx-4">
                    {/* Contenu principal */}
                    c
                </main>

                <div className="flex-shrink-0 w-64 ml-4">
                    <SidebarRight />
                </div>
            </div>
        </div>
    )
}