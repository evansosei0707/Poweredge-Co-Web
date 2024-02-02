"use client"

import { urlFor } from '../lib/client';
import { motion } from 'framer-motion';

const AboutUsClient: React.FC<{ aboutBriefData : aboutBriefResponse }> = ({ aboutBriefData }) => {  
    return (
        <div id="contact-us" className="py-10 flex w-full items-center justify-start gap-10 min-[1011px]:flex-row flex-col">
            <div className="flex flex-col items-start gap-6 justify-start w-full min-[1011px]:w-1/2">
              <p className="text-[35px] leading-[60px] border-b-2 border-primary">Who we are</p>
              <p className=" font-kumb  font-semibold text-black/80">{aboutBriefData.aboutBrief.aboutBrief1}</p>
              <div className=" overflow-hidden rounded-xl w-full max-w-[526px] h-[372px] relative">
                <motion.img
                   initial={{
                     opacity: 0,
                     // if odd index card,slide from right instead of left
                     x:-100
                   }}
                   whileInView={{
                     opacity: 1,
                     x: 0, // Slide in to its original position
                     transition: {
                       duration: 1 // Animation duration
                     }
                   }}
                   viewport={{ once: true }}

                  src={urlFor(aboutBriefData.aboutBrief.firstImage).url()}
                  className='w-full h-full object-cover'
                
                />
              </div>
            </div>
            <div className="flex flex-col justify-start w-full min-[1011px]:w-1/2 items-center gap-6">
                <div className=" overflow-hidden rounded-xl w-full max-w-[526px] h-[542px] relative">
                    <motion.img
                    initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        x:-100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                        duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: true }}

                    src={urlFor(aboutBriefData.aboutBrief.secondImage).url()}
                    className='w-full h-full object-cover'
                    
                    />
                </div>
                <p className=" font-kumb font-semibold text-black/80">{aboutBriefData.aboutBrief.aboutBrief1}</p>
            </div>
        </div>  )
}

export default AboutUsClient;
