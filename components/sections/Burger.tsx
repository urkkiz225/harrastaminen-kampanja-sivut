"use client";
 
import { useState } from "react";
 
export default function Burger() {
  const [open, setOpen] = useState(false);
 
  return (
    <div>
      {/* Burgeri nappi */}
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col justify-center items-center gap-1.5 p-2"
        style={{border: "none", cursor: "pointer", backgroundColor: "transparent"}}
        aria-label="Avaa valikko"
      >
        <div className="w-7 h-0.5 bg-text rounded-full"></div>
        <div className="w-7 h-0.5 bg-text rounded-full"></div>
        <div className="w-7 h-0.5 bg-text rounded-full"></div>
      </button>
 
      {/* Tumma tausta koko näytölle, kun valikko on auki */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          style={{backgroundColor: "rgba(0,0,0,0.3)"}}
          onClick={() => setOpen(false)}
        />
      )}
 
      {/* Sivupaneeli oikealta */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col pt-4 pb-10 px-8 transition-transform duration-300"
        style={{
          backgroundColor: "#EDE8E1",
          width: "clamp(220px, 55vw, 420px)",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* X-sulkunappi */}
        <div className="flex justify-start mb-8">
          <button
            onClick={() => setOpen(false)}
            className="h-10 text-4xl"
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
          }}
          aria-label="Sulje valikko"
        >
          x
          </button>
        </div>
 
        {/* Luo yhden navigaatiolinkin ja sulkee valikon klikkauksen jälkeen */}
        <nav className="flex flex-col gap-6">
          {[{href: "#etusivu", label: "Etusivu"},
            {href: "#aikataulu", label: "Aikataulu"},
            {href: "#henkilotarinat", label: "Henkilötarinat"},
            {href: "#kokeilukone", label: "Kokeilukone"},
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-heading font-bold text-text text-2xl hover:text-secondary transition-colors"
              style={{textDecoration: "none"}}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}