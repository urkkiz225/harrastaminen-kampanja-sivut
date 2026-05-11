import Image from "next/image";
import Link from "next/link";



const FooterCom = () => {
    return (
        <footer className="w-full">
            <div className="w-full overflow-hidden leading-[0] pt-10">
                <div className="hds-koros">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="40">
                        <defs>
                            <pattern id="korosBasic" x="0" y="0" width="96" height="85" patternUnits="userSpaceOnUse">
                                <path fill="#E63946" transform="scale(3)" d="m0 5v80h32v-80c-8 0-8-5-16-5s-8 5-16 5z" />
                            </pattern>
                        </defs>
                        <rect fill="url(#korosBasic)" width="100%" height="85"  />
                </svg>
            </div>
        
            <div className="bg-[#E63946] p-8 flex flex-col gap-8">
        {/* Logo ja linkit */}
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <div>
                    <Image 
                        src="/images/helsinkiwhite.png" 
                        alt="Helsinki" 
                        width={120} 
                        height={60} 
                        className="object-contain" />
                    </div>


                {/* Linkit */}
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 px-0 md:px-10">
                    <Link
                        href="https://www.hel.fi"
                        className="underline text-[#F7F3EE] hover:text-[#F4A261] font-bold text-sm md:text-base lg:text-lg;">
                        Kaupungin nettisivut
                    </Link>

                    <Link
                        href="https://www.instagram.com/helsinki/"
                        className="underline text-[#F7F3EE] hover:text-[#F4A261] font-bold text-sm md:text-base lg:text-lg;">
                        Instagram
                    </Link>

                    <Link
                        href="https://www.facebook.com/helsinginkaupunki"
                        className=" underline text-[#F7F3EE] hover:text-[#F4A261] font-bold text-sm md:text-base lg:text-lg;">
                        Facebook
                    </Link>

                    <Link
                        href="https://palautteet.hel.fi/"
                        className=" underline text-[#F7F3EE] hover:text-[#F4A261] font-bold text-sm md:text-base lg:text-lg;">
                        Anna palautetta
                    </Link>
                    </div>
                </div>
            
            {/*Viiva*/}
            <div className="w-full h-[2px] bg-[#F7F3EE]"/>

            {/*Alimmat tekstit*/}
            <div className="text-[#F7F3EE] text-sm flex justify-between items-center">
                <p>© Helsingin kaupunki 2026</p>
                <p>© VJP / VDM 2026</p>
            </div>
            </div>
        </div>
    </footer>
    )
}

export default FooterCom;