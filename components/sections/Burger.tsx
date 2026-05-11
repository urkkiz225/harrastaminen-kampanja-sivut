"use client";
 
import { useState } from "react";
import { Home, Calendar, User, Heart } from "lucide-react";
 
const navItems = [
  {href: "#etusivu",        label: "Etusivu",        Icon: Home},
  {href: "#aikataulu",      label: "Aikataulu",      Icon: Calendar},
  {href: "#henkilotarinat", label: "Henkilötarinat", Icon: User},
  {href: "#kokeilukone",    label: "Kokeilukone",    Icon: Heart},
];
 
export default function Burger() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null); // Aloitusarvo null
 
  return (
    <div>
      {/* Burger-nappi */}
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col justify-center items-center gap-1.5 p-2"
        style={{border: "none", cursor: "pointer", backgroundColor: "transparent"}}
        aria-label="Avaa valikko"
      >
        <div className="w-7 h-0.5 bg-text rounded-full" />
        <div className="w-7 h-0.5 bg-text rounded-full" />
        <div className="w-7 h-0.5 bg-text rounded-full" />
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
        className="fixed top-0 right-0 h-full z-50 flex flex-col pt-4 pb-10 px-6 transition-transform duration-300"
        style={{
          backgroundColor: "#EDE8E1",
          width: "clamp(280px, 80vw, 420px)",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* X-sulkunappi */}
        <div className="flex justify-start mb-6">
          <button
            onClick={() => setOpen(false)}
            className="text-4xl font-bold hover:scale-110 active:scale-75 transition-transform cursor-pointer"
            style={{border: "none", backgroundColor: "transparent", cursor: "pointer"}}
            aria-label="Sulje valikko"
          >
            ×
          </button>
        </div>
 
        {/* Navigaatiolinkit ikoneilla */}
        <nav className="flex flex-col gap-2">
          {navItems.map(({href, label, Icon}) => {
            const isHovered = hovered === href;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                onMouseEnter={() => setHovered(href)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "15px 14px",
                  borderRadius: "12px",
                  backgroundColor: isHovered ? "rgba(210, 120, 100, 0.15)" : "transparent",
                  transition: "background-color 0.2s ease",
                  color: isHovered ? "#E63946" : "inherit",
                }}
              >
                <Icon
                  size={24}
                  strokeWidth={1.8}
                  style={{color: isHovered ? "#E63946" : "#888", transition: "color 0.2s ease"}}
                />
                <span
                  className="font-heading font-bold text-2xl"
                  style={{transition: "color 0.2s ease"}}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}