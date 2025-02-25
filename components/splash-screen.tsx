"use client"

import { useEffect, useState } from "react"
//import Image from "next/image"
import { cn } from "@/lib/utils"

interface SplashScreenProps {
  onComplete?: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [matrixText, setMatrixText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%"

    // Efecto de texto estilo Matrix
    const matrixInterval = setInterval(() => {
      const randomText = Array(8)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("")
      setMatrixText(randomText)
    }, 50)

    // Animación de la barra de progreso
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          clearInterval(matrixInterval)
          setTimeout(() => {
  setIsComplete(true)
  if (onComplete) {
    onComplete()
  }
}, 500) // Retardo antes de ocultar el splash screen
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(matrixInterval)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900 transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      {/* <div className="relative w-48 h-48 mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20sdfm-gDlxg0zxe6wVV9o5cISteykVa4LQhz.png"
          alt="SDFM 2520"
          fill
          className="object-contain"
          priority
        />
      </div>*/}

      {/* Texto de carga estilo Matrix */}
      <div className="font-mono text-white mb-4 h-6">{`CARGANDO_SYSTEM: ${matrixText}`}</div>

      {/* Contenedor de la barra de progreso */}
      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* Porcentaje de progreso */}
      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>
    </div>
  )
}
