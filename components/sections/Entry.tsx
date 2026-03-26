/* eslint-disable react/no-unescaped-entities */
import CountDown from "../ui/CountDown"
import Image from "next/image"
import Link from "next/link"

export default function Entry({link, textLink, direction}: {link:string, textLink: string, direction:string}) {

  return (

    <div className="w-screen h-screen bg-[url('/fond_sarah.webp')] flex justify-center items-center relative z-20">
      <p className="absolute top-4 right-4 text-entry-text font-bsd">בס"ד</p>
        <div className="w-[80%] h-[80%] bg-white rounded-t-[50%_170px] flex flex-col items-center justify-around">
          <Image src={'/logo-sarah.webp'} alt="Logo Sarah" width={200} height={200} />
          <CountDown text={direction}/>
          <Link href={link || '/'} className="px-4 py-2 bg-entry-bg text-entry-text text-lg font-primary rounded-full">{textLink}</Link>
        </div>
    </div>

  )
}
