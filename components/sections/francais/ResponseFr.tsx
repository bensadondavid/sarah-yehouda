import FormFr from "./FormFr"
import Image from "next/image"

export default function ResponseFr() {

  return (

    <div className="h-fit w-screen bg-[url('/fond_sarah.webp')] mt-10 rounded-t-[50%_180px] rounded-b-[50%_180px] border-5 border-entry-text/60 py-15 flex flex-col justify-around items-center">
        <Image src={'/oiseau-sarah.png'} alt="oiseau" width={100} height={100} />
        <p className="font-primary text-home-text text-3xl">REPONSE</p>
        <p className="font-elegant text-home-text mb-10">Réponse souhaitée dès réception</p>
        <FormFr />
    </div>

  )
}
