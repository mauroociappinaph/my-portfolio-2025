"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importa los íconos de hamburguesa y cierre

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">My Portfolio</Link>

        {/* Ícono de hamburguesa para móviles */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menú de navegación */}
        <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto p-4 md:p-0`}>
          {links.map(link => (
            <Link key={link.href} href={link.href} className="block md:inline-block hover:text-gray-400 py-2 md:py-0">
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
