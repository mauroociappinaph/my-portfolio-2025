"use client"

import { useEffect, useState } from "react"
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
    const updateMatrixText = () => {
      const randomText = Array(8)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("");
      setMatrixText(randomText);
    };
    const matrixInterval = setInterval(updateMatrixText, 50);

    const updateProgress = () => {
      setProgress(prev => {
        const nextProgress = prev + 1;
        if (nextProgress >= 100) {
          completeLoading();
          return 100;
        }
        return nextProgress;
      });
    };
    const progressInterval = setInterval(updateProgress, 30);

    const completeLoading = () => {
      clearInterval(matrixInterval);
      clearInterval(progressInterval);
      setTimeout(() => {
        setIsComplete(true);
        if (onComplete) onComplete();
      }, 500);
    };

    return () => {
      clearInterval(matrixInterval);
      clearInterval(progressInterval);
    }
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900 transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      <div className="font-mono text-white mb-4 h-6">{`CARGANDO_SYSTEM: ${matrixText}`}</div>
      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
      </div>
      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>
    </div>
  )
}
