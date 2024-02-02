import Image from "next/image";
import { urlFor } from "../lib/client";

interface ContactLocationProps {
    locationsData: contactVital2Main[]
  }

export default function CompanyLocations({ locationsData }: ContactLocationProps) {

  return (
    <section className='w-[95%] flex flex-col items-center pt-20 pb-8 text-black justify-center gap-4'>
        <div className="flex flex-col items-center justify-center gap-7 w-full pb-8">
            <p className="border-b-2 border-primary text-[15px] lg:text-lg lg:leading-8 tracking-wide lg:tracking-wider leading-6">LOCATIONS</p>
             <h2 className=" text-[30px] lg:text-[50px] lg:leading-[60px] leading-[40px]">Work Places</h2>
        </div>
        <div className=" grid items-start justify-items-center gap-6 grid-cols-1 min-[594px]:grid-cols-2 min-[886px]:grid-cols-3 min-[1195px]:grid-cols-4">
            {
                    locationsData.map((item: contactVital2Main, idx: any) => (
                    <div key={idx} className="flex flex-col items-start justify-start gap-4 w-full">
                        <div className="w-full rounded-xl overflow-hidden baba h-[200px]">
                            <Image
                                src={urlFor(item.image).url()}
                                alt={`${item.company}-image`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="text-[20px] leading-[30px]">{item.country}</p>
                            <p className=" text-base leading-[26px] font-kumb text-[#525252]">{item.company}</p>
                            <div className=" flex text-black font-kumb flex-col gap-3 items-start justify-start">
                                <p className="text-lg">Address: <span className="text-[#525252] text-base">{item.address}</span></p>
                                <p className="text-lg">Tel/Fax: <span className="text-[#525252] text-base">{`${item.telephone.telephone1} ${item.telephone.telephone2 ? '/': ''}${item.telephone.telephone2 ? item.telephone.telephone2: ''} `}</span></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
