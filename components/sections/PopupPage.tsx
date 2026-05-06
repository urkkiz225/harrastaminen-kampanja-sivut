import Image from "next/image";

export default function PopupPage() {
  const days = ["ma pvm", "ti", "ke", "to", "pe", "la", "su"];

  return (
    <section className="bg-bg py-16 px-6">
    <h2 className="w-[max(20%,300px)] mx-auto font-heading font-black leading-[0.8] text-center mt-[75px] mb-[30px]">
        <span className="block text-[clamp(55px,5.5vw,90px)]">POP UP</span>
        <span className="block text-[clamp(40px,3vw,70px)] text-right">-viikko</span>
    </h2>
    <p className = "items-center text-center m-[0px] text-black text-[clamp(20px,1.2vw,45px)] font-black leading-[1]">
        <span className = "block tracking-[-1]">
            Yksi viikko, kymmeniä tapoja harrastaa.
            Ilman sitotutumista.
            Ilman paineita.
        </span>
        <span className = "block text-[clamp(44px,4.5vw,80px)] m-[50px]">Viikon Aikataulu</span>
    </p>
    </section>
  );
}