import { client } from "../lib/client"
import { OperationsOverview } from "../lib/query";
import Image from "next/image";
import map from "@/public/map.png";
import { AnimateFigure } from ".";

async function getData() {
    const data = await client.fetch(OperationsOverview)

    return data
}

export default async function HomeOperatons() {
    const OperationData: operationResponse = await getData()

  return (
    <section className="flex w-[95%] item-center border-t-2 my-4 border-black h-max justify-center py-4 md:py-6 lg:py-7 flex-col min-[1300px]:flex-row">
        <div className="flex flex-col w-full min-[1300px]:w-1/2 justify-center items-start gap-4 p-4">
            {
                OperationData.operations.map((item, idx) => (
                    <div key={idx} className="flex justify-center items-start py-6 gap-4">
                        <AnimateFigure item={item} />
                        <div className="flex flex-col justify-center pl-3 items-start gap-4">
                            <p className="text-[20px] leading-[30px] ">{item.operation}</p>
                            <p className="text-[#525252] leading-[26px]">{item.operationDetail}</p>
                        </div>
                    </div>
                ))
            }    
        </div>
        <div className="min-[1300px]:w-1/2 hidden py-4 min-[758px]:flex h-full">
            <Image
                src={map}
                alt="world-map"
                width={1000}              
                height={500}
                className="w-full h-full object-contain min-[1300px]:object-cover "
            />   
        </div>
    </section>
  )
}
