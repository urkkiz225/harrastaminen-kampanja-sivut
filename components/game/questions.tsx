"use client";

import Ball from "./balls";

type Answer = "a" | "neutral" | "b";

type Category = {
  id: string;
  a: string;
  b: string;
};

type Props = {
  category: Category;
  index: number;
  value: Answer | null;
  onChange: (v: Answer) => void;
};

export default function QuestionGroup({ category, value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Ball
        label={category.a}
        size="lg"
        selected={value === "a"}
        onClick={() => onChange("a")}
      />
      <Ball
        label="ei olennaista"
        size="sm"
        selected={value === "neutral"}
        onClick={() => onChange("neutral")}
      />
      <Ball
        label={category.b}
        size="lg"
        selected={value === "b"}
        onClick={() => onChange("b")}
      />
    </div>
  );
}
