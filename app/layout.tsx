import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ismael Oliveira — Desenvolvedor Full Stack",
  description:
    "Portfólio de Ismael Oliveira | React, Next.js, TypeScript, Node.js e Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto px-6 py-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
