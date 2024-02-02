import { client, urlFor } from "../lib/client"
import { serviceDetailQuery } from "../lib/query"
import { ImCheckboxChecked } from "react-icons/im";
import { ProjectUnderService, ServiceListAside } from ".";
import Image from "next/image";


async function getData(serviceId: string) {
    const data = await client.fetch(serviceDetailQuery(serviceId));

    return data
}

type Params = {
        uniqueService : string
    }

export default async function ServiceContext ({ uniqueService }: Params ) {
    const serviceDetailData: serviceDetailResponse = await getData(uniqueService);

  return (
    <section id="service-detail" className="flex w-[95%] item-center py-8 justify-start flex-col gap-10">
        <div className="w-full overflow-hidden rounded-xl h-[554px] relative">
            <Image
                src={urlFor(serviceDetailData.mainImage).url()}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
                alt="service page banner image"
            />
             <div className=" flex-col items-start absolute bottom-0 left-10 w-[50%]  justify-start gap-4 min-[1004px]:flex hidden md:px-10 rounded-xl p-8 bg-black text-white">
                <p className="text-[30px] md:text-[40px] md:leading-[50px] leading-[40px]">{serviceDetailData.title}</p>
                <p className=" text-[#f7f7f7]/70 font-kumb leading-[26px]">{serviceDetailData.serviceBrief}</p>
            </div>
        </div>
        <div className="flex flex-col items-start w-full  justify-start gap-4 min-[1004px]:hidden md:px-10 rounded-xl p-8 bg-black text-white">
             <p className="text-[30px] md:text-[40px]  font-kumb md:leading-[50px] leading-[40px]">{serviceDetailData.title}</p>
             <p className=" text-[#f7f7f7]/70 font-kumb leading-[26px]">{serviceDetailData.serviceBrief}</p>
        </div>
        <div className="flex flex-col-reverse min-[974px]:flex-row items-center min-[974px]:items-start h-full justify-start gap-8 w-full relative ">
             <ServiceListAside />
            <div className="min-[974px]:w-[65%] w-full  flex flex-col items-start justify-start gap-6">
                    <div className="w-full flex flex-col items-start justify-center gap-6">
                        <p className=" leading-[26px] first-letter:text-[40px] text-[18px]  font-kumb  text-[#525252]">{serviceDetailData.firstPara}</p>
                        <p className=" leading-[26px] font-kumb text-[18px] text-[#525252]">{serviceDetailData.secondPara}</p>
                    </div>
                    <div className="flex flex-col items-start min-[974px]:flex-row w-full justify-center gap-6 min-[974px]:gap-4">
                        <div className=" rounded-xl overflow-hidden w-full min-[974px]:w-1/2 min-[974px]:h-[370px] max-h-[500px]">
                            <Image 
                                src={urlFor(serviceDetailData.secondImage).url()}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                                alt="secondary service image" 
                            />
                        </div>
                        <div className=" flex items-start flex-col w-full min-[974px]:w-1/2 justify-start gap-4">
                            <p className="text-black text-[30px] leading-[35px] ">{serviceDetailData.instinctTitle}</p>
                            <p className="text-[#525252]  font-kumb  ">{serviceDetailData.instinctPara}</p>
                            <div className="flex flex-col items-start justify-center gap-4">
                                {
                                    serviceDetailData.sharedData.map((item, idx) => (
                                        <div key={idx} className="flex justify-start  items-center gap-4">
                                            <ImCheckboxChecked className="text-[30px] text-primary" />
                                            <p className="leading-[26px] text-black">{item}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full items-start justify-start gap-7 flex-col text-black">
                        <div className="flex items-start flex-col justify-start gap-5">
                            <p className="text-[30px] leading-[35px] ">Project(s) Under This Service</p>
                            <p className="text-base leading-[26px] font-kumb  text-[#525252]">
                                The Proof is Here These highlighted projects stand as a testament to our expertise. Through meticulous planning and flawless execution, we bring innovative visions to life as tangible solutions, validated by real-world impacts. The works shown below demonstrate our readiness to take on complex technical challenges and engineer customized results tailored to each client’s unique needs. </p>
                        </div>
                        <ProjectUnderService serviceSlug={serviceDetailData.pageSlug} />
                    </div>
                </div>
        </div>
    </section>
  )
}
