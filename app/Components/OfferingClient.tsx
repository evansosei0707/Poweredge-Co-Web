"use client";

import { useRef, useState } from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";
import Image from "next/image";

const OfferingClient: React.FC<{ aboutServiceData : serviceDetailResponse[] }> = ({ aboutServiceData }) => {  
    const hoverRef = useRef(null);
    const [imageReveal, setImageReveal] = useState(false)
    const [serviceIndex, setServiceIndex] = useState(0);

    
    return (
        <div className='bg-home-contact py-8 relative text-white w-full flex-wrap h-full flex flex-col items-center justify-start p-4 pl-7 gap-1 md:gap-4 '>
            <div className="flex w-full flex-wrap h-full pl-0 items-center justify-start p-4 md:pl-5 gap-6 md:gap-4 ">
                {
                    aboutServiceData.map((item: serviceDetailResponse, idx: number) => (
                        <div
                            key={idx} 
                            className='flex flex-col items-end cursor-default whitespace-nowrap text-[50px] justify-center gap-4'
                            onMouseEnter={() => {
                                setImageReveal(true)
                                setServiceIndex(idx)
                            }}
                            onMouseLeave={() => setImageReveal(false)}
                            ref={hoverRef}  
                        >
                            <p className=" text-white/75 text-base hidden  lg:flex self-end">0{idx + 1}</p>
                            <Link href={`/services/${item.pageSlug}`} className='lg:text-[50px] text-[20px] md:text-[30px] leading-[45px] lg:leading-[50px] text-white px-6 hover:text-primary transition-colors duration-100'>{item.title} <span className="px-6 pl-2">/</span></Link>
                            <div className={`absolute w-[240px] transition-all duration-200 ${imageReveal && serviceIndex === idx ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'} rounded-lg overflow-hidden h-[320px] z-30`}>
                                <Image 
                                    className="w-full h-full object-cover"
                                    src={urlFor(item.mainImage).url()}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={`${item.title}-service-image`}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link href="/services/parts-supply" className="border-b-2 my-8 mt-12 lg:text-lg lg:leading-8 border-primary text-[14px] leading-[22px] text-white hover:text-primary transition duration-100 uppercase">Explore more services</Link>
        </div>  
    )
}

export default OfferingClient;
