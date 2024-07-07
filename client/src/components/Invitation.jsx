import React, { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { acceptFriendRequest, rejectFriendRequest } from '../services/friendService';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import useAuth from '../hooks/useAuth'; // Assurez-vous que vous avez un hook useAuth pour obtenir l'utilisateur actuel

const Invitations = () => {
    const { user } = useAuth(); // Récupérez l'utilisateur actuel
    const [invitations, setInvitations] = useState([]);

    useEffect(() => {
        window.Pusher = Pusher;

        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: import.meta.env.VITE_PUSHER_APP_KEY,
            cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
            encrypted: true
        });

        const channel = window.Echo.private(`friend-request.${user.id}`);

        channel.listen('FriendRequestSent', (e) => {
            setInvitations([...invitations, e.friendRequest]);
        });

        return () => {
            channel.stopListening('FriendRequestSent');
            window.Echo.leaveChannel(`friend-request.${user.id}`);
        };
    }, [invitations, user.id]);

    const handleAccept = async (id) => {
        await acceptFriendRequest(id);
        setInvitations(invitations.filter(inv => inv.id !== id));
    };

    const handleReject = async (id) => {
        await rejectFriendRequest(id);
        setInvitations(invitations.filter(inv => inv.id !== id));
    };

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
                                <Button className="bg-cyan-700 w-full" onClick={() => handleAccept(invitation.id)}>Confirmer</Button>
                                <Button className="bg-gray-600 w-full" onClick={() => handleReject(invitation.id)}>Refuser</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Invitations;
