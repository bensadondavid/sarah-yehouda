import Image from "next/image"
import Waze from "@/components/ui/Waze"
import SaveTheDate from "@/components/ui/SaveTheDate"

export default function HouppaHb() {

  return (

    <div className="w-screen h-fit bg-[url('/fond_sarah.webp')] rounded-t-[50%_180px] rounded-b-[50%_180px] border-[12px] border-entry-text/60 flex flex-col items-center justify-between pb-10 text-right font-bsd">
      
      <Image src={'/kol-sasson-sarah.png'} alt="kol sasson" width={350} height={200} className="pt-6" />
      
      <Image src={'/logo-sarah.webp'} alt="Logo Sarah" width={170} height={170} className="-translate-y-12" />

      <div id="noms-famille" className="w-screen h-fit text-[10px] flex flex-row items-stretch justify-around font-hb text-home-text -translate-y-8">
        <div className="text-right">
          <p>מרת מישל מאייר</p>
          <p>מר ומרת ברונו ובבת מאייר</p>
        </div>
        <div className="text-left">
          <p>מרת רחל טבול</p>
          <p>מר ומרת פיליפ ואניק ג׳אייס</p>
        </div>
      </div>

      <p className="w-[80%] h-fit text-home-text font-hb text-sm text-center">
        שמחים להזמינכם לחתונת נכדיהם ובניהם
      </p>

      <div className="w-fit h-fit flex flex-col items-center text-2xl text-home-text my-10">
        <p>שרה שמחה</p>
        <p className="font-hb text-sm">&</p>
        <p>יהודה</p>
      </div>

      <p className="w-[80%] h-fit text-home-text font-hb text-sm text-center pb-6">
        וישמחו לכבד אתכם בנוכחותכם בחופה שתתקיים בע״ה
      </p>

      <p className="w-[80%] h-fit text-home-important font-hb text-md text-center pb-6">
        21 ביוני 2026<br />בשעה 18:00 בדיוק
      </p>

      <p className="w-[80%] h-fit text-home-important font-hb text-md text-center pb-8">
        באולם דסטינו<br />
        רח׳ הפסגה, שורש<br />
        ישראל
      </p>

      <p className="w-[80%] h-fit text-home-text font-hb text-sm text-center pb-8">
        ״ביום מיוחד זה, מחשבה חמה לאלו שאינם איתנו אך נוכחים בליבנו״
      </p>

      <Waze 
        name="w-[180px] h-[40px] bg-entry-text text-white rounded-full text-sm font-hb mb-3" 
        lat="31.794961" 
        long="35.067932" 
        text='Waze'
      />

      <SaveTheDate 
        name="w-[180px] h-[40px] bg-entry-text text-white rounded-full text-sm font-hb" 
        date={[2026, 6, 21, 18, 0]} 
        text="הוסף ליומן"
      />

    </div>
    
  )
}