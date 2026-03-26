import FormHb from "./FormHb"
import Image from "next/image"

export default function ResponseHb() {

  return (

    <div className="h-fit w-screen bg-[url('/fond_sarah.webp')] mt-10 rounded-t-[50%_180px] rounded-b-[50%_180px] border-5 border-entry-text/60 py-15 flex flex-col justify-around items-center text-right font-bsd">
        
        <Image src={'/oiseau-sarah.png'} alt="oiseau" width={100} height={100} />

        <p className="font-hb text-home-text text-3xl">אישור הגעה</p>

        <p className="font-hb text-home-text mb-10">
          נשמח לקבל את תשובתכם בהקדם
        </p>

        <FormHb />

    </div>

  )
}