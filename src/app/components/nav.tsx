"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="z-10 flex justify-between items-center p-6 shadow-md fixed bg-white w-full">
      <h1 className="text-2xl font-bold flex">
        RoadMap <p className="text-blue-400">{" { "}</p> TI <p className="text-blue-400">{" } "}</p>
      </h1>

      {/* Ícone de hambúrguer */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? "✖" : "☰"} {/* Ícone de hambúrguer ou "X" */}
        </button>
      </div>

      {/* Links */}
      <div className={`md:flex space-x-6 ${isMenuOpen ? "flex-col absolute top-full left-0 bg-white w-full shadow-lg p-6" : "hidden"} md:block`}>
        <Link href="/" className={`hover:text-gray-500 ${pathname === "/" ? "border-b-3 rounded-md border-blue-600" : ""}`}>Inicio</Link>
        <Link href="/about" className={`hover:text-gray-500 ${pathname === "/about" ? "border-b-3 rounded-md border-blue-600" : ""}`}>Sobre</Link>
        <Link href="/tips" className={`hover:text-gray-500 ${pathname === "/tips" ? "border-b-3 rounded-md border-blue-600" : ""}`}>Dicas</Link>
        <Link href="/user" className={`hover:text-gray-500 ${pathname === "/know" ? "border-b-3 rounded-md border-blue-600" : ""}`}>Usuario</Link>
      </div>
    </nav>
  );
}