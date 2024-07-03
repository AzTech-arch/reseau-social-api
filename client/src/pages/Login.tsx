import { useEffect } from "react"
import { Toaster, toast } from "sonner"
import LoginForm from "../components/LoginForm"
import NavbarHome from "../components/NavbarHome"

export default function Login() {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    useEffect(() => {
        // Vérifier si l'inscription a réussi
        const registerSuccess = localStorage.getItem('registerSuccess')

        if (registerSuccess === 'true') {
            // Afficher le toast de succès
            toast.success('Inscription réussie, vous pouvez maintenant vous connecter.')
            // Supprimer la clé 'registerSuccess' du localStorage
            localStorage.removeItem('registerSuccess')
        }
    }, [])


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <Toaster richColors />
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