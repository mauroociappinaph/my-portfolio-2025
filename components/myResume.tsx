"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experienceData, educationData } from "@/lib/resumeData";

// Animaciones reutilizables
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const hoverEffect = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
};

export default function MyResume() {
  return (
    <div id="resume" className="relative z-10">
      {/* Sección de Experiencia */}
      <motion.section
        className="max-w-2xl md:max-w-4xl mx-auto py-20 px-6 lg:px-8 space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={stagger}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10 text-gray-900 dark:text-gray-100"
          variants={fadeInUp}
        >
          Experiencia
        </motion.h2>
        <motion.div className="grid gap-8" variants={stagger}>
          {experienceData.map((exp, index) => (
            <motion.div key={index} variants={fadeInUp} {...hoverEffect}>
              <Card className="group bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg">
                <CardHeader className="pb-6 flex flex-col gap-2">
                  <CardTitle className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                    <span className="bg-primary/10 text-primary rounded-full p-2 text-lg">{exp.icon}</span>
                    <span>{exp.title}</span>
                  </CardTitle>
                  <CardDescription className="text-base text-gray-500 dark:text-gray-400">
                    {exp.company} · {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="max-h-auto overflow-visible">
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="block text-gray-600 dark:text-gray-300 before:content-['•'] before:text-primary">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Separator className="max-w-2xl md:max-w-4xl mx-auto my-8 bg-gray-200 dark:bg-gray-700" />

      {/* Sección de Educación */}
      <motion.section
        className="max-w-2xl md:max-w-4xl mx-auto py-20 px-6 lg:px-8 space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={stagger}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10 text-gray-900 dark:text-gray-100"
          variants={fadeInUp}
        >
          Educación
        </motion.h2>
        <motion.div className="grid gap-8" variants={stagger}>
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={fadeInUp} {...hoverEffect}>
              <Card className="group bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg">
                <CardHeader className="pb-6 flex flex-col gap-2">
                  <CardTitle className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                    <span className="bg-primary/10 text-primary rounded-full p-2 text-lg">{edu.icon}</span>
                    <span>{edu.title}</span>
                  </CardTitle>
                  <CardDescription className="text-base text-gray-500 dark:text-gray-400">
                    {edu.institution} · {edu.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="max-h-auto overflow-visible">
                  <p className="text-base text-gray-600 dark:text-gray-300 italic">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Separator className="max-w-2xl md:max-w-4xl mx-auto my-8 bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}
