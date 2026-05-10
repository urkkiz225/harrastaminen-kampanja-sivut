"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, HOBBIES } from "@/constants/constants";
import { findBestHobby } from "@/components/game/logis";
import QuestionGroup from "@/components/game/questions";
import Result from "@/components/game/resultBox";

type Answer = "a" | "neutral" | "b";

export default function KokeilukonePage() {
  // Tallentaa käyttäjän vastaukset objektiin, avain = kysymyksen indeksi, arvo = vastaus ("a", "neutral", "b")
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  // Tarkistetaan onko kaikkiin kysymyksiin vastattu
  const allAnswered = Object.keys(answers).length === CATEGORIES.length;
  // Jos kaikki vastattu, etsitään paras harrastus logiikalla
  const hobby = allAnswered ? findBestHobby(Object.values(answers), HOBBIES) : null;

  // Tyhjentää kaikki vastaukset ja aloittaa alusta
  const reset = () => setAnswers({});

  return (
    <main className="min-h-screen bg-bg px-6 py-16">
      <Link
        href="/"
        className="font-heading font-bold text-text underline underline-offset-4"
      >
        Takaisin
      </Link>

      <h1 className="text-center font-heading font-black text-text text-2xl md:text-4xl leading-tight max-w-2xl mx-auto mt-8">
        Vastaa jokaiseen kysymykseen ja löydä uusi kokeilu!
      </h1>

      <div className="mt-12 flex flex-col items-center gap-10 max-w-2xl mx-auto">
        {CATEGORIES.map((cat, i) => (
          <QuestionGroup
            key={cat.id}
            category={cat}
            index={i}
            value={answers[i] ?? null}
            onChange={(v: Answer) => setAnswers((prev) => ({ ...prev, [i]: v }))}
          />
        ))}
      </div>

      {hobby && (
        <div className="mt-12">
          <Result hobby={hobby} onReset={reset} />
        </div>
      )}
    </main>
  );
}
