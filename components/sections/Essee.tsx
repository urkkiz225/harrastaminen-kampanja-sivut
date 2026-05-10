"use client";

import { useState } from "react";

// Essee boksin sisällä
const essayText = `Suppea suhteellisuusteoria eli erityinen suhteellisuusteoria tai erikoinen suhteellisuusteoria on fysiikassa yleisesti hyväksytty ja kokeellisesti hyvin tuettu tieteellinen teoria, jonka Albert Einstein julkaisi 1905. Se korvasi newtonilaisen eli klassisen mekaniikan käsityksen muuttumattomasta avaruudesta ja ajasta näiden yhtymäksi, aika-avaruudeksi, ja sisällytti itseensä sähkömagnetismin teorian, kuten Maxwellin yhtälöissä on esitetty.

Muuttumattomalla nopeudella liikkuvan kappaleen sanotaan olevan inertiaalikoordinaatistossa. Jos vakionopeuksisia kappaleita on monia ja ne liikkuvat samaan suuntaan, ovat ne samassa inertiaalikoordinaatistossa. Jos inertiaalikoordinaatistoja on monia, ovat niiden kappaleiden ominaisuudet suhteellisia toisiinsa, ja ominaisuuksia voidaan verrata suppean suhteellisuusteorian avulla, josta nimi suhteellisuusteoria tulee. Teoria on suppea, koska se pätee vain inertiaalikoordinaatistoille, eikä siinä voi siten suhteellistaa kiihtyviä tai hidastuvia liiketiloja.[1] Suppeassa suhteellisuusteoriassa jätetään huomiotta kappaleiden painovoiman luonne, joka yleisen suhteellisuusteorian mukaan aiheuttaa aika-avaruuden vääristymistä ja kaikki liike, myös kiihtyvä, on saatettu teoriassa silloin yleisesti suhteellistetuksi.

Suppeassa suhteellisuusteoriassa vertaillaan inertiaalikoordinaatistojen kappaleiden ominaisuuksia, kuten suhteellista sijaintia, nopeutta ja liike-energiaa, Lorentz-muunnoksilla. Nämä ottavat huomioon aika-avaruuden muuttumisen, joka on merkittävää eritoten tyhjiön valonnopeutta lähellä olevissa suhteellisissa nopeuksissa. Klassisessa mekaniikassa käytetään samankaltaisia Galilei-muunnoksia, jotka eivät ota huomioon aika-avaruuden muutoksia.[1] Klassista mekaniikkaa voidaan pitää siksi nykyään enää vain suhteellisuusteorian approksimaationa, jota voidaan soveltaa valoa paljon hitaammissa nopeuksissa.`;

export default function EssayBox() {
  // onko tekstiboksi auki vai kiinni
  const [open, setOpen] = useState(false);
  // kasvaa aina kun boksi avataan --> pakottaa animaation toistumaan alusta :D
  const [animation, setAnimation] = useState(0);

  // Avaa tai sulkee boksin --> jos avataan, animaatio käynnistetään uudelleen
  const toggleOpen = () => {
    if (!open) setAnimation(current => current + 1);
    setOpen(!open);
  };

  // Pilkotaan teksti yksittäisiksi sanoiksi, jotta jokainen voidaan animoida erikseen
  const words = essayText.split(" ");

  return (
    <>
      {/* Jokainen sana fadee näkyviin viiveellä */}
      <style>{`
        @keyframes wordFade {
          from {opacity: 0;}
          to   {opacity: 1;}
        }
        .word-animation {
          opacity: 0;
          animation: wordFade 0.3s ease-out forwards;
        }
      `}</style>

      {/* Ulompi säiliö, keskitetty */}
      <div className="mt-10" style={{ width: "calc(100% - 24vw)", marginLeft: "12vw", marginRight: "12vw" }}>
        {/* Oranssi kortti-boksi */}
        <div
          className="rounded-2xl pt-7 pb-6 relative overflow-hidden"
          style={{backgroundColor: "#FDC398"}}
        >
          {/* Otsikko */}
          <h2 className="font-heading font-black text-text text-2xl md:text-4xl mb-4 text-center">
            Miksi harrastukset ovat tärkeä osa elämää?
          </h2>

          <div className="relative px-6 md:px-10">
            {/* Tekstialue */}
            <div
              className="font-heading text-text text-base leading-relaxed overflow-hidden transition-[max-height] duration-1000 ease-in-out"
              style={{maxHeight: open ? "2500px" : "100px"}}
            >
              {open ? (
                // Boksi auki --> jokainen sana on oma span, animationDelay kasvaa sana sanalta
                <div className="max-w-3xl mx-auto">
                  <p key={animation} className="whitespace-pre-wrap text-justify">
                    {words.map((word, i) => (
                      <span
                        key={i}
                        className="word-animation"
                        style={{animationDelay: (i * 30) + "ms"}}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </p>
                </div>
              ) : (
                // Boksi kiinni --> teksti näytetään normaalisti, häivytys peittää alaosan
                <div className="max-w-3xl mx-auto">
                  <p className="whitespace-pre-line text-justify">{essayText}</p>
                </div>
              )}
            </div>

            {/* Häivytys alareunassa --> piilottaa osan tekstistä, kun boksi on kiinni */}
            <div
              className="absolute bottom-0 left-0 w-full h-30 pointer-events-none transition-opacity duration-1000"
              style={{
                opacity: open ? 0 : 1,
                background: "linear-gradient(to bottom, transparent 0%, #FDC398 100%)",
              }}
            />
          </div>

          {/* Lue lisää / Sulje -nappi --> nuoli kääntyy ylösalaisin, kun boksi on auki */}
          <button
            onClick={toggleOpen}
            className="mt-4 flex items-center justify-center gap-1 w-full font-heading font-bold text-secondary text-base hover:opacity-70 transition-opacity cursor-pointer"
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            {open ? "Sulje" : "Lue lisää"}
            {/* Nuoli pyörii 180°, kun auki weeeeee! */}
            <span
              className="inline-block transition-transform duration-300"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ∨
            </span>
          </button>
        </div>
      </div>
    </>
  );
}