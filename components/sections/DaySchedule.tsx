"use client";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const days = ["Ma 1.6.", "Ti 2.6.", "Ke 3.6.", "To 4.6.", "Pe 5.6.", "La 6.6.", "Su 7.6."];

type Event = {
  time: string;
  title: string;
  desc: string;
  location: string;
  address: string;
  addressURL: string;
  color: string;
  extendedDesc: string
};
const events: Record<number, Event[]> = {
  0: [//ma
    { time: "09.00 - 10.00", title: "Aamujooga", desc: "Aloita päivä rauhassa ja hyvässä seurassa!", location: "Kallion joogahalli", color: "bg-secondary", address: "PLACEHOLDER ADDRESS", addressURL: "https://maps.app.goo.gl/bhsS5cWiukXpEUg2A", extendedDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { time: "14.00 - 16.00", title: "Kaupunkiviljely", desc: "Tervetuloa painamaan kädet multaan keskellä kaupunkia!", location: "Vallilan kaupunkipuutarha", color: "bg-accent", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "18.00 - 20.00", title: "Keramiikkapaja", desc: "Luo omilla käsilläsi ja nauti hetkestä.", location: "Arabian taidekeskus",  color: "bg-secondary/70", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" }
  ],
  1: [ //ti
    { time: "10.00 - 11.00", title: "Kiipeily", desc: "Kokeile kiipeilyä matalalla kynnyksellä Herttoniemen sopivan vaativassa sisäkiipeily- ja boulderointikeskuksessa.", location: "Herttoniemen sisäkiipeilyhalli", color: "bg-secondary/70", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "14.00 - 20.00", title: "Öljyvärimaalaus", desc: "Päästä sisäinen artistisi valloilleen!", location: "Pikku-Huopalahden nuorisotalo", color: "bg-secondary", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "20.00 - 22.00", title: "Jalkapallo", desc: "Tervetuloa pelaamaan jalkapalloa upeaan Pitäjänmäen sisähalliin!", location: "Pitäjänmäen sisähalli", color: "bg-accent", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" }
  ],
  2: [ //ke
    { time: "08.30 - 11.00", title: "Filmivalokuvaus", desc: "Palaa 90-luvulle ja kultaisille filmitaivaille!", location: "Helsingin kuvaamostudio", color: "bg-secondary", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "12.00 - 15.00", title: "Suomalaisen mytologian alkeiskurssi", desc: "Tutustu Suomalaisen mytologian kierteisiin ja kansanperinnön mystisiin saloihin.", location: "Kuuksatie 8b", color: "bg-secondary/70", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "16.00 - 20.00", title: "Tekstiilityön alkeet", desc: "Tekstiilityön alkeissa pääset tutustumaan erilaisiin tekstiilityön muotoihin, kuten ompeluun, päällystämiseen ja nahkatyöhön.", location: "Pitäjänmäen taidekeskus", color: "bg-accent", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" }
  ],
  3: [//to
    { time: "09.00 - 12.00", title: "Klovneria", desc: "Klovneria on sirkus- ja teatteritaidetta live-näyttämöllä. Puhutteleeko sisäinen teatterihenkesi sinua?", location: "Teatteri Kuusali Helsinki", color: "bg-secondary", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "14.00 - 16.00", title: "Verkkosivuohjelmoinnin alkeet", desc: "Tervetuloa oppimaan, kuinka voit luoda aivan omia verkkosivujasi nollasta lähtien. Ei vaadi aikaisempaa ohjelmointikokemusta.", location: "Kodarit Helsinki Pikku-Huopalahti", color: "bg-accent", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "18.00 - 20.00", title: "Pilates", desc: "Tule rentoutumaan Pilatekseen kello 18-20 koulutetun ohjaajan johdolla.", location: "Ole Fit Munkkiniemi",  color: "bg-secondary/70", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" }
  ],
  4: [//pe
    { time: "10.00 - 11.00", title: "Rullaluistelu", desc: "Tervetuloa tutustumaan rullaluisteluun Vallilan mutkikkaassa rullaluisteluhallissa! Aikaisempaa kokemusta tai omia rullaluistimia ei tarvitse.", location: "Vallilan sisärullaluisteluhalli", color: "bg-secondary/70", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "14.00 - 20.00", title: "Koripallo", desc: "Tervetuloa pelaamaan koripalloa matalalla kynnyksellä Vallilaan!", location: "Vallilan sisäkoripallohalli", color: "bg-secondary", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "19.00 - 22.30", title: "Drag", desc: "Päästä sisäinen Bianca Del Riosi valloilleen Drag-maailman valloissa!", location: "Kallion kannusali", color: "bg-accent", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" }
  ],
  5: [ //la
    { time: "05.00 - 08.00", title: "Aamuhölkkä", desc: "Tervetuloa virkistämään aivojasi ja oppimaan varhaisen heräämisen terveydellisistä hyödyistä aamuhölkälle Töölön purujuoksuradalle!", location: "Töölön ulkoharrastuskenttä", color: "bg-secondary", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "11.00 - 15.00", title: "Kitaransoiton alkeet", desc: "Tervetuloa harjoittamaan akustista kitaraa Töölön aikuismusiikkiopistolle.", location: "Töölön aikuismusiikkiopisto", color: "bg-secondary/70", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "16.00 - 21.00", title: "Marjastus", desc: "Tervetuloa marjastamaan iltapäivän kajoon luonnon helmaan!", location: "Riistavuoren metsäalue", color: "bg-accent", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" }
  ],
  6: [//su
    { time: "09.00 - 12.00", title: "Puutarhanhoitoa", desc: "Tervetuloa opettelemaan ja hiomaan taitojasi puutarhanhoidossa!", location: "Vallilan sisäpuutarhakeidas", color: "bg-secondary", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "09.00 - 11.00", title: "Taitoluistelun alkeet", desc: "Tervetuloa taitoluistelun alkeisiin oppimaan luistelutekniikoita ja temppuja!", location: "Ruoholahden sisäjääkenttä", color: "bg-accent", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "12.00 - 15.00", title: "Elokuvatutkimuksen alkeet", desc: "Oletko kiinnostunut elokuvien tekemisen vaiheista tai yksityiskohtien analyysista? Tervetuloa elokuvatutkimuksen alkeisiin!", location: "Vallilan kulttuurihuone",  color: "bg-secondary/70", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "15.00 - 17.00", title: "Shakki", desc: "Tervetuloa pelaamaan shakkia rennossa seurassa Helsingin shakinharrastajien tiloissa!", location: "Helsingin Shakinharrastajat RY", color: "bg-secondary", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER"},
    { time: "15.30 - 19.30", title: "Roolipelit", desc: "Tervetuloa opettelemaan erilaisia roolipelejä ja roolipelien konsepteja matalalla kynnyksellä!", location: "Halfmoon Game Cafe", color: "bg-secondary/70", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" },
    { time: "23.00 - 01.00", title: "Tähtien ja tähtikuvioiden tunnistamista", desc: "Tervetuloa tähtitaivaan kupeen opettelemaan tähtitieteen historiaa ja mystiikkaa.", location: "Tähtiobservatorio Kauha", color: "bg-accent", address: "PLACEHOLDER ADDRESS", addressURL: "PLACEHOLDER URL", extendedDesc: "EXTENDED DESC PLACEHOLDER" }
  ]
};

const eventDescriptionContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const cardDescriptionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function DaySchedule() {
  const [activeDay, setActiveDay] = useState(0)
  const nextDay = () => setActiveDay(i => (i + 1) % days.length);
  const prevDay = () => setActiveDay(i => (i - 1 + days.length)%days.length);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  return (
    <div id = "events" className="w-full -px-[100px] py-10 justify-items-center text-center">
      <h2 className="w-30% mx-auto font-heading font-black leading-[0.8] text-center mt-[100px] mb-[5px]">
      <span className="block min-w-[10vw] text-[clamp(55px,5.5vw,90px)] sm:text-left md:text-left">POP UP</span>
      <span className="block min-w-[14vw] text-[clamp(40px,3vw,70px)] sm:text-center md:text-right">-viikko</span>
    </h2>
    <p className = "items-center text-center text-black font-black leading-[1] mb-[50px]">
        <span className = "block text-[clamp(45px,5vw,82px)] mt-[100px] mb-[35px]">Viikon aikataulu</span>
         <span className = "block tracking-[-1] text-[clamp(20px,1.2vw,45px)]">
            Klikkaa päivää ja löydä sinua kiinnostavat harrastukset. Kaikki tapahtumat ovat maksuttomia.
        </span>
    </p>
      {/*päivänamiskat päivänapit*/}
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
      <AnimatePresence mode="wait">
        <motion.div key={activeDay}
          variants={eventDescriptionContainer}
          initial={{ opacity: 0, x: 75 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -75 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
        {(events[activeDay]??[]).map((event, i) => (
          <motion.div 
          key={i} 
          variants={cardDescriptionVariant}
          className={`${event.color} rounded-2xl p-5 flex flex-col justify-between min-h-[220px] hover:scale-[1.02]`}
          onClick={() => setSelectedEvent(event)}
          >
            <div>
              <p className="text-bg/80 text-sm mb-2">{event.time}</p>
              <h3 className="text-bg font-heading font-bold text-2xl mb-3">{event.title}</h3>
              <p className="text-bg/90 text-sm leading-snug"/*snug as a bug in a rug*/>{event.desc}</p>
            </div>
            <div className="flex items-center gap-2 text-bg mt-4">
              <MapPin size={16} />
              <span className="font-bold text-sm">{event.location}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
    {/*pop up description kortti*/}
    <AnimatePresence>
      {selectedEvent && (
      <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md border-4 border-solid border-secondary overflow-hidden shadow-[0_0px_40px_rgba(0,0,0,0.6)]`}
          >
            <div className="bg-secondary p-6">
              <h2 className="font-heading font-black text-bg sm:text-2xl md:text-4xl leading-tight">
                {selectedEvent.title}
              </h2>
            </div>
            <div className="bg-bg p-6 flex flex-col gap-6 ">
              <p className="text-text/80 leading-relaxed">{selectedEvent.extendedDesc}</p>
              <div>
                <p className="font-heading font-black text-text text-4xl">Milloin?</p>
                <p className="text-text mt-1">{days[activeDay].split(" ")[1] /*hommaa päivämäärän suoraa valitust päiväst*/} · {selectedEvent.time}</p>
              </div>
              <div>
                <p className="font-heading font-black text-text text-4xl">Missä?</p>
                {selectedEvent.location}
                <p>
                  <a className="text-text underline underline-offset-2" 
                  href = {selectedEvent.addressURL} 
                  target="_blank"
                  rel="noopener noreferrer">
                {selectedEvent.address}
                </a>
                </p>
              </div>
              <button onClick={() => setSelectedEvent(null)} className="mt-2 w-full py-3 rounded-xl bg-secondary text-bg font-heading font-bold">
                Sulje
              </button>
            </div>
          </motion.div>
      </>
      )}
    </AnimatePresence>
    </div>
  );
}