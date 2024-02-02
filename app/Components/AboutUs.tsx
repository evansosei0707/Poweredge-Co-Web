import { MdArrowDownward } from "react-icons/md";
import { aboutBriefOverview } from "../lib/query";
import { client } from "../lib/client";
import { AboutUsClient } from ".";

async function getData() {
    const data = client.fetch(aboutBriefOverview);

    return data
}


export default async function AboutUs() {
  const aboutBriefData: aboutBriefResponse = await getData()

  return (
    <section className='w-[95%] flex flex-col items-center pt-20 pb-8 justify-center gap-4'>
        <div className='flex items-center w-full border-b pb-10 border-black relative justify-center' >
            <p className="min-[758px]:text-[70px] leading-[50px] text-[40px] min-[758px]:leading-[80px]">About Us</p>
            <a href="#contact-us" className='bg-primary p-3 text-white rounded-md absolute -bottom-6 left-1/2'>
                <MdArrowDownward fontSize={20} />
            </a>
        </div>
        <AboutUsClient aboutBriefData={aboutBriefData} />
    </section>
  )
}
