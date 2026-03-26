import ArcheHome from "@/components/sections/ArcheHome"
import HouppaHb from "@/components/sections/hebreu/HouppaHb"
import ResponseHb from "@/components/sections/hebreu/ResponseHb"
import Image from "next/image"
import Link from "next/link"

export default function HomeFr() {

  return (

    <div className="w-fit h-fit flex flex-col items-center overflow-hidden">
      <ArcheHome />
      <HouppaHb />
      <ResponseHb />
      <Image src={'/logo-sarah.webp'} alt="logo sarah" width={150} height={150} className="mt-5" />
      <p className="font-primary text-home-text mb-5"><Link className="italic underline" href="https://azmana.fr">Azmana</Link></p>
    </div>
    
  )
}
