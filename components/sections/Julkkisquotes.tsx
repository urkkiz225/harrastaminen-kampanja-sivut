"use client";

import Image from "next/image";
import { useState } from "react";

export default function Quotes() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <section id="henkilotarinat" className="relative w-full max-w-7xl mx-auto py-20 px-10 bg-[#F7F3EE] min-h-[600px] pb-[200px]">
{/* Muodot ja kuva */}
            <div className="absolute top-10 left-[20%] w-[500px] h-[400px] bg-gradient-to-b from-[#D34A54] to-[#EBC8B4] opacity-80 z-0" />

            <div className="absolute top-40 right-20 w-[500px] h-[450px] z-10 flex flex-col justify-start p-12 bg-gradient-to-b from-[#FFCCA3] to-[#F4A261]">
                <h2 className="text-right text-[#E63946] text-6xl tracking-[-0.08em] leading-[0.9] mt-4">
                    SAULI <br /> NIINISTÖ
                </h2>
            </div>  

            <div className="relative z-20 w-[450px] ml-10 shadow-2xl">
                <Image 
                    src="/images/sauli.png" 
                    alt="Sauli" 
                    width={500} 
                    height={600} 
                    className="object-cover w-full h-auto" />
            </div>
                 
{/* Lainaus */}

            <div className="absolute -bottom-10 left-[36%] z-30 max-w-xl">
                <p className="font-heading font-extrabold text-text leading-snug text-[28px] md:text-[34px] xl:text-[40px]">
                    "Nautin <br />
                    <span className="text-[#E63946]">rullaluistelusta,</span><br />
                     se on hyvää vastapainoa politiikalle."
                </p>
 
             
            <div className="relative mt-12 group cursor-pointer inline-block right-[60%] bottom-8 pb-[100px]"
                onClick={() => setIsOpen(true)}>
                <div className="absolute left-55 bottom-15 w-30 h-30 bg-gradient-to-b from-[#D34A54] to-[#EBC8B4] rounded-full z-0 transition-transform group-hover:scale-110 opacity-80"/>
                <button className="relative text-3xl font-bold pb-1">
                    Lue lisää Niinistön <br /><span className="border-b-3 border-[#1A1A1A] cursor-pointer">harrastusfilosofiasta</span>
                     
                </button>
            </div>
        </div>

{/* Tekstiboksi */}
        {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center">
                <div className="relative bg-[#F7F3EE] max-w-2xl border-4 border-[#E63946] shadow-2xl flex flex-col min-h-[500px]">
                    {/* Pinkki detail */}
                    <div className="w-[100%]  h-[20%] min-h-[50px] bg-gradient-to-b from-[#D34A54] to-[#EBC8B4] opacity-80 z-0" />

                    {/* Sulkemisnappi */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-[2%] right-4 text-2xl font-bold hover:scale-110 cursor-pointer">
                            x
                    </button>
                    <h3 className="text-4xl text-[#E63946] tracking-[-0.07em] pl-[50%] -mt-5 z-0">NIINISTÖN TYYLIIN</h3>
                    <div className="text-xl font-bold leading-relaxed text-[#1A1A1A] space-y-4 p-5">
                        <p>Ei ole mahdoton näky, että kansan rakastama ex-presidenttimme lipuu kaupungilla ohi rullaluistimet jalassaan. Millä tavoin harrastuksesi on edistänyt poliittista uraasi, herra Niinistö?</p>
                        <div className="text-[#E63946] pl-[30%] w-[100%]">
                            “Sepä se, ei kai juuri mitenkään. Korkeintaan vetreyttänyt parantaen työkykyä.”
                        </div>
                        <p>Onko kyseessä siis vapaa-ajan intohimoprojekti?</p>
                         <div className="text-[#E63946] pl-[30%] w-[100%]">
                            “No en ihan sellaiseksikaan sitä kutsuisi. Kunhan vain on jotain mukavaa tekemistä töiden jälkeen. Sanoisin harrastavani ihan vain <div className="text-[#F4A261] inline-block">harrastamisen ilosta.</div> Ei tavoitteita, ei paineita, vain rattoisaa rullailua.”
                        </div>
                    </div>
{/* Oranssi aalto ja vikat tekstit */}
                    <div className="text-[#E63946]">
                        <div className="top-[100px] z-0 -pb-[30%]">
                            <p>jajaaaaa</p>
                        </div>
                        <div className="w-full overflow-hidden leading-[0]">
                            <div className="hds-koros">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="70%">
                                <defs>
                                <pattern id="korosOrange" x="0" y="0" width="96" height="95" patternUnits="userSpaceOnUse">
                                        <path fill="#F4A261" transform="scale(3)" d="m0 5v80h32v-80c-8 0-8-5-16-5s-8 5-16 5z" />
                                </pattern>
                                </defs>
                                <rect fill="url(#korosOrange)" width="100%" height="80"  />
                                </svg>  
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        
        )}

    </section>

    );
}