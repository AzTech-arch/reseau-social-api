import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ChatContactList() {
    const contacts = [
        { name: 'Alice', message: 'Hoorayy!!', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
        { name: 'Martin', message: 'That pizza place was amazing! We should go again sometime. 🍕', avatar: 'https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
        { name: 'Charlie', message: 'Hey, do you have any recommendations for a good movie to watch?', avatar: 'https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },
        // Add more contacts here...
    ];

    return (
        <>
            {contacts.map((contact, index) => (
                <div key={index} className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md  overflow-hidden">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                        <Avatar className="w-12 h-12 rounded-full">
                            <AvatarImage src={contact.avatar} alt={`${contact.name} Avatar`} />
                            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold">{contact.name}</h2>
                        <p className="text-gray-600">{contact.message}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
