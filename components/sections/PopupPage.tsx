import DaySchedule from "./DaySchedule";
import PopupWeekInfo from "./PopupWeekInfo";

export default function PopupPage() {
  return (
    <section id="aikataulu" className="bg-bg py-16 px-6 overflow-x-clip">
    <div className = "flex justify-center items-center text-center ">
        <span className="block m-[13vw] mt-[4vw] scale-[1.2]"> {/*margin+scale combo vähä cursed mut tajusin liian myöhään et tein kaiken ihan liian pieneks hihhihii*/}
            <DaySchedule/>
            <PopupWeekInfo/>
        </span>
    </div>
    </section>
  );
}