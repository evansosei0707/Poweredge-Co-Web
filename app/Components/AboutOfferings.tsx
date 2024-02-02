import { OfferingClient } from ".";
import { client } from "../lib/client"
import { aboutServiceQuery, homeServicesQuery } from "../lib/query";


async function getData() {
  const data = await client.fetch(homeServicesQuery);

  return data;
}

export default async function AboutOfferings() { 
  const aboutServiceData: serviceDetailResponse[] = await getData(); 


  return (
    <section className="w-full flex items-center justify-start flex-col gap-5">
      <p className="lg:text-[40px] md:text-[35px] text-[30px] leading-9 md:leading-10 lg:leading-[60px] border-b-2 border-primary my-4">What we do offer</p>
      <OfferingClient aboutServiceData={aboutServiceData} />
    </section>
  )
}
