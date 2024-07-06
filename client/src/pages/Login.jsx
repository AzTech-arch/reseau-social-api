import LoginForm from "../components/LoginForm"
import NavbarHome from "../components/NavbarHome"

export default function Login() {
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
        <>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
                <NavbarHome />

                <div className="flex flex-col items-center justify-center py-28">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}