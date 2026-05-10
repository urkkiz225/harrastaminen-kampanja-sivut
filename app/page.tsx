import Hero from "../components/sections/Hero";
import PopupPage from "../components/sections/PopupPage";

export default function Home() {
  return (
    <main>
      <Hero />
      <span className = "mt-[50px]">
        <PopupPage/>
      </span>
    </main>
  );
}
