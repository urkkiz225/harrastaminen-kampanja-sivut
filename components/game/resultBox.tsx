"use client";

import { motion } from "motion/react";
import { CATEGORIES } from "@/constants/constants";

type Answer = "a" | "neutral" | "b";

type Hobby = {
  name: string;
  attrs: Answer[];
  when?: string;
  where?: string;
};

type Props = {
  hobby: Hobby;
  onReset: () => void;
};

// Muutetaan labelit ns. selkotekstiksi
function traitLabel(value: Answer, i: number): string {
  if (value === "neutral") return "ei olennaista";
  const cat = CATEGORIES[i];
  return value === "a" ? cat.a : cat.b;
}

export default function Result({ hobby, onReset }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-secondary text-bg rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-lg"
    >
      <p className="font-body text-sm uppercase tracking-wider opacity-80">Kokeile tätä</p>
      <h2 className="font-heading font-black text-5xl md:text-7xl leading-none mt-2">
        {hobby.name}
      </h2>

      <p className="mt-6 font-body text-sm uppercase tracking-wider opacity-70">
        Harrastuksen vastaus tyyppi
      </p>
      <p className="mt-1 font-body text-base md:text-lg opacity-90">
        {hobby.attrs.map((a, i) => traitLabel(a, i)).join(", ")}
      </p>

      {(hobby.when || hobby.where) && (
        <p className="mt-4 font-heading font-bold text-lg md:text-xl">
          {hobby.when}
          {hobby.when && hobby.where ? ", " : ""}
          {hobby.where}
        </p>
      )}

      <button
        type="button"
        onClick={onReset}
        className="mt-8 bg-bg text-text font-heading font-bold text-lg px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
      >
        Kokeile uudestaan
      </button>
    </motion.div>
  );
}
