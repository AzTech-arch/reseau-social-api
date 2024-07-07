import { useState } from 'react';
import { Button } from './ui/button';
import useAuth from '../hooks/useAuth';
import logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Tooltip, TooltipTrigger, TooltipProvider } from '../components/ui/tooltip';
import { LogOut, Settings, User, MessageSquareMore, Bell, Search } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Command, CommandInput, CommandList, CommandItem, CommandGroup, CommandEmpty } from './ui/command';
import { searchUsers } from '../services/userService';

export default function Navbar() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleSearch = async (query) => {
        setSearchTerm(query);
        if (query.length > 2) {
            const response = await searchUsers(query);
            setSearchResults(response.data);
        } else {
            setSearchResults([]);
        }
    };

    const handleSelect = (userId) => {
        navigate(`/profile/${userId}`);
        setSearchTerm('');
        setSearchResults([]);
    };

    return (
        <nav className="bg-white p-4 shadow sticky top-0 z-50">
            <div className="container-fluid mx-20 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Link to="/friendzy">
                        <img src={logo} alt="logo" className="w-24 h-auto object-contain" />
                    </Link>
                    <Command className="relative rounded-lg border shadow-md">
                        <CommandInput
                            placeholder="Rechercher sur Friendzy"
                            className="bg-white text-slate-600 pl-10 pr-4 py-2 shadow-sm"
                            value={searchTerm}
                            onValueChange={handleSearch}
                        />
                        <CommandList className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
                            <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
                            <CommandGroup heading="Résultats">
                                {searchResults.map((user) => (
                                    <CommandItem key={user.id} onSelect={() => handleSelect(user.id)}>
                                        <Avatar className="w-8 h-8 mr-2">
                                            <AvatarImage src={`http://localhost:8000/storage/${user.image}`} />
                                            <AvatarFallback>{user.first_name[0]}{user.last_name[0]}</AvatarFallback>
                                        </Avatar>
                                        <span>{user.first_name} {user.last_name}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/friendzy/chat">
                        <Button variant="outline" className="p-2 shadow-sm">
                            <MessageSquareMore size={18} />
                        </Button>
                    </Link>
                    <Link to="#">
                        <Button variant="outline" className="p-2 shadow-sm relative">
                            <Bell size={18} />
                        </Button>
                    </Link>
                    <DropdownMenu>
                        <TooltipProvider disableHoverableContent>
                            <Tooltip delayDuration={100}>
                                <TooltipTrigger asChild>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="relative h-10 w-10 rounded-full">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={`http://localhost:8000/storage/${user.image}`} alt="avatar" />
                                                <AvatarFallback className="bg-transparent">CN</AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>
                        <DropdownMenuContent className="w-56" align="center" forceMount>
                            <DropdownMenuLabel>Salut👋 {user.first_name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <Link to="/friendzy/profil">
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
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
                            <DropdownMenuItem onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Déconnexion</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
