// app/components/AnimatedSection.tsx
"use client";

import { motion, useAnimation, useReducedMotion, Variants } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  threshold?: number;
  stagger?: number;
  once?: boolean;
};

// Match the fade-and-rise animation used on the Promise page.
export const makeContainerVariants = (stagger = 0.08): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger },
  },
});

export const fadeItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function AnimatedSection({
  children,
  id,
  className,
  threshold = 0.2,
  stagger = 0.08,
  once = true,
}: Props) {
  const controls = useAnimation();
  const prefersReduced = useReducedMotion();

  const [ref, inView] = useInView({ threshold, triggerOnce: once });

  useEffect(() => {
    if (prefersReduced) {
      controls.set("visible");
      return;
    }
    if (inView) controls.start("visible");
    else if (!once) controls.start("hidden");
  }, [controls, inView, once, prefersReduced]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={makeContainerVariants(stagger)}
    >
      {children}
    </motion.section>
  );
}
