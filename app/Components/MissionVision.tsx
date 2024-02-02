import Link from "next/link";
import { VisionGoal } from "../lib/query";
import { client } from "../lib/client";
import { SiMicrostrategy } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { SiTrustpilot } from "react-icons/si";
import { FaPeopleCarry } from "react-icons/fa";



async function getData() {
    const data = await client.fetch(VisionGoal);

    return data;
}

export default async function MissionVision() {
    const visionGoalData: visionGoalResponse = await getData();


  return (
    <section className="w-full flex flex-col items-start my-8 justify-center px-7 gap-4">
         <div className="flex flex-col min-[1011px]:flex-row min-[1011px]:justify-between  w-full gap-6 items-start pb-8 justify-start">
             <div className="flex flex-col gap-6 items-start pb-8 justify-start w-full">
                 <p className=" text-[18px] leading-6 border-b-2 border-primary tracking-wide capitalize ">Strategy, Vision, Goal & Values</p>
                 <p className=" text-[32px] min-[749px]:text-[50px] min-[749px]:leading-[60px] leading-10 tracking-wider">Don&apos;t know why we exists?</p>
             </div>
             <Link href="/blog" className=" baba2 bg-black flex self-start capitalize text-white rounded-xl text-[14px] leading-3 px-6 py-5 hover:bg-primary whitespace-nowrap tracking-wider transition-colors duration-150 ">
                     Learn more
             </Link>
         </div>
         <div className="flex flex-col min-[1011px]:flex-row  items-center justify-center min-[1011px]:items-start h-full gap-4 w-full">
             <div className="w-full rounded-2xl flex overflow-hidden min-[1011px]:h-full p-8 min-[1011px]:w-[40%] flex-col h-max border border-black  item-center justify-start gap-8">
                 <div className="w-full flex items-center justify-start gap-4">
                     <SiMicrostrategy fontSize={30} />
                     <div className="bg-primary flex self-start uppercase text-base rounded-lg tracking-wide  leading-[20px] text-white font-kumb  px-5 py-3">{visionGoalData.aboutCompany[0].subject}</div>    
                 </div>
                 <div className="flex items-center justify-center">
                     <em>{visionGoalData.aboutCompany[0].body}</em>
                 </div>
                
             </div>
             <div className="grid grid-cols-1 min-[749px]:grid-cols-2 min-[1011px]:w-[60%] gap-8 w-full">
                 {
                     visionGoalData.aboutCompany.slice(1,5).map((item, idx) => (
                         <div key={idx} className="border baba2 border-black p-8 rounded-2xl min-h-[261px] flex flex-col w-full items-start justify-start gap-8">
                             <div className="w-full flex items-center justify-start gap-4">
                                 {idx === 0 && <FaEye fontSize={30} />}
                                 {idx === 1 && <GoGoal fontSize={30} />}
                                 {idx === 2 && <FaPeopleCarry fontSize={30} />}
                                 {idx === 3 && <SiTrustpilot fontSize={30} />}
                                 <div className="bg-primary flex self-start uppercase text-base rounded-lg tracking-wide  leading-[20px] text-white font-kumb  px-5 py-3">{item.subject}</div>    
                             </div>
                             <div className="flex items-center justify-center">
                                 <em>{item.body}</em>
                             </div>
                         </div>  
                     ))
                 }
             </div>
         </div>
    </section>
  )
}
