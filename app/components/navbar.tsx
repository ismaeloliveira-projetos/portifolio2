"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-dark/90 backdrop-blur border-b border-gray-800"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-gradient">
          Ismael Oliveira
        </Link>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-primary transition">
            Sobre
          </a>
          <a href="#projects" className="hover:text-primary transition">
            Projetos
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contato
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
