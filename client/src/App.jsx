import { Button } from "@/components/ui/button"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"

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
    <Routes>
      {/* Public Routes */}

      <Route path="/" element={<Home />} />
  
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}

      

    </Routes>
  )
}