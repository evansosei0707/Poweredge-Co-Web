"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceLinks } from "../lib/helper";
import { SiCoronaengine } from "react-icons/si";
import { PiEngineBold } from "react-icons/pi";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { MdCarRental } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { TbAssembly } from "react-icons/tb";
import { TbTruckLoading } from "react-icons/tb";




export default function ServiceListAside() {

  const pathName = usePathname();

  return (
    <div className="min-[974px]:w-[35%] w-full min-[974px]:sticky rounded-xl top-0 py-10 text-black px-5 bg-primary/5 flex flex-col justify-start items-start gap-4">
        <p className=" text-[20px] text-center leading-[30px]">Services List</p>
        <div className='flex flex-col gap-5 items-start justify-start'>
          {
             serviceLinks.map((item, idx) => (
              <div key={idx} className="flex items-center justify-start border-b border-[#d7d3cf] py-3 gap-2 w-full">
                  <div className={` border-r border-[#d7d3cf]  ${pathName === item.href ? 'text-primary' : 'text-black'}  py-2 text-[45px] leading-[26px]  px-4`}>
                    {item.id === 1 && <SiCoronaengine />}
                    {item.id === 2 && <PiEngineBold />}
                    {item.id === 3 && <MdOutlinePrecisionManufacturing/>}
                    {item.id === 4 && <MdCarRental />}
                    {item.id === 5 && <GrVmMaintenance />}
                    {item.id === 6 && <GrUserWorker />}
                    {item.id === 7 && <TbAssembly />}
                    {item.id === 8 && <TbTruckLoading />}
                  </div>
                  <Link href={`/services/${item.linkName}`} className={` leading-[26px] ${pathName === item.href ? 'text-primary' : 'text-black'} hover:text-primary transition duration-100`}>
                     {item.service}
                  </Link>
              </div>
             ))
          }
        </div>
    </div>
    )
}




