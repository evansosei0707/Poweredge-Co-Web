import { ClientSlider } from "."
import { client } from "../lib/client";
import { clientOverview } from "../lib/query";

async function getData() {
    const data = await client.fetch(clientOverview);

    return data;
}

export default async function CustomerClient() {
    const clientData: clientResponse = await getData();

  return (
    <section className="w-[100%] md:w-[95%] flex items-center justify-center mb-6 border-b-2 flex-col px-3 md:px-8 py-6 pb-10 border-black mt-7 gap-5">
        <div className="flex flex-col justify-start items-center w-full gap-8">
            <p className="border-b-[3px] border-primary  text-center p-1 text-[14px] leading-5 min-[966px]:text-[19px] min-[966px]:leading-6">Customer Statement</p>
             <h3 className="min-[966px]:text-[60px] md:text-[40px] whitespace-normal md:whitespace-nowrap text-[30px] leading-[40px] text-center md:leading-[45px] min-[966px]:leading-[60px]">Our Client Feedbacks</h3>
        </div>
        <ClientSlider clientData={clientData} />
    </section>
  )
}
