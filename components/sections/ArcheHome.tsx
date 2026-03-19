/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function ArcheHome() {

  return (

    <div className="h-screen w-screen flex items-end bg-[url('/fond_sarah.webp')] relative">
        <p className="absolute top-4 right-4 text-entry-text font-bsd">בס"ד</p>
        <div className="w-screen h-[90%] rounded-t-[50%_170px] bg-white flex flex-col items-center justify-around pt-15">
            <Image src={'/logo-sarah.webp'} alt="Logo Sarah" width={220} height={220} />
            <div className="w-fit h-fit flex flex-col items-center font-elegant text-2xl text-home-text mt-10">
                <p>Sarah Simha</p>
                <p className="font-secondary text-sm">&</p>
                <p>Yehouda</p>
            </div>
            <ChevronDown className="text-[#CAB696] w-15 h-15" />
        </div>
    </div>

  )
}
