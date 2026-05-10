"use client";
 
import { useState, useEffect, useRef } from "react";
 
const essayText = `Jee, anna mun olla se mies mikskä mä halusin tulla Anna mun antaa se mitä sä halusit multa 
Mä tarvin tahtoa vaikeisiin hetkiin Mun täytyy lääkettä näihin paineisiin etsii Anna mun säilyttää se voima mun sisällä
Se sama voima kun isällä Erikoiset elämät luo erikoisii ihmisiä Oon yksi heistä, anna jalat maassa silti pitää
Nuori, tyylikäs ja varakas Ne sanoo, et mä räppään vaan naisist, autoist ja rahasta Mutsi kysy: "Luuleksä olevas James Bond?"
Sanoin: "Emmä tiedä, mut jotain samaa meis on" Tää ei tuu poistuu täältä koskaan (woo-oo-oo-oo) Timantit on ikuisia
Ja mä lupaan pysyy aitona ja aina rokkaa koska (woo-oo-oo-oo)Timantit on ikuisia Woo-oo-oo-oo Woo-oo-oo-oo-o-oo-o-oo
Timantit on ikuisia`;
 
export default function EssayBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);
 
  useEffect(() => {
    if (isOpen && !typing && displayed.length === 0) {
      setTyping(true);
      indexRef.current = 0;
      intervalRef.current = setInterval(() => {
        indexRef.current += 1;
        setDisplayed(essayText.slice(0, indexRef.current));
        if (indexRef.current >= essayText.length) {
          clearInterval(intervalRef.current!);
          setTyping(false);
        }
      }, 18);
    }
    if (!isOpen) {
      clearInterval(intervalRef.current!);
      setDisplayed("");
      setTyping(false);
      indexRef.current = 0;
    }
    return () => clearInterval(intervalRef.current!);
  }, [isOpen]);
 
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className="rounded-2xl px-8 pt-8 pb-6 relative overflow-hidden"
        style={{ backgroundColor: "#FAF0EE" }}
      >
        {/* Otsikko */}
        <h2 className="font-heading font-black text-text text-2xl md:text-3xl mb-4">
          Miksi harrastukset ovat tärkeä osa elämää?
        </h2>
 
        {/* Tekstialue */}
        <div className="relative">
          <div
            className="font-heading text-text text-base leading-relaxed overflow-hidden transition-all duration-500"
            style={{ maxHeight: isOpen ? "1000px" : "180px" }}
          >
            {isOpen ? (
              <p className="whitespace-pre-line">{displayed}</p>
            ) : (
              <p className="whitespace-pre-line">{essayText}</p>
            )}
          </div>
 
          {/* Blur fade — näkyy vain kiinni ollessa */}
          {!isOpen && (
            <div
              className="absolute bottom-0 left-0 w-full h-28 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, #FAF0EE 100%)",
              }}
            />
          )}
        </div>
 
        {/* Lue lisää -nappi */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 flex items-center gap-1 font-heading font-bold text-secondary text-base hover:opacity-70 transition-opacity cursor-pointer"
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          {isOpen ? "Sulje" : "Lue lisää"}
          <span
            className="inline-block transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ∨
          </span>
        </button>
      </div>
    </div>
  );
}
 