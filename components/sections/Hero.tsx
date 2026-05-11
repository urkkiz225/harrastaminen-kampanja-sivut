"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import Burger from "./Burger";


export default function Hero() {
  const rows = ["outline", "outline", "solid", "outline", "outline"] as const;

  return (
    <section id="etusivu" className="relative min-h-screen md:h-screen overflow-hidden bg-bg">
      <h2 className="sr-only">Etusivu</h2>

      {/* POP UP -teksti (mobiili) */}
      <div className="md:hidden absolute top-4 left-6 z-20 font-heading font-bold text-text text-sm leading-tight">
        POP UP -VIIKKO<br />
        1.–7.6.
      </div>

      {/* Helsinki logo */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] flex items-center gap-4">
        <Image
          src="/images/helsinki.png"
          alt="Helsinki"
          width={120}
          height={60}
          className="object-contain w-24 md:w-[120px] h-auto"
        />

        <Burger />
      </div>

      {/* Kokeile stäkki */}
      <div className="relative pt-20 px-4 flex flex-col gap-1
                      md:absolute md:left-0 md:top-0 md:h-full md:w-[40%]
                      md:pt-2 md:pb-2 md:px-0 md:pl-6 md:gap-0 md:justify-around z-10">
        {rows.map((style, i) => (
          <div
            key={i}
            className={`font-heading font-black uppercase leading-none tracking-tight select-none text-[18vw] md:text-[8vw] ${
              style === "solid" ? "text-secondary" : "text-bg"
            }`}
            style={
              style === "solid"
                ? undefined
                : {
                    WebkitTextStroke: "1.5px var(--color-accent)",
                    paintOrder: "stroke fill",
                  }
            }
          >
            KOKEILE
          </div>
        ))}
      </div>

      {/* Oranssi pallo */}
      <div className="absolute rounded-full bg-accent z-0
                      w-[32vw] h-[32vw] right-4 top-[55vw]
                      md:w-[9vw] md:h-[9vw] md:left-[30%] md:right-auto md:top-[52%]" />

      {/* Pinkki neliö */}
      <div className="absolute bg-secondary/35 z-10
                      w-[45vw] h-[40vw] right-6 top-[95vw]
                      md:w-[11vw] md:h-[13vw] md:right-[20%] md:left-auto md:top-[46%]" />

      {/* Skeitti */}
      <div className="relative -mt-20 mx-auto w-[75vw] h-[80vw] flex items-end justify-center z-20
                      md:absolute md:mt-0 md:mx-0 md:left-[28%] md:bottom-0 md:w-[24vw] md:h-[45vh]">
        <Image
          src="/images/skateboard-1.png"
          alt="Skateboarder"
          fill
          className="object-contain object-bottom"
          quality={100}
          sizes="(max-width: 768px) 75vw, 24vw"
          priority
        />
      </div>
      

      {/* Oranssi laatikko (vain desktop — peittäisi tekstin mobiilissa) */}
      <div className="hidden md:block absolute bg-accent z-10"
           style={{ width: "22vw", height: "32vh", right: 0, bottom: 0 }} />

      {/* Aikataulu-nuoli */}
      <motion.a
        href="#events"
        aria-label="Katso viikon aikataulu"
        className="relative mt-8 mb-10 mx-auto flex flex-col items-center gap-2 z-30
                   md:absolute md:mt-0 md:mb-0 md:mx-0 md:left-[50%] md:bottom-8"
        animate={{ y: [0, -14, 0, -8, 0, -3, 0, 0] }}
        transition={{
          duration: 30,
          times: [0, 0.015, 0.035, 0.05, 0.07, 0.085, 0.1, 1],
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-text">
          <ArrowDown className="w-5 h-5 text-text" strokeWidth={2.5} />
        </span>
        <span className="font-heading font-bold text-text text-sm">Katso viikon aikataulu</span>
      </motion.a>

      {/* Teksti */}
      <div className="relative px-6 pb-12 mt-6 flex flex-col gap-6
                      md:absolute md:right-0 md:top-15 md:w-[50%] md:pl-8 md:p-0 md:mt-0 md:gap-0 z-10">
        <p className="font-heading font-bold text-text leading-snug
                      text-xl md:text-[34px] xl:text-[40px]">
         <span className="text-secondary">
          Entä, jos harrastus<br />
          ei tarvitse syytä?<br />
          </span>
          Löydä tekemisen ilo ja kokeile<br />
          jotain ihan uutta.
        </p>
        <p className="font-heading font-bold text-text
                      text-xl md:text-[34px] xl:text-[40px] md:mt-6">
          Tule mukaan{" "}
          <a href="#events" className="text-text underline underline-offset-2 hover:text-secondary transition-colors">
            tapahtumaviikollemme.
          </a>
          <span className="hidden md:inline">
            <br />
            <span className="text-[24px]">POP-UP VIIKKO 1.-7.6</span>
          </span>
        </p>
      </div>

    </section>


  );
}
