"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
