import { Button } from './ui/button'
import logo from '../assets/images/logo.png'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
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
        <div className="relative z-10 w-full bg-white p-4 shadow">
        <div className="mx-auto w-full max-w-6xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-24 h-auto object-contain" />
                    <nav>
                        <ul className="flex items-center gap-1">
                            <li>
                                <a href="">
                                    <Button variant="ghost" className="flex items-center gap-1">
                                        <House size={18} className="mr-1" /> Accueil
                                    </Button>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Button variant="ghost" className="flex items-center gap-1">
                                        <BadgeAlert size={18} className="mr-1" /> A propos
                                    </Button>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Button variant="ghost" className="flex items-center gap-1">
                                        <Contact size={18} className="mr-1" /> Contact
                                    </Button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="p-2 shadow-sm">
                                <Settings size={18} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="z-50">
                            <DropdownMenuLabel>Theme</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Light</DropdownMenuItem>
                                <DropdownMenuItem>Dark</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <a href="">
                        <Button variant="ghost" className="flex items-center gap-1">
                            <User size={18} className="mr-1" /> Connexion
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}
