
"use client";
import { ProjectProps } from "../types/interfaces";

export default function ProjectCard({ title, description, image, github }: ProjectProps) {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href={github} target="_blank" className="mt-3 inline-block text-blue-500 hover:underline">
        GitHub Repo →
      </a>
    </div>
  );
}
