import { MdArrowDownward } from "react-icons/md";
import { client } from "../lib/client"
import { serviceDetailQuery } from "../lib/query"

async function getData(serviceId: string) {
    const data = await client.fetch(serviceDetailQuery(serviceId));

    return data
}

type Params = {
        uniqueService : string
    }
  

export default async function ServiceAlpha({ uniqueService }: Params) {
    const serviceDetailData: serviceDetailResponse = await getData(uniqueService);

  return (
    <section className='w-[95%] flex items-center pt-20 pb-8 justify-center gap-4'>
        <div className='flex items-center w-full border-b pb-10 border-black relative justify-center' >
            <p className="min-[758px]:text-[70px] text-center leading-[50px] text-[40px] min-[758px]:leading-[80px]">{serviceDetailData.title}</p>                             
            <a href="#service-detail" className='bg-primary p-3 text-white font-bold rounded-lg absolute -bottom-6 left-1/2'>
                <MdArrowDownward fontSize={20} />
            </a>
        </div>
    </section>
  )
}
