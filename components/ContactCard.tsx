"use client";
import Image from "next/image";
import { ContactProps } from "../types/interfaces";

export default function ContactCard({ title, description, image, github }: ContactProps) {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <div className="w-full h-40 relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill // Esto hace que la imagen ocupe todo el espacio del contenedor
          className="object-cover" // Aplica estilos para que la imagen cubra el espacio
        />
      </div>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer" // Mejora la seguridad al abrir enlaces externos
        className="mt-3 inline-block text-blue-500 hover:underline"
      >
        GitHub Repo →
      </a>
    </div>
  );
}
