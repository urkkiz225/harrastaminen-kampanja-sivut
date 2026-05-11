import DaySchedule from "./DaySchedule";
import PopupWeekInfo from "./PopupWeekInfo";

export default function PopupPage() {
  return (
    <section className="bg-bg py-16 px-6">
    <div className = "flex justify-center items-center text-center">
        <span className="block m-[12vw] scale-[1.3]"> {/*margin+scale combo vähä cursed mut tajusin liian myöhään et tein kaiken ihan liian pieneks hihhihii*/}
            <DaySchedule/>
            <PopupWeekInfo/>
        </span>
    </div>
    </section>
  );
}