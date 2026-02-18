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
  duration?: number;
  offsetY?: number;
  once?: boolean;
};

export const makeContainerVariants = (duration = 0.35, stagger = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration,
      ease: "easeOut",
      staggerChildren: stagger,
    },
  },
});

export const fadeItem: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: "tween", duration: 0.35, ease: "easeOut" },
  },
};

export default function AnimatedSection({
  children,
  id,
  className,
  threshold = 0.3,
  stagger = 0.1,
  duration = 0.35,
  once = false,
}: Props) {
  const controls = useAnimation();
  const prefersReduced = useReducedMotion();

  const [ref, inView] = useInView({ threshold });

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
      variants={makeContainerVariants(duration, stagger)}
    >
      {children}
    </motion.section>
  );
}
