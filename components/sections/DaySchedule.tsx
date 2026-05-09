"use client";
import { MapPin } from "lucide-react";
import { useState } from "react";

const days = ["Ma 1.6.", "Ti 2.6.", "Ke 3.6.", "To 4.6.", "Pe 5.6.", "La 6.6.", "Su 7.6."];

const events: Record<number, { time: string; title: string; desc: string; location: string; color: string }[]> = {
  0: [//ma
    { time: "09.00 - 10.00", title: "Aamujooga", desc: "Aloita päivä rauhassa ja hyvässä seurassa.", location: "Kallio", color: "bg-secondary" },
    { time: "14.00 - 16.00", title: "Kaupunkiviljely", desc: "Kädet multaan keskellä kaupunkia.", location: "Vallila", color: "bg-accent" },
    { time: "18.00 - 20.00", title: "Keramiikkapaja", desc: "Luo omilla käsilläsi ja nauti hetkestä.", location: "Arabia",  color: "bg-secondary/70" },
  ],
  1: [ //ti
    { time: "10.00 - 11.00", title: "Kiipeily", desc: "Kokeile kiipeilyä matalalla kynnyksellä!!!.", location: "Herttoniemi", color: "bg-secondary/70" },
    { time: "14.00 - 20.00", title: "Puutarhatonttujen jahtaaminen", desc: "Ovatko tontut tehneet sinullekin kepposia?", location: "Naapurin takapiha", color: "bg-secondary" },
    { time: "20.00 - 22.00", title: "Jalkapallo", desc: "Tervetuloa pelaamaan jalkapalloa!", location: "Pitäjänmäen sisähalli", color: "bg-accent" },
  ],
  2: [ //ke
    { time: "00.01 - 08.00", title: "Hullun aamulenkki", desc: "Oletko aamuvirkku? Todista se!", location: "Alpit", color: "bg-secondary" },
    { time: "11.00 - 15.00", title: "Suomalaisen mytologian laulukurssi", desc: "Kalevala soittaa! Vastaatko?", location: "Väinämöisen tervattu pirtti", color: "bg-secondary/70" },
    { time: "16.00 - 23.00", title: "Suohonlaulannan aloittelijakilpailu", desc: "Tervetuloa manaamaan ihmisiä (suohon) ja (muuten vain!)", location: "Suo", color: "bg-accent" },
  ],
  3: [//to
    { time: "09.00 - 12.00", title: "Tähtien katselua", desc: "Kulje vastavirtaa vastaan ja sano valosaasteelle ei tässä päivänaikaisessa taivaalletuijottelussa", location: "Tampereen Hervanta", color: "bg-secondary" },
    { time: "14.00 - 16.00", title: "Tailwindcss-alkeet", desc: "Oletko ikinä miettinyt, että CSS:ni on sotkuista? Tämän jälkeen ainakin olet!", location: "T2 Aalto T-Talo", color: "bg-accent" },
    { time: "18.00 - 20.00", title: "Ankkapeli", desc: "Olit sitten vasta-alkaja, kokenut konkari tai vaikka Ankkapeliturnauksen vuosittainen tschämpiön, tervetuloa tutustumaan ja jakamaan Ankkapelin jaloa lajia!", location: "Rock Bottom",  color: "bg-secondary/70" },
  ],
};

export default function DaySchedule() {
  const [activeDay, setActiveDay] = useState(0)
  const nextDay = () => setActiveDay(i => (i + 1) % days.length);
  const prevDay = () => setActiveDay(i => (i - 1 + days.length)%days.length);
  return (

    <div className="w-full -px-[100px] py-10 justify-items-center text-center">
      <h2 className="w-[max(20%,300px)] mx-auto font-heading font-black leading-[0.8] text-center mt-[100px] mb-[5px]">
      <span className="block min-w-[14vw] text-[clamp(55px,5.5vw,90px)] text-left">POP UP</span>
      <span className="block min-w-[14vw] text-[clamp(40px,3vw,70px)] text-right">-viikko</span>
    </h2>
    <p className = "items-center text-center text-black font-black leading-[1] mb-[50px]">
        <span className = "block text-[clamp(45px,5vw,82px)] mt-[100px] mb-[35px]">Viikon aikataulu</span>
         <span className = "block tracking-[-1] text-[clamp(20px,1.2vw,45px)]">
            Klikkaa päivää ja löydä sinua kiinnostavat harrastukset. Kaikki tapahtumat ovat maksuttomia.
        </span>
    </p>
      {/*namiskat napit*/}
      <div className="flex items-center gap-2 mb-8 w-full">
        <button onClick = {prevDay} className="text-text text-2xl px-1 flex-none">‹</button>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 flex-1">
          {days.map((day, i) => (
            <button key={i} onClick={() => setActiveDay(i)}
              className={`
                px-1 py-3 rounded-xl font-heading font-bold text-bg text-sm sm:text-lg transition-all
                ${activeDay === i ? "bg-secondary" : "bg-secondary/40"}
              `}
            >
              {day}
            </button>
          ))}
        </div>
        <button onClick = {nextDay} className="text-text text-2xl flex-none">›</button>
      </div>
      {/*kortit*/}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {(events[activeDay]??[]).map((event, i) => (
          <div key={i} className={`${event.color} rounded-2xl p-5 flex flex-col justify-between min-h-[220px]`}>
            <div>
              <p className="text-bg/80 text-sm mb-2">{event.time}</p>
              <h3 className="text-bg font-heading font-bold text-2xl mb-3">{event.title}</h3>
              <p className="text-bg/90 text-sm leading-snug"/*snug as a bug in a rug*/>{event.desc}</p>
            </div>
            <div className="flex items-center gap-2 text-bg mt-4">
              <MapPin size={16} />
              <span className="font-bold text-sm">{event.location}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}