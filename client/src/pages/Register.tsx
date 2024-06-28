import NavbarHome from "../components/NavbarHome"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
                <NavbarHome />
                <div className="flex flex-col items-center justify-center py-36">
                    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                        <h1 className="text-3xl font-bold mb-4">Créer un compte</h1>
                        <p className="mb-4 text-gray-600">
                            Faites partie de la communauté FriendZy, où vous pourrez rencontrer et discuter avec de nouveaux amis et partager des intérêts communs !
                        </p>
                        <p className="mb-4 text-gray-600">
                            Vous avez déjà un compte ? <a href="#" className="text-blue-600">Accédez-y en cliquant ici</a>
                        </p>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Nom d’utilisateur
                                </label>
                                <input id="username" type="text" placeholder="JohnDoe" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    E-mail
                                </label>
                                <input id="email" type="email" placeholder="email@domaine.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4 relative">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Mot de passe
                                </label>
                                <input id="password" type={showPassword ? "text" : "password"} placeholder="********" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <button type="button" className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Soumettre
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
