import Image from "next/image";
import Link from "next/link";


export default function Kokeilukone() {
  return (
    <section className="relative min-h-screen bg-[#F7F3EE] flex flex-col items-center pt-20 px-6 pb-12 overflow-hidden">
      

      {/* Otsikko */}
      <div className="mt-1 flex flex-col w-full max-w-5xl">
        <h1 className="font-heading font-black text-[15vw] md:text-[100px] leading-[0.8] tracking-tight flex flex-col items-center">
          <span className="text-[#1A1A2E] mr-[10%]">Kokeilu</span>
          <span className="text-[#1A1A2E] ml-[30%]">-kone</span>
        </h1>
      </div>

      {/* Keskiosa: teksti ja kokeilukone */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 w-full max-w-4xl relative gap-10 md:gap-0">
        
        {/* Esittelyteksti */}
        <div className="md:absolute md:left-0 md:top-[15%] max-w-[360px] font-body font-bold text-[clamp(16px,2.5vw,22px)] leading-snug text-[#1A1A2E] z-10">
          Etkö tiedä, mitä harrastusta kokeilisit seuraavaksi? Kaipaatko uusia tuulia arkeen, mutta alkuun pääseminen on vaikeaa? Vastaa alla oleviin joko-tai-kysymyksiin, ja kokeilukone ehdottaa juuri sinulle sopivaa harrastusta.
        </div>

        {/* Kokeilukoneen kuva */}
        <div className="relative w-[280px] h-[320px] md:w-[350px] md:h-[390px] z-0 ml-auto mr-auto md:mr-[5%]">
          <Image 
            src="/images/kone.png" 
            alt="Kokeilukone" 
            fill 
            className="object-contain"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Painike */}
      <div className="w-full max-w-3xl mt-12 z-10">
        <Link
          href="/kokeile"
          className="block w-full text-center bg-[#E63946] hover:bg-[#C93542] text-[#F7F3EE] font-heading font-bold text-[8vw] md:text-[65px] py-6 md:py-3 transition-colors shadow-sm rounded-2xl"
        >
          Käynnistä kone
        </Link>
      </div>

    </section>
  );
}