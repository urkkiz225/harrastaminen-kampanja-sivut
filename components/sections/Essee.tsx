"use client";

import { useState } from "react";

// Essee boksin sisällä
const essayText = `Kotiovesta sisään kuudelta. Tee ruokaa, siivoa keittiö, pese pyykit, käy salilla ja suihkussa. Sängyssä ehtii scrollata somea tai katsoa sarjoja. Aamulla herätys soi seiskalta. ”Mitä sä harrastat?” En mitään. Käyn töissä ja pidän itsestäni huolta. Lapsena kyllä rakastin jalkapalloa. Teininä treenit alkoivat viedä liikaa aikaa ja jalkapallo vaihtui valokuvaukseen. Valokuvaus loppui, kun keikkakuvat eivät menneet kaupaksi. Omaa brändiä ei löytynyt millään.

Uuden harrastuksen aloittaminen on työmaa. Aika kuluu velvollisuuksiin ja siitä palautumiseen. Vapaa-ajankin pitäisi palvella tavoitteita ja harrastukset muuttuvat helposti ”side hustleiksi” tai keinoiksi optimoida omaa terveyttä.  Suorituskulttuurin paineet luovat tarpeen määritellä suhteemme harrastuksiin uudelleen. Niidenhän pitäisi olla lääke tähän oravanpyörään ja palauttaa leikkisyys elämään.

Harrastus voi tuntua painavalta sanalta. Harrastushan on asia, jota tehdään hartaasti. Sanaan sisältyy jotain vakavaa ja vaatimuksellista. Ikään kuin voidakseen kertoa harrastavansa jotain, tulisi omistautua asialle. Ottaa selvää, perehtyä jokaiseen yksityiskohtaan ja harjoitella säännöllisesti. Käytetty aikakin pitää perustella itselleen jollain. Harrastuksessa täytyy kehittyä, menestyä ja saada jotain irti. Mitä järkeä siinä muuten olisi?

Kun harrastusta ei enää tee halusta, vaan pakosta, se muuttuu joksikin muuksi. Harrastuksen tulisi kummuta uteliaisuudesta ja ilosta. Se on tapa kohdata ihmisiä ja tutustua itseensä sekä maailmaan paremmin. Se antaa happea ja väriä arkeen. Harrastus ei vaadi omistautumista eikä sen ole pakko olla intohimo. Sitä ei tarvitse tehdä kahta tuntia kolme kertaa viikossa. Harrastukseen voi palata muutaman kerran vuodessa, kuin tapaisi vanhaa ystävää. Älä kaupallista harrastuksiasi tai luo niille paineita tyhjästä. Kokeile, palaa entisiin kokeiluihin, ja tee innostavia asioita varauksetta. Harrastus ei tarvitse syytä.`;

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
          animation: wordFade 0.1s ease-out forwards;
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
                        style={{animationDelay: (i * 10) + "ms"}}
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