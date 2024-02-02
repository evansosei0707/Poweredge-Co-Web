import { client } from "../lib/client";
import { homeServicesQuery } from "../lib/query";
import { HomeServicesSlider } from ".";

async function getData() {
    const data = await client.fetch(homeServicesQuery)

    return data;
}

export default async function HomeServices() {
    const serviceData: serviceDetailResponse[] = await getData();

    return (
        <section className="flex flex-col mt-10 items-center w-full justify-center gap-6">
            <div className="flex flex-col items-center justify-center pb-5 w-full gap-6">
                <p className='text-[18px] leading-6 text-black border-b-[3px] capitalize border-primary'>What We Provide</p>
                <h3 className='text-[30px] md:text-[50px] lg:text-[55px] leading-[40px] text-center md:leading-[60px]'>We are offering best services</h3>
            </div>
            <HomeServicesSlider serviceData={serviceData} />
        </section>
    )
}