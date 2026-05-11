import Hero from "../components/sections/Hero";
import FooterCom from "../components/sections/Footer";
import Quotes from "../components/sections/Julkkisquotes";
import PopupPage from "../components/sections/PopupPage";
import Kokeilukone from "../components/sections/Gamestart";
import Essee from "../components/sections/Essee";


export default function Home() {
  return (
    <main>
      <Hero />
      <PopupPage />
      <Quotes />
      <Essee />
      <Kokeilukone />
      <FooterCom/>
    </main>
  );
}