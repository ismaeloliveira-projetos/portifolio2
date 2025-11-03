"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  stack: string;
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  github,
  demo,
}: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="bg-[#0F1115] p-6 rounded-2xl border border-gray-800 hover:border-primary transition"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
      <div className="mt-4 text-xs text-gray-400">{stack}</div>

      <div className="mt-6 flex gap-3">
        {demo && (
          <a
            className="text-sm underline hover:text-primary transition"
            href={demo}
            target="_blank"
          >
            Ver projeto
          </a>
        )}
        {github && (
          <a
            className="text-sm underline hover:text-primary transition"
            href={github}
            target="_blank"
          >
            Código
          </a>
        )}
      </div>
    </motion.article>
  );
}
