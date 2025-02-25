'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Linkedin, Github, Mail } from 'lucide-react'

const menuItems = [
  {
    icon: Linkedin,
    color: 'text-blue-500',
    link: 'https://www.linkedin.com/notifications/?filter=all',
  },
  {
    icon: Github,
    color: 'text-gray-500',
    link: 'https://github.com/mauroociappinaph',
  },
  {
    icon: Mail,
    color: 'text-red-500',
    link: 'mailto:ciappinamaurooj@gmail.com',
  },
]

export default function AnimatedMenuWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const handleItemClick = () => setIsOpen(false)

  return (
    <div className="fixed bottom-8 right-8">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-4 flex flex-col items-center space-y-4"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={handleItemClick}
              >
                <button
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 ${item.color} shadow-lg transition-colors hover:bg-gray-700`}
                >
                  <item.icon size={24} />
                </button>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition-colors hover:bg-gray-700"
        onClick={toggleMenu}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? <X size={32} /> : <Plus size={32} />}
      </motion.button>
    </div>
  )
}
