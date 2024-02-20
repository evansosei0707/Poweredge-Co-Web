"use client";

import { useState } from "react";
import { urlFor } from "../lib/client";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

interface CompanyHeadsProps {
  executivesData : executivesVital[];
}

export default function CompanyHeads({ executivesData }: CompanyHeadsProps) {

  const [isCopied, setIsCopied] = useState(false);
  const [elementId, setElementId] = useState('');
  const [contactType, setContactType] = useState('');

  
  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = (text: string) => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(text)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }



  return (
     <section className="flex flex-col items-center justify-start  my-10 gap-8 w-[95%]">
        <p className=" text-[30px] lg:text-[50px] lg:leading-[60px] leading-[40px]">Meet Our Executives</p>
        <div className="flex gap-6 items-center flex-col lg:flex-row justify-center mx-auto  w-full">
            {
                    executivesData.map((item: executivesVital) => (
                    <div key={item._key} className="flex flex-col items-start justify-start gap-4 w-full">
                        <div className="flex items-start  justify-start min-[1009px]:items-center min-[1009px]:justify-center gap-4 flex-col min-[1009px]:flex-row">
                          <div className="rounded-xl overflow-hidden w-[140px] h-[140px]">
                              <Image
                                  src={urlFor(item.image).url()}
                                  width={140}
                                  height={140}
                                  alt={`${item.name}-image`}
                                  className="w-full h-full object-cover scale-100 hover:scale-110 transform transition-all duration-100 object-center"
                              />
                          </div>
                          <div className="flex flex-col items-start flex-wrap justify-start gap-3">
                            <p className=" font-kumb text-lg text-[#525252] leading-[28px]">{item.role}</p>
                            <p className=" text-[19px] border-b-[3px] leading-[30px] hover:text-primary transition-colors duration-75">{item.name}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-start flex-wrap  justify-center gap-6">
                          {
                            !!item.number && (
                              <div className=" flex text-black flex-wrap  gap-3 items-center justify-start">
                                  <p className="text-[19px] leading-[29px] flex flex-wrap">Get in touch: <a href={`tel:${item.number}`} className="text-primary">{`${isCopied && elementId === item._key && contactType === item.number! ? 'Number Copied': item.number}`}</a></p>
                                  <IoCopyOutline className=" text-lg cursor-pointer" onClick={() => {
                                    handleCopyClick(item.number!);
                                    setElementId(item._key);
                                    setContactType(item.number!);
                                  }} />
                              </div>
                            )
                          }
                          {
                            !!item.email && (
                              <div className=" flex text-black flex-wrap  gap-3 items-center justify-start">
                                  <p className="text-[19px] leading-[29px] flex flex-wrap"> <a href={`mailto:${item.email}`} className="text-primary">{`${isCopied && elementId === item._key && contactType === item.email! ? 'Email Copied': item.email!}`}</a></p>
                                  <IoCopyOutline className=" text-lg cursor-pointer " onClick={() => {
                                    handleCopyClick(item.email!);
                                    setElementId(item._key);
                                    setContactType(item.email!);
                                  }} />
                              </div>
                            )
                          }
                        </div>
                    </div>
                ))
            }
        </div>
     </section>
  )
}
