"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap, Users } from "lucide-react"


export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Frontend", description: "JavaScript, React, Next.js, TypeScript, Redux, Zustand & Tailwind" },
    { icon: <Server className="w-8 h-8 text-green-500" />, title: "Backend", description: "Node.js, Express & Parse Server" },
    { icon: <Database className="w-8 h-8 text-purple-500" />, title: "Database", description: "MongoDB, Mongoose & Prisma" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Performance", description: " Optimization & Caching Strategies" },
    { icon: <Users className="w-8 h-8 text-red-500" />, title: "Soft Skills", description: "Resolución de problemas, comunicación, trabajo en equipo y adaptabilidad" },
  ]

  return (
    <section
      id="about"
      className="py-20 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
            Sobre mí
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
             Me especializo en frameworks modernos como Next.js y herramientas de gestión de estado como Redux. Me enfoco en escribir código limpio y eficiente, manteniéndome actualizado con las últimas tendencias de la industria para ofrecer soluciones innovadoras a mis clientes.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}

