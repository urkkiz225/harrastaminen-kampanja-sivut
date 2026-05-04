import Image from "next/image";

export default function Hero() {
  const rows = ["outline", "outline", "outline", "solid", "outline", "outline"] as const;

  return (
    <section className="relative h-screen overflow-hidden bg-bg">

      {/* Helsinki logo*/}
      <div className="absolute top-6 right-6 z-20">
        <Image src="/images/helsinki.png" alt="Helsinki" width={120} height={60} className="object-contain" />
      </div>

      {/* Kokeile stäkki */}
      <div className="absolute left-0 top-0 h-full w-[40%] flex flex-col justify-around py-2 pl-6 z-10">
        {rows.map((style, i) => (
          <div
            key={i}
            className={`font-heading font-black uppercase leading-none tracking-tight select-none text-[8vw] ${
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
      <div className="absolute right-0 top-15 w-[50%] flex flex-col pl-8">
        <p className="font-heading font-bold text-text leading-snug text-[28px] md:text-[34px] xl:text-[40px]">
          Arki vaatii paljon –<br />
          harrastuksen ei tarvitse.<br />
          Löydä tekemisen ilo ja kokeile<br />
          jotain ihan uutta.
        </p>
        <p className="mt-6 font-heading font-bold text-text text-[28px] md:text-[34px] xl:text-[40px]">
          Tule mukaan{" "}
          <a href="#events" className="text-secondary underline underline-offset-2">
            tapahtumaviikkollemme.
          </a>
        </p>
      </div>

      {/* Muotoja yms */}
      <div
        className="absolute rounded-full bg-accent z-0"
        style={{ width: "9vw", height: "9vw", left: "30%", top: "52%" }}
      />

      <div
        className="absolute bg-secondary/35 z-10"
        style={{ width: "11vw", height: "13vw", right: "20%", top: "46%" }}
      />

      <div
        className="absolute bg-accent z-10"
        style={{ width: "22vw", height: "32vh", right: 0, bottom: 0 }}
      />

      {/* Skeitti */}
      <div
        className="absolute z-20 flex items-end justify-center"
        style={{ width: "24vw", height: "45vh", left: "28%", bottom: 0 }}
      >
        <Image
          src="/images/skateboard 1.png"
          alt="Skateboarder"
          fill
          className="object-contain object-bottom"
          quality={100}
          sizes="36vw"
          priority
        />
      </div>

    </section>
  );
}
