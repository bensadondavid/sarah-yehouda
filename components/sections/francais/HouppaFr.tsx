import Image from "next/image"
import Waze from "@/components/ui/Waze"
import SaveTheDate from "@/components/ui/SaveTheDate"

export default function HouppaFr() {

  return (

    <div className="w-screen h-fit bg-[url('/fond_sarah.webp')] rounded-t-[50%_180px] rounded-b-[50%_180px] border-[12px] border-entry-text/60 flex flex-col gap-6 items-center justify-between">
      <Image src={'/kol-sasson-sarah.png'} alt="kol sasson" width={300} height={160} />
      <Image src={'/logo-sarah.webp'} alt="Logo Sarah" width={170} height={170} />
      <div id="noms-famille" className="w-screen h-fit text-[10px] flex flex-row items-stretch justify-around font-primary text-home-text">
        <div className="text-left">
          <p>Mme Michelle Mayer</p>
          <p>Mr&Mme Bruno et Babeth Mayer</p>
        </div>
        <div className="text-right">
          <p>Mme Rachel Teboule</p>
          <p>Mr&Mme Philippe et Annick Jais</p>
        </div>
      </div>
      <p className="w-[80%] h-fit text-home-text font-primary text-sm text-center">Ont la joie de vous faire part du mariage de leurs petits enfants et enfants </p>
      <div className="w-fit h-fit flex flex-col items-center font-elegant text-2xl text-home-text my-10">
        <p>Sarah Simha</p>
        <p className="font-secondary text-sm">&</p>
        <p>Yehouda</p>
      </div>
      <p className="w-[80%] h-fit text-home-text font-primary text-sm text-center">Et seraient honorés de votre présence à la Houppa qui aura lieu B”h</p>
      <p className="w-[80%] h-fit text-home-important font-secondary text-md text-center">LE 21 JUIN 2026<br />À 18H00 PRÉCISES</p>
      <p className="w-[80%] h-fit text-home-important font-secondary text-md text-center">À LA SALLE DESTINO<br />Ha-Pisga St, Shoresh <br />ISRAËL</p>
      <p className="w-[80%] h-fit text-home-text font-elegant text-sm text-center">“En ce jour si spécial, une tendre pensée envers ceux qui nous manquent et qui sont présents dans nos cœurs”</p>
      <Waze name="w-[180px] h-[40px] bg-entry-text text-white rounded-full text-sm font-primary" lat="" long="" />
      <SaveTheDate name="w-[180px] h-[40px] bg-entry-text text-white rounded-full text-sm font-primary" date="" />
    </div>
    
  )
}
