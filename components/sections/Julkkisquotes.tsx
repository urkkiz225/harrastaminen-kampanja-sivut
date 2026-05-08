import Image from "next/image";

export default function Quotes() {

    return (

        <section className="relative w-full max-w-7xl mx-auto py-20 px-10 bg-[#F7F3EE] min-h-[600px] pb-[200px]">
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

            <div className="absolute -bottom-10 left-[35%] z-30 max-w-xl">
                <p className="font-heading font-bold text-text leading-snug text-[28px] md:text-[34px] xl:text-[40px]">
                    "Nautin <br />
                    <span className="text-[#E63946]">rullaluistelusta,</span><br />
                     se on hyvää vastapainoa politiikalle."
                </p>
            <div className="relative mt-12 group cursor-pointer inline-block right-[60%] pb-[100px]">
                <div className="absolute -left-6 -bottom-2 w-20 h-20 bg-[#FF6B81] rounded-full z-[-1] transition-transform group-hover:scale-110 opacity-80"/>
                <a href="#" className="relative text-2xl font-bold border-b-4 border-[#1A1A1A] pb-1">
                    Lue lisää Niinistön <br /> harrastusfilosofiasta
                </a>
            </div>
        </div>
       

    </section>

    );
}