
import { client, urlFor } from "../lib/client";
import { aboutOverview } from "../lib/query";
import Image from "next/image"
import { PiPhoneCallFill } from "react-icons/pi";


async function getData() {
    const data = await client.fetch(aboutOverview)
    
    return data
}


export default async function AboutMining() {
    const data: aboutOverviewResponse = await getData()


  return (
    <section className='w-full px-6 flex flex-col mt-[70px] gradient items-center justify-center gap-5 '>
        <div className="flex flex-col justify-start min-[1010px]:flex-row w-full items-center gap-6">
            <div className='w-full flex flex-col items-center justify-start min-[1010px]:w-[60%] gap-4'>
                <h2 className="border-b-2 border-primary capitalize text-left flex self-start text-lg font-medium">About Poweredge</h2>
                <p className="text-[30px] lg:text-[50px] leading-[35px] pb-4 lg:leading-[60px] text-black tracking-wide">{data.aboutOverview.title}</p>
                <p className="text-base font-kumb  leading-[26px] text-[#525252]">{data.aboutOverview.paragraph1}</p>
            </div>
            <div className="w-full min-[1010px]:w-[40%] flex flex-col item-center justify-start gap-4">
                <p className="text-black leading-[26px] ">{data.aboutOverview.paragraph2}</p>
                <div className="w-full rounded-2xl mt-4 overflow-hidden h-[170px]">
                    <Image
                        src={urlFor(data.aboutOverview.image).url()}
                        alt='mining-machine'
                        className="w-full h-full object-cover"
                        width={1000}
                        height={170}
                        priority
                    />
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row  items-center justify-center py-4 px-7 my-4 md:my-7 border gap-1 md:gap-3 rounded-2xl bg-gradient-to-r from-[#0a0b1f] via-[#120c44] to-[#211a64] lg:to-[#0c0c1d]">
            <p className="text-white text-[30px] leading-[40px]">New to Mining Service?</p>
            <div className="flex items-center justify-center gap-2">
                <div
                    className="rounded-full bg-white p-4"
                >
                    <PiPhoneCallFill className="text-primary rotate" fontSize={35} />
                </div>
                <p className="text-white text-[20px] leading-[30px] ">call us on: <span className="text-[30px] leading-[30px] text-primary">{data.aboutOverview.contact}</span></p>
            </div>
        </div>
    </section>
  )
}
