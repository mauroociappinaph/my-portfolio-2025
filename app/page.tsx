"use client";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import AnimatedMenuWidget from "@/components/animated-menu-widget";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
//import { Starfield } from "../components/Starfield";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />



{/* Header Section */}
      <Header />
       {/* Projects Section */}
      <ContactForm />
{/* Starfield */}

  <AnimatedMenuWidget />

  {/* Footer Section */}
  <Footer />
    </div>
  );
}
