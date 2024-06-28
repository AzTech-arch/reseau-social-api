import { Button } from './ui/button'
import logo from '../assets/images/logo.png'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'
import { House, BadgeAlert, Contact, Settings, User } from 'lucide-react'


export default function NavbarHome() {
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
            <div className="container-fluid bg-white p-4 shadow">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="hidden justify-between lg:flex">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="logo" className="w-24 h-auto object-contain" />

                            <nav>
                                <ul className="flex items-center gap-1">
                                    <li><a href=""><Button variant="ghost"><House size={13} className="mr-1" /> Accueil</Button></a></li>
                                    <li><a href=""><Button variant="ghost"><BadgeAlert size={13} className="mr-1" />A propos</Button></a></li>
                                    <li><a href=""><Button variant="ghost"><Contact size={13} className="mr-1" />Contact</Button> </a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="outline" className="p-2 shadow-sm"><Settings size={18} /></Button>
                                </DropdownMenuTrigger>
                            </DropdownMenu>
                       
                            <Button variant="ghost"><User size={13} className='mr-1' />Connexion</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
