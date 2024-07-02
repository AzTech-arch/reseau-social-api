import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Camera, Pencil, MoreHorizontal, Search } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "../components/ui/card";

import { BsHeart, BsChat, BsShare } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Heart } from "lucide-react";
import { Textarea } from "../components/ui/textarea";

const contacts = [
    { name: 'Rahim Fayasee J-w', friendsInCommon: 123, avatar: 'https://via.placeholder.com/150' },
    { name: 'Jacob Rino', friendsInCommon: 94, avatar: 'https://via.placeholder.com/150' },
    { name: 'Tsiahouta Feno Dario Dasylva', friendsInCommon: 72, avatar: 'https://via.placeholder.com/150' },
    { name: 'Nirina Armanda Kassamaly', friendsInCommon: 89, avatar: 'https://via.placeholder.com/150' },
    { name: 'Dylan', friendsInCommon: 75, avatar: 'https://via.placeholder.com/150' },
    { name: 'Koureiche Aly', friendsInCommon: 63, avatar: 'https://via.placeholder.com/150' },
    { name: 'Koureiche Aly', friendsInCommon: 63, avatar: 'https://via.placeholder.com/150' },
    { name: 'Koureiche Aly', friendsInCommon: 63, avatar: 'https://via.placeholder.com/150' },
    { name: 'Koureiche Aly', friendsInCommon: 63, avatar: 'https://via.placeholder.com/150' },
    // Ajoutez plus de contacts ici
];



export default function Profil() {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <>
            <div className="relative min-h-screen w-full ">
                <div className="absolute bg-fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <Navbar />
                <div className="h-full">
                    <div className="relative h-80 bg-cover bg-center cursor-pointer" style={{ backgroundImage: `url('${`https://via.placeholder.com/500x300`}')` }} >
                        <Button className="absolute bottom-4 right-4 bg-cyan-700" >Changer la photo de couverture</Button>
                        <input type="file" style={{ display: 'none' }} />
                    </div>
                    <div className="container mx-auto px-4 py-2">
                        <div className="flex items-center">
                            <div className="relative w-32 h-32 -mt-16 border-4 border-white rounded-full cursor-pointer" >
                                <Avatar className="w-32 h-32 -mt-1 border-4 border-white rounded-full">
                                    <AvatarImage src="" alt="User" className="w-full h-full rounded-full" />
                                    <AvatarFallback>CA</AvatarFallback>
                                </Avatar>
                                <button className="absolute bottom-0 right-0 bg-blue-700 rounded-full p-1.5 text-white hover:bg-blue-600"  >
                                    <Camera size={16} />
                                </button>

                                <input type="file" style={{ display: 'none' }} />
                            </div>

                            <div className="ml-4">
                                <h1 className="text-2xl font-bold">Cousema Anjary</h1>
                                <p className="text-gray-600">402 ami(e)s</p>
                            </div>
                            <div className="ml-auto flex space-x-2">
                                <Button variant="outline"  >
                                    <Pencil className="mr-2 h-4 w-4" /> Modifier le profil
                                </Button>
                            </div>
                        </div>
                        <Tabs defaultValue="Mes publications" className="mt-6">
                            <TabsList className="flex space-x-4  ">
                                <TabsTrigger value="Mes publications" className="py-2 px-4">Mes publications</TabsTrigger>
                                <TabsTrigger value="amies" className="py-2 px-4">Ami(e)s</TabsTrigger>
                                <TabsTrigger value="photos" className="py-2 px-4">Photos</TabsTrigger>
                                <TabsTrigger value="videos" className="py-2 px-4">Vidéos</TabsTrigger>
                            </TabsList>
                            <TabsContent value="Mes publications" className="ml-52 mr-52">
                                <Card className="mb-4 max-w-full p-4 shadow">
                                    <div className="flex items-start justify-between p-4">

                                        <div className="flex items-center space-x-4">
                                            <Avatar className="w-10 h-10 shadow">
                                                <AvatarImage src="" alt="Company Logo" />
                                                <AvatarFallback>JP</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <p className="text-sm font-semibold">Cousema Anjary</p>
                                                <p className="text-xs text-gray-500">4 h · <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg></span></p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Button variant="ghost">
                                                <MoreHorizontal className="w-5 h-5 text-black" />
                                            </Button>
                                        </div>
                                    </div>

                                    <CardContent className="p-4">
                                        <p className="text-base text-muted-foreground mb-3">
                                            Experience the future of achievement with digital credentialing! As this field skyrockets, the ease of issuing, sharing, and verifying credentials has never been more crucial...
                                        </p>
                                        <img src="https://via.placeholder.com/500x300" alt="Post" className="w-full rounded-lg" />
                                    </CardContent>

                                    <div className="flex justify-between items-center px-4 mb-2">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <FaHeart className="w-5 h-5 text-cyan-700" />
                                            <p>187</p>
                                        </div>
                                        <p className="ml-2">1 commentaire</p>
                                    </div>

                                    <CardFooter className="flex justify-between items-center border-t pt-3 pb-0">
                                        <Button variant="ghost" className="flex items-center space-x-2 w-full">
                                            <BsHeart className="w-5 h-5" />
                                            <p>J'aime</p>
                                        </Button>
                                        <Button variant="ghost" className="flex items-center space-x-2 w-full" onClick={toggleComments}>
                                            <BsChat className="w-5 h-5" />
                                            <p>Commenter</p>
                                        </Button>
                                        <Button variant="ghost" className="flex items-center space-x-2 w-full">
                                            <BsShare className="w-5 h-5" />
                                            <p>Republier</p>
                                        </Button>
                                    </CardFooter>

                                    {showComments && (
                                        <div className="border-t mt-2 pt-2">
                                            <div className="bg-white p-2 rounded-lg mb-2 shadow">
                                                <div className="flex items-center space-x-2">
                                                    <Avatar className="shadow">
                                                        <AvatarImage className="w-8 h-8 rounded-full" src="" />
                                                        <AvatarFallback>UA</AvatarFallback>
                                                    </Avatar>

                                                    <div className="flex items-center">
                                                        <span className="text-sm font-semibold leading-7 text-black mr-2">Cousema Anjary</span>
                                                        <span className="text-gray-500 text-sm">55 min</span>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 ms-12 mb-2">Tu es beau</p>
                                                <div className="flex items-center ms-12">
                                                    <Button variant="ghost" size="sm" className="mr-2">
                                                        <Heart size={16} className="mr-1" />
                                                        Like
                                                    </Button>
                                                    <p className="text-sm text-gray-500 ml-4">12 likes</p>
                                                </div>

                                            </div>
                                            <div className="flex items-center space-x-4 mb-4 mt-4">
                                                <Avatar className="shadow">
                                                    <AvatarImage src="" alt="Votre Avatar" />
                                                    <AvatarFallback>AV</AvatarFallback>
                                                </Avatar>
                                                <Textarea
                                                    placeholder="Écrivez un commentaire..."
                                                    className="flex-1 bg-gray-200 outline-none"
                                                    rows={1}
                                                />
                                                <Button className="bg-cyan-700 text-white">Envoyer</Button>
                                            </div>
                                        </div>
                                    )}
                                </Card>
                            </TabsContent>
                            <TabsContent value="amies">
                                <div className="mt-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex space-x-4">
                                            <Button variant="secondary">Tous les amis</Button>
                                            <Button variant="ghost">Ajouts récents</Button>
                                        </div>
                                        <div className="relative">
                                            <Input type="text" placeholder="Rechercher Ami(e)s" className=" bg-white text-slate-600 pl-10 pr-4 py-2 shadow-sm " />
                                            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {contacts.map((contact, index) => (
                                            <div key={index} className="flex items-center bg-white text-black p-4 rounded-lg shadow">
                                                <Avatar className="w-16 h-16 rounded-full mr-4 shadow">
                                                    <AvatarImage src="" />
                                                    <AvatarFallback>AV</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1">
                                                    <h2 className="text-lg font-semibold">{contact.name}</h2>
                                                    <p className="text-gray-400">{contact.friendsInCommon} ami(e)s en commun</p>
                                                </div>
                                                <Button variant="ghost">
                                                    <MoreHorizontal className="text-black" size={24} />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="photos">
                                <div>Contenu des photos</div>
                            </TabsContent>
                            <TabsContent value="videos">
                                <div>Contenu des vidéos</div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
}
