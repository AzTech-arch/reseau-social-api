import { Button } from './ui/button'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import logo from '../assets/images/logo.png'
import { Input } from "./ui/input"
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Tooltip, TooltipTrigger, TooltipProvider } from "../components/ui/tooltip";
import { LogOut, Settings, User, MessageSquareMore, Search, Bell } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"


export default function Navbar() {
    /**
     * ! STATE (état, données) de l'application
     */

    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const [searchTerm, setSearchTerm] = useState('');

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */

    const handleLogout = async () => {
        try {
            await logout()
            // Déconnexion réussie, rediriger vers la page de connexion
            navigate('/login')

        } catch (error) {
            // Afficher le message d'erreur
            console.error('Logout failed:', error)
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchTerm}`);
    }


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <nav className="bg-white p-4 shadow sticky top-0 z-50">
            <div className="container-fluid mx-20    flex justify-between items-center">
                {/* Logo and Search */}
                <div className="flex items-center space-x-4">
                    <Link to="/friendzy">
                        <img src={logo} alt="logo" className="w-24 h-auto object-contain" />
                    </Link>

                    <form onSubmit={handleSearch} className="relative">
                        <Input
                            type="text"
                            placeholder="Rechercher sur Friendzy"
                            className="bg-white text-slate-600 pl-10 pr-4 py-2 shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </form>
                </div>

                {/* Navigation Icons */}
                {/* <div className="flex items-center space-x-6 text-gray-400">
            <Link to="/admin/dashboard" className="text-white px-11 py-3 ">
                <Home size={26} />
            </Link>
            <Link to="/#" className="hover:text-white px-10 py-3 rounded-full hover:bg-white hover:bg-opacity-10">
                <Video size={26} />
            </Link>
            <Link to="/#" className="hover:text-white px-10 py-3 rounded-full hover:bg-white hover:bg-opacity-10">
                <Users size={26} />
            </Link>

        </div> */}
                {/* User Options */}
                <div className="flex items-center space-x-4">

                    <Link to="/friendzy/chat">
                        <Button variant="outline" className="p-2 shadow-sm">
                            <MessageSquareMore size={18} />
                        </Button>
                    </Link>

                    <Link to="#">
                        <Button variant="outline" className="p-2 shadow-sm relative">
                            <Bell size={18} />
                            {/* <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span> */}
                        </Button>
                    </Link>

                    <DropdownMenu>
                        <TooltipProvider disableHoverableContent>
                            <Tooltip delayDuration={100}>

                                <TooltipTrigger asChild>
                                    <DropdownMenuTrigger asChild>

                                        <Button variant="outline" className="relative h-10 w-10 rounded-full">
                                            <Avatar className='h-10 w-10'>
                                                <AvatarImage src={`http://localhost:8000/storage/${user.image}`} alt='avatar' />
                                                <AvatarFallback className='bg-transparent'>CN</AvatarFallback>
                                            </Avatar>
                                        </Button>

                                    </DropdownMenuTrigger>
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>


                        <DropdownMenuContent className="w-56" align='center' forceMount>
                            <DropdownMenuLabel>Salut👋 {user.first_name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <Link to="/friendzy/profil">
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span> Profile</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link to="#">
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Paramètres</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleLogout} >
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Déconnexion</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};
