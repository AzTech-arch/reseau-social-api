import { z } from "zod"
import { useState } from "react"
import { Button } from "./ui/button"
import { Toaster, toast } from 'sonner'
import { FcGoogle } from "react-icons/fc"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "../components/ui/input"
import { register } from '../services/authService'
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form"


// Définir le schéma de validation avec Zod
const formSchema = z.object({
    lastname: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
    firstname: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
    email: z.string().email({ message: "Adresse e-mail invalide" }),
    password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 8 caractères" })
})

// Définir les types des données du formulaire
type FormSchemaType = z.infer<typeof formSchema>


export default function RegisterForm() {
    /**
    * ! STATE (état, données) de l'application
    */
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            lastname: "",
            firstname: "",
            email: "",
            password: ""
        }
    })

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleRegister: SubmitHandler<FormSchemaType> = async (data) => {
        // Données à envoyer pour l'inscription
        const dataRegister = {
            lastname: data.lastname,
            firstname: data.firstname,
            email: data.email,
            password: data.password
        }

        try {
            await register(dataRegister)
            // Inscription réussie, afficher le toast et rediriger vers la page de connexion
            toast.success('Inscription réussie, vous allez être redirigé vers la page de connexion');
            setTimeout(() => {
                navigate('/login');
            }, 3000); // Rediriger après 3 secondes

        } catch (error) {
            toast.error('Une erreur est survenue lors de l\'inscription');
        }
    };

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <Toaster />
            <div className="p-8 max-w-lg w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mb-4 font-serif">Créer un compte</h1>
                <p className="mb-4 text-md text-muted-foreground text-black">
                    Faites partie de la communauté FriendZy, où vous pourrez rencontrer et discuter avec de nouveaux amis et partager des intérêts communs !
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                    Vous avez déjà un compte ? Accédez-y en cliquant <Link to="/login" className="underline text-cyan-700">ici</Link>
                </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleRegister)}>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">

                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="lastname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nom</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="ABDILLAH" className="shadow-sm" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="firstname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Prénom</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Cousema Anjary" className="shadow-sm" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Numéro mobile ou e-mail" className="shadow-sm" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-10 gap-2">
                                <div className=" col-span-9">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Mot de passe</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type={showPassword ? "text" : "password"} placeholder="Entrez votre mot de passe" className="shadow-sm" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="gap-2">
                                    <Button type="button" variant="outline" className="mt-8 p-2 shadow-sm" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                    </Button>
                                </div>
                            </div>
                            <Button type="submit" className="w-full bg-cyan-700">S'inscrire</Button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t"></span>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase ">
                                    <span className="bg-background px-2 text-muted-foreground">Ou continuer avec</span>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Button type="button" variant="outline" className="w-full"><FcGoogle size={18} className="mr-1" />Google</Button>
                            </div>
                        </div>
                    </form>
                </Form>

            </div>

        </>
    )
}