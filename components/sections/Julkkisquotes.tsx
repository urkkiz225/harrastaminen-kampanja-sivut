"use client";

import Image from "next/image";
import { useState } from "react";

export default function Quotes() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <section id="henkilotarinat" className="relative w-full max-w-7xl mx-auto pt-28 mt-70 sm:mt-44 md:mt-32 lg:mt-[-120] mb-10 sm:mb-24 md:mb-72 pb-0 lg:pt-24 lg:pb-[10rem] px-6 bg-[#F7F3EE]">
{/* Muodot ja kuva */}
            <div className="absolute top-10 left-[10%] md:left-[20%] w-[70%] md:w-[40%] aspect-square bg-gradient-to-b from-[#D34A54] to-[#EBC8B4] opacity-80 z-0" />

            <div className="relative md:absolute top-0 md:top-40 right-0 md:right-10 lg:right-20 w-full md:w-[45%] lg:w-[500px] h-auto md:min-h-[400px] lg:h-[450px] z-10 flex flex-col justify-start p-8 md:p-12 bg-gradient-to-b from-[#FFCCA3] to-[#F4A261] mb-6 md:mb-0">
                <h2 className="text-right text-[#E63946] text-[12vw] md:text-5xl lg:text-6xl tracking-[-0.08em] leading-[0.9] mt-4 font-black">
                    SAULI <br /> NIINISTÖ
                </h2>
            </div>  

            <div className="relative z-20 w-full max-w-[320px] md:max-w-[40%] lg:max-w-[450px] mx-auto md:ml-10 shadow-2xl">
                <Image 
                    src="/images/sauli.png" 
                    alt="Sauli rullailee" 
                    width={500} 
                    height={600} 
                    className="object-cover w-full h-auto" />
            </div>
                 
{/* Lainaus */}

            <div className="relative lg:absolute lg:top-110 lg:left-[38%] z-40 w-full lg:max-w-2xl mt-12 lg:mt-0">
                <p className="font-heading font-extrabold text-[#1A1A1A] leading-[1.1] text-[clamp(20px,3vw,60px)]">
                    "Nautin <br />
                    <span className="text-[#E63946]">rullaluistelusta,</span><br />
                     se on hyvää vastapainoa politiikalle."
                </p>
 
             
            <div className="relative mt-8 group cursor-pointer inline-block pb-10 pl-[5%] pt-30 ml-0 md:ml-[-30px] lg:ml-[-350px] lg:-translate-y-25"
                onClick={() => setIsOpen(true)}>
                <div className="absolute -left-2 md:left-60 bottom-2 w-20 md:w-28 h-20 md:h-28 bg-gradient-to-b from-[#D34A54] to-[#EBC8B4] rounded-full z-0 transition-transform group-hover:scale-110 opacity-80"/>
                <button className="relative text-2xl md:text-3xl font-bold pb-1 text-left leading-tight">
                    Lue lisää Niinistön <br /><span className="border-b-3 border-[#1A1A1A] cursor-pointer">harrastusfilosofiasta</span>                   
                </button>

            </div>
        </div>

        {/* Tekstiboksi */}

        {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center">
                <div className="relative bg-[#F7F3EE] w-full max-w-4xl border-4 border-[#E63946] shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto">
                    {/* Pinkki detail */}
                    <div className="w-full  h-10 md:h-14 bg-gradient-to-b from-[#D34A54] to-[#EBC8B4] opacity-80 shrink-0 z-0" />

                    {/* Sulkemisnappi */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-4 text-2xl font-bold hover:scale-110 cursor-pointer z-[120]">
                            x
                    </button>
                    <div className="p-6 md:p-12 space-y-6">

                        <h3 className="relative text-3xl md:text-6xl text-[#E63946] tracking-tight font-black md:text-right pr-[5%] pl-[50%] md:mt-[-70px] inline-block">NIINISTÖN TYYLIIN</h3>

                        <div className="text-lg md:text-xl font-bold leading-relaxed text-[#1A1A1A] space-y-6">
                            <p className="max-w-2xl">Ei ole mahdoton näky, että kansan rakastama ex-presidenttimme lipuu kaupungilla ohi rullaluistimet jalassaan. Millä tavoin harrastuksesi on edistänyt poliittista uraasi, herra Niinistö?</p>
                            <div className="text-[#E63946] pl-[30%] w-[100%]">
                                “Sepä se, ei kai juuri mitenkään. Korkeintaan vetreyttänyt parantaen työkykyä.”
                            </div>
                            <p>Onko kyseessä siis vapaa-ajan intohimoprojekti?</p>
                            <div className="text-[#E63946] pl-[30%] w-[100%] z-10">
                               “No en ihan sellaiseksikaan sitä kutsuisi. Kunhan vain on jotain mukavaa tekemistä töiden jälkeen. Sanoisin harrastavani ihan vain <div className="text-[#F4A261] inline-block">harrastamisen ilosta.</div> Ei tavoitteita, ei paineita, vain rattoisaa rullailua.”
                            </div>
                        </div>
                    </div>
{/* Oranssi aalto ja vikat tekstit */}
                    <div className="relative mt-auto bg-[#f8bf91] p-6 md:p-10 z-0">
{/* Oranssi aalto*/}
                        <div className="absolute top-0 left-0 w-full overflow-visible leading-[0] z-0 transform -translate-y-[40%]">
                            <div className="hds-koros">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="40">
                                <defs>
                                <pattern id="korosOrange" x="0" y="0" width="96" height="95" patternUnits="userSpaceOnUse">
                                        <path fill="#f8bf91" transform="scale(3)" d="m0 5v80h32v-80c-8 0-8-5-16-5s-8 5-16 5z" />
                                </pattern>
                                </defs>
                                <rect fill="url(#korosOrange)" width="100%" height="40"  />
                                </svg>  
                            </div>
                        </div>
                        

                        <div className="text-xl font-bold leading-relaxed text-[#1A1A1A] space-y-4 p-5 z-10">
                            <p>Miten kannustaisit kansalaisia harrastamaan?</p>
                            <div className="text-[#E63946] pl-[30%] w-[100%]">
                             “Ulos vaan. Uutta kokeilemaan. Epäonnistua saa ja pitää, siitäpä sitä oppii. Tärkeintä on tekeminen!”
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        
        )}

        

    </section>

    );
}