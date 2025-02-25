"use client"

import { useState } from "react";
import { SplashScreen } from "@/components/splash-screen";
import Background from "@/components/Background";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
      { !splashComplete && <SplashScreen onComplete={() => setSplashComplete(true)} /> }
      { splashComplete && (
        <>
          {/* Fondo en toda la web */}
          <Background />
          {/* Contenido de las páginas */}
          <main className="relative z-10">
            {children}
          </main>
        </>
      ) }
    </>
  );
}
