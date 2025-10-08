// app/components/AnimatedSection.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { motion, Variants, useAnimation, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** % of element that must be visible to trigger (0–1). Default 0.3 */
  threshold?: number;
  /** Stagger delay for children that use variants. Default 0.10s */
  stagger?: number;
  /** Duration of the container fade. Default 0.6s */
  duration?: number;
  /** Initial Y offset. Default 24px */
  offsetY?: number;
  /** If true, animate once and stay visible (no fade-out). Default false */
  once?: boolean;
};

export const makeContainerVariants = (offsetY = 24, duration = 0.6, stagger = 0.1): Variants => ({
  hidden: { opacity: 0, y: offsetY },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.42, 0, 0.58, 1], staggerChildren: stagger },
  },
});

/** Use this on children inside <AnimatedSection> */
export const fadeItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
};

export default function AnimatedSection({
  children,
  id,
  className,
  threshold = 0.3,
  stagger = 0.1,
  duration = 0.6,
  offsetY = 24,
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
      variants={makeContainerVariants(offsetY, duration, stagger)}
    >
      {children}
    </motion.section>
  );
}
