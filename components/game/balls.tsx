"use client";

import { motion } from "motion/react";

type Props = {
  label: string;
  size: "lg" | "sm";
  selected: boolean;
  onClick: () => void;
};

export default function Ball({ label, size, selected, onClick }: Props) {
  const isLarge = size === "lg";
  const sizeClass = isLarge
    ? "w-32 h-32 md:w-44 md:h-44 text-xl md:text-2xl"
    : "w-20 h-20 md:w-28 md:h-28 text-sm md:text-base";
  const colorClass = isLarge
    ? "bg-secondary text-bg"
    : "bg-accent text-text";
  const ringClass = selected ? "ring-4 ring-blue-500" : "";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full font-heading font-black leading-tight px-2 text-center cursor-pointer transition-shadow ${sizeClass} ${colorClass} ${ringClass}`}
    >
      {label}
    </motion.button>
  );
}
