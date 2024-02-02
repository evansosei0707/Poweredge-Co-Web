import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { homeContactOverview } from '../lib/query';
import { client, urlFor } from '../lib/client';
import medicIcon from "@/public/icons8-medical-id-100.png"

async function getData() {
    const data = await client.fetch(homeContactOverview);

    return data;
}

export default async function HomeContactUs() {
    const homeContactData: homeContactResponse = await getData();



  return (
    <section className='flex flex-col min-[1015px]:flex-row relative overflow-hidden items-center my-12 h-[720px] md:h-[588px] xl:h-[649px] justify-center w-full'>
        <div className='bg-home-contact relative text-white w-full min-[1015px]:w-[60%] h-full flex flex-col items-start justify-center p-4 pl-7 gap-1 md:gap-4 space-y-4'>
            <Image
                src={medicIcon}
                alt='medic-icon'
                priority
                width={100}
                height={100}
            />
            <h2 className="lg:text-[66px] text-[40px] md:text-[45px] max-w-[70%]">We <span className='text-primary underline '> started</span> this company for you</h2>
                <Link className='border-2 border-white text-white hover:text-black text-lg leading-4 rounded-xl bg-transparent baba hover:bg-white transition-colors duration-100 py-4 md:py-6 md:px px-10' href="/contact">Contact Us
                </Link>
        </div>
        <div className='h-[240px] min-[1015px]:h-full w-full min-[1015px]:w-[40%]'>
            <Image
                src={urlFor(homeContactData.homeContact.imageUrl).url()}
                width={1000}
                height={500}
                className='h-full w-full  object-cover'
                alt='home-contact-bg-image'
            />
        </div>
        <div className='absolute top-[75%] left-[70%] transform newsTicker min-[850px]:flex hidden -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] bg-primary z-30'>
            {
                homeContactData.homeContact.chyron.map((item,idx) => (
                    <div className='' key={idx}>
                        <p className='text-[30px]'>{item}<span className='px-6'>*</span></p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
