"use client";
import Hero from "./components/hero";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  FaLinkedin,
  FaGithub as FaGithubIcon,
  FaEnvelope,
} from "react-icons/fa";

const techs = [
  { name: "React", icon: "/imagens/react.png" },
  { name: "Next.js", icon: "/imagens/nextjs.png" },
  { name: "TypeScript", icon: "/imagens/typescript.png" },
  { name: "Node.js", icon: "/imagens/node.png" },
];

const projects = [
  {
    title: "EcoMarine",
    description:
      "Plataforma interativa sobre vida marinha com fórum e painel de dados em tempo real.",
    about:
      "O EcoMarine é um projeto totalmente de minha autoria,uma plataforma dedicada à conscientização e educação sobre a vida marinha. Inclui um fórum interativo para discussões sobre conservação, um painel de dados em tempo real com informações sobre oceanos, e recursos educacionais para promover a sustentabilidade ambiental.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    images: [
      "/imagens/ecomarine.png",
      "/imagens/ecomarine2.png",
      "/imagens/ecomarine3.png",
      "/imagens/ecomarine4.png",
    ],
    demo: "https://eco-marine.vercel.app",
    github: "https://github.com/ismaeloliveira-projetos/EcoMarine",
  },
  {
    title: "Use seus direitos",
    description:
      "Plataforma SaaS de pagamentos desenvolvida como projeto freelancer.",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
    image: "/imagens/useseusdireitos.png",
    demo: "https://urbepay.vercel.app",
    github: "https://github.com/ismaeloliveira-projetos/UrbePay",
  },
  {
    title: "Plataforma de softwares",
    description:
      "site construído com Next.js e animações futuristas usando Framer Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/imagens/datacempro.png",
    demo: "https://ismaeloliveira.dev",
    github: "https://github.com/ismaeloliveira-projetos/portfolio",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="mt-24">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-10 text-gradient"
        >
          Sobre mim
        </motion.h2>

        {/* Bloco principal com foto e texto */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden border border-gray-700 shadow-lg"
          >
            <Image
              src="/imagens/avatar.png"
              alt="Foto de Ismael Oliveira"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Olá 👋 Sou{" "}
              <span className="text-gradient font-semibold">
                Ismael Oliveira
              </span>
              , <strong>Engenheiro de Software</strong> apaixonado por
              tecnologia e performance. Busco criar experiências digitais
              modernas, escaláveis e com propósito.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Tenho experiência com desenvolvimento <strong>Full Stack</strong>,
              atuando principalmente com{" "}
              <strong>React, Next.js, Node.js</strong> e bancos de dados
              relacionais como <strong>MySQL e PostgreSQL</strong>. Amo
              construir soluções elegantes que unem eficiência e criatividade.
            </p>
          </motion.div>
        </div>

        {/* Tecnologias */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Minhas principais tecnologias
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techs.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -6, scale: 1.05 }}
                className="bg-[#0F1115] border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary transition"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <p className="text-sm text-gray-300">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mt-24">
        {/* Título da página */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-10 text-gradient"
        >
          Projetos
        </motion.h2>

        {/* Grid dos projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#0F1115] border border-gray-800 rounded-2xl overflow-hidden hover:border-primary transition-all duration-300"
            >
              {/* Imagens */}
              <div className="relative w-full h-50 overflow-hidden">
                {project.images ? (
                  <div className="flex overflow-x-auto scrollbar-hide space-x-2 h-full">
                    {project.images.map((img, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={img}
                        alt={`${project.title} ${imgIndex + 1}`}
                        width={400}
                        height={200}
                        className="object-cover w-full h-full shrink-0 group-hover:scale-110 transition-transform duration-500"
                      />
                    ))}
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col justify-between h-[260px]">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  {project.about && (
                    <p className="text-gray-500 text-xs mb-4">
                      {project.about}
                    </p>
                  )}

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botões */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <FiExternalLink /> Ver Projeto
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition"
                  >
                    <FiGithub /> Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-10 text-gradient"
        >
          Entre em contato
        </motion.h2>
        <p className="text-gray-400 mb-8">
          Estou aberto a oportunidades como desenvolvedor Full Stack.
        </p>

        <div className="mt-6 flex gap-6">
          <a
            href="mailto:ismael22oliveira@icloud.com"
            className="text-red-600 hover:text-red-500 transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/ismael-oliveira-62446a1aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ismaeloliveira-projetos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors text-2xl"
          >
            <FaGithubIcon />
          </a>
        </div>
      </section>
    </>
  );
}
