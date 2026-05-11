import Hero from "../components/sections/Hero";
import FooterCom from "../components/sections/Footer";
import Quotes from "../components/sections/Julkkisquotes";
import PopupPage from "../components/sections/PopupPage";
import Essee from "../components/sections/Essee";
import Kokeilukone from "@/components/sections/Gamestart";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopupPage />
      <Quotes />
      <Essee />
      <Kokeilukone />
      <FooterCom />
    </main>
  );
}