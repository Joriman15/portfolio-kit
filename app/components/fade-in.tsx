"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function FadeIn({ children, className, delay = 0, id }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
