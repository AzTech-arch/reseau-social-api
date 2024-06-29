import Navbar from "../components/Navbar"
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
            <div className="flex flex-1 pt-16">
                {/* <Sidebar /> */}
                <main className="flex-1 p-10 ml-64 bg-slate-300">
                    <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
                    <div className="flex items-center justify-center h-full">
                        <img src="/mnt/data/image.png" alt="Dashboard Illustration" className="h-64 w-64" />
                    </div>
                </main>
            </div>
        </div>
    )
}