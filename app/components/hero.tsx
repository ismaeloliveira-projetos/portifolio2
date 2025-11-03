"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Coluna da esquerda - textos */}
      <div className="flex-1">
        {/* Texto com efeito de digitação */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight mb-4"
        >
          <TypeAnimation
            sequence={[
              "Olá, eu sou Ismael Oliveira", // texto que será digitado
              1500, // tempo de pausa após terminar a frase
            ]}
            speed={40} // velocidade da digitação
            style={{ display: "inline-block" }}
            repeat={0} // 0 = não repetir
            cursor={true}
          />
        </motion.div>

        {/* Subtexto com o cargo */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gradient text-2xl font-medium"
        >
          Engenheiro de Software Full Stack
        </motion.p>

        {/* Descrição curta */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-gray-300 max-w-xl"
        >
          Focado em criar aplicações web modernas, escaláveis e com propósito 🌱
        </motion.p>

        {/* Botões */}
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="btn">
            Ver projetos
          </a>
          <a href="#contact" className="btn-outline">
            Entrar em contato
          </a>
        </div>
      </div>

      {/* Avatar ou imagem futurista */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-semibold text-white text-2xl"
      >
        IO
      </motion.div>
    </section>
  );
}
