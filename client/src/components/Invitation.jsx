import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

const invitations = [
    {
        name: 'Tan Ge',
        friendsInCommon: 14,
        avatar: 'https://via.placeholder.com/150',
    },
    {
        name: 'Rahim Fayasee J-w',
        friendsInCommon: 123,
        avatar: 'https://via.placeholder.com/150',
    },
    {
        name: 'Jacob Rino',
        friendsInCommon: 94,
        avatar: 'https://via.placeholder.com/150',
    },
    {
        name: 'Nirina Armanda Kassamaly',
        friendsInCommon: 89,
        avatar: 'https://via.placeholder.com/150',
    },
    {
        name: 'Koureiche Aly',
        friendsInCommon: 63,
        avatar: 'https://via.placeholder.com/150',
    },
    {
        name: 'Tan Ge',
        friendsInCommon: 14,
        avatar: 'https://via.placeholder.com/150',
    },
    // Ajoutez plus d'invitations ici si nécessaire
];

export default function Invitations() {
    return (
        <div className="text-black p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Invitations</h2>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {invitations.map((invitation, index) => (
                    <Card key={index} className="bg-white shadow-md rounded-lg">
                        <CardHeader>
                            <div className="flex items-center">
                                <Avatar className="w-16 h-16 rounded-full mr-4 shadow">
                                    <AvatarImage src={invitation.avatar} />
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle>{invitation.name}</CardTitle>
                                    <CardDescription>{invitation.friendsInCommon} ami(e)s en commun</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex space-x-2">
                                <Button className="bg-cyan-700 w-full">Confirmer</Button>
                                <Button className="bg-gray-600 w-full">Refuser</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
