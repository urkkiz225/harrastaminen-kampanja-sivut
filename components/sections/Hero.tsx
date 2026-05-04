import Image from "next/image";

export default function Hero() {
  const rows = ["outline", "outline", "solid", "outline", "outline"] as const;

  return (
    <section className="relative min-h-screen md:h-screen overflow-hidden bg-bg">

      {/* Helsinki logo */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
        <Image src="/images/helsinki.png" alt="Helsinki" width={100} height={50} className="md:w-[120px] object-contain" />
      </div>

      {/* Kokeile stäkki */}
      <div className="absolute left-0 top-8 w-full md:w-[40%] h-[55%] md:h-full flex flex-col justify-around py-2 pl-4 md:pl-6 z-10">
        {rows.map((style, i) => (
          <div
            key={i}
            className={`font-heading font-black uppercase leading-none tracking-tight select-none text-[15vw] md:text-[8vw] ${
              style === "solid" ? "text-secondary" : "text-bg"
            }`}
            style={
              style === "solid"
                ? undefined
                : {
                    WebkitTextStroke: "2px var(--color-accent)",
                    paintOrder: "stroke fill",
                  }
            }
          >
            KOKEILE
          </div>
        ))}
      </div>

      {/* Teksti */}
      <div className="absolute left-0 bottom-6 w-full px-4 md:left-auto md:right-0 md:top-15 md:bottom-auto md:w-[50%] md:pl-8 md:px-0 flex flex-col z-10">
        <p className="font-heading font-bold text-text leading-snug text-[24px] md:text-[34px] xl:text-[40px]">
          Arki vaatii paljon –<br />
          harrastuksen ei tarvitse.<br />
          Löydä tekemisen ilo ja kokeile<br />
          jotain ihan uutta.
        </p>
        <p className="mt-4 md:mt-6 font-heading font-bold text-text text-[24px] md:text-[34px] xl:text-[40px]">
          Tule mukaan{" "}
          <a href="#events" className="text-secondary underline underline-offset-2">
            tapahtumaviikkollemme.
          </a>
        </p>
      </div>

      {/* Muotoja yms */}
      <div
        className="absolute rounded-full bg-accent z-0 w-[18vw] h-[18vw] right-[15%] top-[30%] md:w-[9vw] md:h-[9vw] md:left-[30%] md:right-auto md:top-[52%]"
      />

      <div
        className="absolute bg-secondary/35 z-0 w-[20vw] h-[25vw] right-[5%] top-[38%] md:w-[11vw] md:h-[13vw] md:right-[20%] md:top-[46%]"
      />

      <div
        className="absolute bg-accent z-0 w-[35vw] h-[20vh] md:w-[22vw] md:h-[32vh] right-0 bottom-0"
      />

      {/* Skeitti */}
      <div
        className="absolute z-20 w-[55vw] h-[40vh] md:w-[24vw] md:h-[45vh] left-[20%] md:left-[28%] bottom-[25%] md:bottom-0"
      >
        <Image
          src="/images/skateboard 1.png"
          alt="Skateboarder"
          fill
          className="object-contain object-bottom"
          quality={100}
          sizes="(max-width: 768px) 55vw, 24vw"
          priority
        />
      </div>

    </section>
  );
}
