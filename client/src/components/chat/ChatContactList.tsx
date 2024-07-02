import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function ChatContactList() {
    const contacts = [
        { name: 'Cousema Anjary', message: 'Hoorayy!!', avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato' },







        // Add more contacts here...
    ];

    return (
        <>
            {contacts.map((contact, index) => (
                <div key={index} className="flex items-center p-2">
                    <Button variant="secondary" className=" flex items-center space-x-2 w-full justify-start p-2 py-7   ">
                        <Avatar className="shadow">
                            <AvatarImage src={contact.avatar} alt={`${contact.name} Avatar`} />
                            <AvatarFallback>CA</AvatarFallback>
                        </Avatar>
                        <h4 className="scroll-m-20 text-lg font-medium tracking-tight text-slate-700 leading-7 ">{contact.name}</h4>
                    </Button>
                </div>
            ))}
        </>
    );
}
