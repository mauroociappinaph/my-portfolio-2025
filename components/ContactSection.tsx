"use client"
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mt-10">Contact Me</h2>
      <ContactForm />
    </section>
  );
}
