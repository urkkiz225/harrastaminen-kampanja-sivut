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
    { time: "09.00 - 10.00", title: "Aamujooga", desc: "Aloita päivä rauhassa ja hyvässä seurassa!", location: "Joogastudio Pranama", color: "bg-secondary", address: "Kolmas linja 28, 00530 Helsinki", addressURL: "https://www.google.com/maps/place/Pranama+Helsinki/@60.1840362,24.942147,17z/data=!3m1!4b1!4m6!3m5!1s0x46920a2af4c31d2b:0x88e4b7602266fbe9!8m2!3d60.1840362!4d24.9447219!16s%2Fg%2F11clzf_rf9?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Tule herättelemään kehosi ja mielesi lempeällä aamujoogalla. Tunti koostuu helpoista liikkeistä ja hengitysharjoituksista, jotka antavat tyynen ja energisen alun päivään. Tunti sopii erinomaisesti kaikille, aikaisempaa kokemusta ei tarvita."},
    { time: "14.00 - 16.00", title: "Kaupunkiviljely", desc: "Tervetuloa upottamaan kädet multaan keskellä kaupunkia!", location: "Vallilan siirtolapuutarha", color: "bg-accent", address: "Elisabeth Kochin tie 1, 00550 Helsinki", addressURL: "https://www.google.com/maps/place/Vallilan+siirtolapuutarha/@60.2001068,24.9556297,17z/data=!3m1!4b1!4m6!3m5!1s0x4692099c04c0d3d3:0xc4a4ef434455d8b3!8m2!3d60.2001068!4d24.9582046!16s%2Fg%2F11fy12_rcq?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Tervetuloa oppimaan viljelyn saloja ja nauttimaan luonnon läheisyydestä keskellä kaupunkia. Tapaamisissa hoidamme yhteistä hyötypuutarhaa, istutamme uutta ja jaamme vinkkejä kotiviljelyyn. Ota mukaan omat hanskat tai lainaa meiltä – pääasia on tekemisen meininki." },
    { time: "18.00 - 20.00", title: "Keramiikkapaja", desc: "Luo omilla käsilläsi ja nauti hetkestä.", location: "Arabian taidekeskus",  color: "bg-secondary/70", address: "Arabia, Hämeentie 135 A, 00560 Helsinki", addressURL: "https://www.google.com/maps/place/Arabia135/@60.2085859,24.9753133,18.47z/data=!4m6!3m5!1s0x469209a0a20844c5:0xaa2142c815c75b99!8m2!3d60.2085627!4d24.9764878!16s%2Fg%2F11g9g1z0wk?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Uppoudu saven muotoiluun ja nauti luovasta tekemisestä. Keramiikkapajassa voit valmistaa omia pieniä käyttö- tai koriste-esineitä ohjatusti ja rennossa ilmapiirissä. Materiaalit löytyvät paikan päältä." }
  ],
  1: [ //ti
    { time: "10.00 - 11.30", title: "Kiipeily", desc: "Huipulla tuulee! Tule kokeilemaan kiipeilyä matalalla kynnyksellä ja haastamaan itsesi.", location: "Herttoniemen sisäkiipeilyhalli", color: "bg-secondary/70", address: "Mekaanikonkatu 15 A, 00880 Helsinki", addressURL: "https://www.google.com/maps/place/BK+Herttoniemi+-+Boulderkeskus/@60.2038228,25.0455216,17z/data=!3m1!4b1!4m6!3m5!1s0x4692092fb688eb27:0x7f883bd3b3658241!8m2!3d60.2038228!4d25.0480965!16s%2Fg%2F1pzs83x20?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Tule haastamaan itsesi ja kokeilemaan kiipeilyä turvallisessa ympäristössä. Herttoniemen hallilla pääset testaamaan seinäkiipeilyä ja boulderointia omaan tahtiisi sopivilla reiteillä. Ohjaajat opastavat alkuun, joten aiempaa kokemusta ei tarvita!" },
    { time: "16.00 - 18.30", title: "Öljyvärimaalaus", desc: "Päästä sisäinen artistisi valloilleen!", location: "Pikku-Huopalahden nuorisotalo", color: "bg-secondary", address: "Hilda Flodinin aukio 1, 00300 Helsinki", addressURL: "https://www.google.com/maps/place/Pikku+Huopalahden+nuorisotalo/@60.2013343,24.8928156,17z/data=!4m6!3m5!1s0x469209f9f49a7d63:0xa24ff100f8c3513!8m2!3d60.2013343!4d24.8953905!16s%2Fg%2F11c0r5wh5v?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Päästä mielikuvituksesi valloilleen. Tässä pajassa pääset tutustumaan öljyvärimaalauksen tekniikoihin ja työstämään omaa teostasi asiantuntevassa ohjauksessa. Kaikki tarvittavat välineet ja kankaat odottavat sinua valmiina." },
    { time: "20.00 - 22.00", title: "Jalkapallo", desc: "Tervetuloa pelaamaan jalkapalloa upeaan Jätkänsaaren liikuntapuistoon!", location: "Jätkänsaaren liikuntapuisto", color: "bg-accent", address: "Hyväntoivonkatu 3, 00220 Helsinki", addressURL: "https://www.google.com/maps/place/Jätkäsaaren+tekonurmi/@60.1546494,24.9159435,17z/data=!4m6!3m5!1s0x46920bd855b17d23:0x7b9d1b14376c0765!8m2!3d60.1548797!4d24.9182595!16s%2Fg%2F11qql49wty?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Nappaa sisäpelikengät mukaan ja suuntaa Jätkänsaaren kentälle nauttimaan urheilun huumasta ja mahtavasta pelitunnelmasta! Pelaamme rennolla otteella ja hyvällä sykkeellä kaikille avoimia pelejä. Tärkeintä on liikkuminen ja yhdessä tekeminen, ei lopputulos." }
  ],
  2: [ //ke
    { time: "08.00 - 11.00", title: "Filmivalokuvaus", desc: "Palaa 90-luvulle ja kultaisille filmitaivaille!", location: "Suomen valokuvataiteen museo", color: "bg-secondary", address: "Kaapeliaukio 3, 00180 Helsinki", addressURL: "https://www.google.com/maps/place/Suomen+valokuvataiteen+museo/@60.1619687,24.9050366,18z/data=!3m1!5s0x469209426b8c0c87:0x70caa485cd370a5a!4m6!3m5!1s0x46920a4f50f635c7:0xa999c4e2806ea7de!8m2!3d60.1619687!4d24.9056803!16s%2Fg%2F120pgsx2?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Lähde aikamatkalle analogisen valokuvauksen maailmaan. Tässä työpajassa opit filmikameran peruskäyttöä, valottamisen taitoa ja filmille kuvaamisen erityispiirteitä. Pääset näkemään, miten kuvat heräävät eloon aidolla filmillä. Saat kurssin päätteeksi mukaan itse ottamasi kuvan muistoksi." },
    { time: "12.00 - 15.00", title: "Suomalaisen mytologian alkeiskurssi", desc: "Mitä esi-isämme uskoivat? Lähde löytöretkelle muinaissuomalaisuuden pariin.", location: "Helsingin työväenopisto", color: "bg-secondary/70", address: "Helsinginkatu 26, 00101 Helsinki", addressURL: "https://www.google.com/maps/place/Helsingin+työväenopisto/@60.1863457,24.946545,17z/data=!3m1!4b1!4m6!3m5!1s0x4692098041c68be3:0x3e37d0ff74a72c1b!8m2!3d60.1863457!4d24.9491199!16s%2Fg%2F11cmwvf0j4?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Sukella syvälle suomalaiseen kansanperinteeseen ja muinaisiin uskomuksiin. Tunnilla tutustumme kiehtoviin tarinoihin metsän hengistä, loitsuista ja muinaisista sankareista. Tämä on täydellinen hetki pysähtyä menneen ajan mystiikan äärelle ja oppia juuristamme." },
    { time: "16.00 - 20.00", title: "Tekstiilityön alkeet", desc: "Tuunaa, ompele ja muotoile – kokeile tekstiilitöitä rohkeasti! Saat vinkit ja välineet omien ideoidesi toteuttamiseen.", location: "Taidesukellus - Ateljee Kamppi", color: "bg-accent", address: "Perhonkatu 3, 00100 Helsinki", addressURL: "https://www.google.com/maps/place/Taidesukellus+-+Ateljee+Kamppi/@60.1702501,24.922552,17z/data=!3m1!4b1!4m6!3m5!1s0x46920b62130970db:0xac112b4f36698998!8m2!3d60.1702501!4d24.9251269!16s%2Fg%2F11jsf145jy?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Tule löytämään käsillä tekemisen ilo ja oppimaan uusia taitoja. Pajassa tutustumme monipuolisesti eri tekniikoihin, kuten ompeluun ja nahan työstämiseen, rennossa ja kannustavassa ilmapiirissä. Voit toteuttaa omia pieniä projekteja tai vain tulla kokeilemaan, mikä tekniikka tuntuu omimmalta." }
  ],
  3: [//to
    { time: "10.00 - 12.00", title: "Klovneria", desc: "Klovneria on sirkus- ja teatteritaiteen muoto, joka perustuu leikkiin, vuorovaikutukseen ja usein fyysiseen, sanattomaan komiikkaan. Heittäydy rohkeasti mukaan!", location: "Kellariteatteri Helsinki", color: "bg-secondary", address: "Liisankatu 27, 00170 Helsinki", addressURL: "https://www.google.com/maps/place/Kellariteatteri/@60.1741422,24.9492859,17z/data=!3m1!4b1!4m6!3m5!1s0x46920bd18619ca43:0xb52c57330fdadd39!8m2!3d60.1741422!4d24.9518608!16s%2Fg%2F122t180r?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Löydä sisäinen klovnisi ja anna naurun viedä! Tässä työpajassa tutustumme klovnerian perusteisiin, kuten läsnäoloon, mokaamisen taitoon ja yleisökontaktiin erilaisten hauskojen harjoitusten kautta. Aikaisempaa kokemusta esiintymisestä ei tarvita – riittää, että tulet paikalle avoimin mielin ja valmiina pitämään hauskaa!" },
    { time: "14.00 - 16.00", title: "Verkkosivuohjelmoinnin alkeet", desc: "Laita bittijonot järjestykseen ja katso, kuinka ideasi heräävät eloon.", location: "Suomen Koodikoulu", color: "bg-accent", address: "Mannerheimintie 15, 00260 Helsinki", addressURL: "https://www.google.com/maps/place/Suomen+Koodikoulu/@60.1809478,24.92649,17z/data=!3m1!4b1!4m6!3m5!1s0x469209f7e7dcd587:0x5c2d2f634e9ce53!8m2!3d60.1809478!4d24.9290649!16s%2Fg%2F11fzfbj98y?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Oletko miettinyt, mitä verkkosivujen taustalla tapahtuu? Tässä työpajassa otamme ensiaskeleet koodauksen maailmaan ja kokeilemme, miten yksinkertainen sivu rakentuu. Opit ymmärtämään ohjelmoinnin perusperiaatteita selkeästi ja käytännönläheisesti ammattilaisten opastuksella. Et tarvitse aiempaa kokemusta – uteliaisuus riittää!" },
    { time: "18.00 - 20.00", title: "Pilates", desc: "Tule rentoutumaan pilatekseen koulutetun ohjaajan johdolla.", location: "Pilates Circle Helsinki",  color: "bg-secondary/70", address: "Työpajankatu 10 A 4. krs, 00580 Helsinki", addressURL: "https://www.google.com/maps/place/Pilates+Circle-studio/@60.1882814,24.9746896,17z/data=!3m1!4b1!4m6!3m5!1s0x469209707bd5d421:0xd50c09fbd802b8f!8m2!3d60.1882814!4d24.9772645!16s%2Fg%2F11dzd8d5nq?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", extendedDesc: "Vahvista kehoasi ja huolla mieltäsi Pilates-tunnilla. Keskitymme syvien lihasten hallintaan, hyvään ryhtiin ja hallittuun hengitykseen koulutetun ohjaajan johdolla. Tunti sopii kaikentasoisille liikkujille, ja liikkeet tehdään omaa kehoa kuunnellen. Ota mukaan mukavat vaatteet ja tule nauttimaan rauhallisesta, mutta tehokkaasta treenistä!" }
  ],
  4: [//pe
    { time: "10.00 - 11.00", title: "Rullaluistelu", desc: "Nappaa rullat alle ja anna vauhdin viedä – löydä uusi tapa liikkua ja pitää hauskaa!", location: "Rulla-Espoo Ry", color: "bg-secondary/70", address: "Kaskimaa 4, 02340 Espoo", addressURL: "https://maps.app.goo.gl/p6FecDcA5VzqHUbt6", extendedDesc: "Tule tutustumaan rullaluistelun ihanaan maailman Espoossa säässä suojalta sisärullaluisteluhallissa! Omia rullaluistimia ei tarvita. Onko sinusta tasapainottelemaan tässä luistelun kesäisessä sukulaisessa!" },
    { time: "14.00 - 20.00", title: "Koripallo", desc: "Tervetuloa pelaamaan koripalloa matalalla kynnyksellä Vallilaan!", location: "Pasilan urheiluhalli", color: "bg-secondary", address: "Radiokatu 22, 00240 Helsinki", addressURL: "https://maps.app.goo.gl/cz5dRM9N8sgLHzqQA", extendedDesc: "Tervetuloa pelaamaan koripalloa rennolla mutta urheilullisella seuralla pasilan upealle urheiluhallille! Alan ammattilaiset ohjaavat sinua parantamaan omaa kovaa peliäsi - onko sinusta tulemaan tiimisi voittokeulahahmo? Omat urheiluvarusteet tarvittava." },
    { time: "19.00 - 22.30", title: "Drag", desc: "Päästä sisäinen Bianca Del Riosi valloilleen Drag-maailman valloissa!", location: "Peacock Theatre", color: "bg-accent", address: "Linnanmäen Huvipuisto, Tivolikuja 1, 00510 Helsinki", addressURL: "https://maps.app.goo.gl/fkRrqubQtfxtiuEW8", extendedDesc: "Tervetuloa tutustumaan Drag-maailmaan Peacock Theaterin upeissa tiloissa! Pääset tutustumaan dragin historiaan, kulttuuriin, keulakuviin ja itseilmaisun jaloon lajiin! Saavu siis ujostelematta Linnanmäen Peacock Theateriin avamaan itsellesi ovia!" }
  ],
  5: [ //la
    { time: "05.00 - 08.00", title: "Aamuhölkkä", desc: "Tervetuloa virkistämään aivojasi ja oppimaan varhaisen heräämisen terveydellisistä hyödyistä aamuhölkälle Vantaan purujuoksuradalle!", location: "Vantaan purujuoksurata", color: "bg-secondary", address: "Huuhkajatie 4, 01450 Vantaa", addressURL: "https://maps.app.goo.gl/pJuJ7JZonfs5sPEa6", extendedDesc: "Virkistä itseäsi upean aamuisella hölkällä! Pääset ihastelemaan aikaista kesäauringonnousua rennolla tahdilla hölkäten! Ohjaajat tarjoavat kanssa matkaevästä, ja reitillä pidetään nuotiotauko aamun hämyisessä hiljaisuudessa." },
    { time: "11.00 - 15.00", title: "Kitaransoiton alkeet", desc: "Tervetuloa harjoittamaan akustista kitaraa Töölön musiikkiopistolle.", location: "Töölön musiikkiopisto", color: "bg-secondary/70", address: "Mannerheimintie 15 b A, 00260 Helsinki", addressURL: "https://maps.app.goo.gl/RtHD7sM2ceGgWBAv8", extendedDesc: "Oletko ikinä halunnut opetella soittamaan kitaraa? Nyt sinulla on mahdollisuus tutustua kitaran alkeisiin Töölön musiikkiopiston tiloissa hyvässä seurassa ja vielä paremman opettajan kanssa. Aikaisempaa kokemusta ei ollenkaan vaadita, ja kitaran voit saada lainaan opistolta." },
    { time: "23.00 - 01.00", title: "Tähtien ja tähtikuvioiden tunnistamista", desc: "Tervetuloa tähtitaivaan kupeen opettelemaan tähtitieteen historiaa ja mystiikkaa.", location: "Helsinki observatory", color: "bg-accent", address: "Kopernikuksentie 1, 00130 Helsinki", addressURL: "https://maps.app.goo.gl/t8SryfpUrYBm37Ne8", extendedDesc: "Tule oppimaan tähdistä, tähtitaivaasta, tähtien mystiikasta ja tähtien tärkeydestä historian aikana! Helsingin observatorio antaa upeat puitteet tähtien ihasteluun, ja Helsingin yliopiston professorit osaavat pienimmätkin yksityiskohdat tähdistä." }
  ],
  6: [//su
    { time: "09.00 - 12.00", title: "Shakki", desc: "Tervetuloa pelaamaan shakkia rennossa seurassa Helsingin shakkiklubin tiloissa!", location: "Helsingin Shakkiklubi", color: "bg-secondary", address: "Annankatu 26, 00100 Helsinki", addressURL: "https://maps.app.goo.gl/TjAJTNirym8WyWWE8", extendedDesc: "Onko sinusta haastamaan vastustajasi shakin upeassa maailmassa? Nappaa valkomusta pelilauta tutuin ottein haltuusi ja tule päihittämään vastustajasi shakin jalossa lajissa Helsingin shakkiklubilla 7.6.!"},
    { time: "13.30 - 16.30", title: "Roolipelit", desc: "Tervetuloa opettelemaan erilaisia roolipelejä ja roolipelien konsepteja matalalla kynnyksellä!", location: "Halfmoon Game Cafe", color: "bg-secondary/70", address: "Keskuskatu 3 A, 00100 Helsinki", addressURL: "https://maps.app.goo.gl/o9JP8DxeUb6w25Tr8", extendedDesc: "Kiinnostavatko sinua roolipelit ja hämyisten pelisessioiden kiehtova maailma? Sinulla on oiva mahdollisuus saapua nyt 7.6. Halfmoon Game Cafelle Kuninkaantielle tutustumaan roolipeleihin alan ammattilaisten johdolla!" },
    { time: "16.00 - 21.00", title: "Marjastus", desc: "Tervetuloa marjastamaan iltapäivän kajoon luonnon helmaan!", location: "Riistavuoren metsäalue", color: "bg-accent", address: "Riistavuorenkuja", addressURL: "https://maps.app.goo.gl/2P9Qmw8LRnmctAVZ8", extendedDesc: "Tule nauttimaan alkukesän marjojen sadosta tai muuten vain nauttimaan luonnosta Riistavuoren suurelle metsäalueelle harrastusviikon loppupamaukseksi. Riistavuoren metsä on puoliksi suojeltua aluetta, joten saat varmasti olla rauhassa tämän metsen siimeksissä vain jonkin ajan marssintamatkan päässä!" }
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