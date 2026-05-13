'use client'; /*poistuu täält sit ku saadaa peli pystyy*/

export default function PopupWeekInfo() {
  return (
    <div className="relative bg-secondary/10 rounded-2xl p-8 mt-10 w-full">
  
  <h3 className="font-heading font-bold text-text text-lg mb-6">
    Mikä on Pop up -viikko?
  </h3>
 {/*mikä on pop up viikko hieno gridi shitti description (responsiivisuusmaxxed)*/}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pr-0 lg:pr-40 text-sm md:text-lg mt-[55px] mb-[5px]">
    {[{ title: "Kokeile vapaasti", desc: "Yksi viikko, kymmeniä tapoja harrastaa.", accent: "bg-secondary" },
      { title: "Ilman sitoutumista", desc: "Osallistu silloin, kun sinulle sopii.", accent: "bg-accent" },
      { title: "Ilman paineita", desc: "Tule juuri sellaisena kuin olet.", accent: "bg-secondary" },
      { title: "Vain siksi, että se on kivaa", desc: "Löydä tekemisen ilo.", accent: "bg-accent" }
    ].map((item, i) => (
      <div key={i} className="flex flex-col gap-3 text-center">
        <p className="font-heading font-bold text-text">{item.title}</p>
        <div className={`h-1 w-8 ${item.accent} rounded-full mx-auto`} />
        <p className="text-text/70 font-bold text-m">{item.desc}</p>
      </div>
    ))}
  </div>
  {/*ympyr*/}
  <a href = "/kokeile" target="_blank" rel="noopener noreferrer">
  <div className="absolute md:right-[-20px] md:bottom-[-20px] w-36 h-36 bg-accent rounded-full flex flex-col items-center justify-center text-center p-4 cursor-pointer sm:scale-[1.3] md:scale-[1.4]">
    <p className="font-heading font-bold text-text text-sm leading-tight">
      "mikä näistä sopis mulle?"
    </p>
    <span className="text-text font-black text-xl mt-1">→</span>
  </div>
  </a>
</div>
  );
}