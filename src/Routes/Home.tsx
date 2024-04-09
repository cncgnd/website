import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { Header } from "../components/Header"
import { BackgroundBeams } from "../components/ui/background-beams"
import { Button } from "../components/ui/button"
import { useState } from "react"

export const Home = ()=>{
    const [activeItem, setActiveItem] = useState<string | null>(null);
    return (
    <div className="h-screen w-screen bg-black">
        <BackgroundBeams></BackgroundBeams>
        <Header></Header>
        
        {/* <Menu setActive={setActiveItem}>
        <HoveredLink to="/about">Home</HoveredLink>
        <HoveredLink to="/about">About Us</HoveredLink>
        <HoveredLink to="/about">Community</HoveredLink>
        <HoveredLink to="/about">Events</HoveredLink> */}
      {/* </Menu> */}
      
      
       
    </div>
    )
}