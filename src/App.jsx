import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MobileMenu from "./components/Navbar/MobileMenu";
import HeroSection from "./components/Navbar/HeroSection";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <main className="w-screen h-full bg-white relative">
      <Navbar onClick={toggleMenu} openMenu={openMenu} />
      {<MobileMenu openMenu={openMenu} />}
      <HeroSection />
    </main>
  );
}
