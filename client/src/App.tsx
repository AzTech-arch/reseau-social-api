import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import DashboardClient from "./pages/DashboardClient"
import ChatClient from "./pages/ChatClient"
import Profil from "./pages/Profil"
import InvitationClient from "./pages/InvitationClient"

export default function App() {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friendzy" element={<DashboardClient />} />
        <Route path="/friendzy/chat" element={<ChatClient />} />
        <Route path="/friendzy/profil" element={<Profil />} />
        <Route path="/friendzy/invitation" element={<InvitationClient />} />
      </Routes>
    </>
  )
}