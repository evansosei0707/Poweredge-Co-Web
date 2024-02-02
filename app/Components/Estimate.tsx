import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi"
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { client } from "../lib/client";
import { estimateCardQuery } from "../lib/query";
import { EstimateForm } from ".";

async function getData() {
    const data = await client.fetch(estimateCardQuery);

    return data;
}

export default async function Estimate() {
    const estimateData: estimateResponse = await getData();

    
  return (
    <section className=' min-[1009px]:w-[95%] w-full bg-white rounded-xl p-4 shadow-md py-8 flex min-h-[100vh] flex-col items-center min-[1009px]:flex-row justify-start min-[1009px]:justify-center gap-9 min-[1009px]:gap-5'>
        <div className="w-full flex flex-col px-4 p-8 items-start justify-start gap-5 min-[1009px]:border-r h-full min-[1009px]:w-1/2 ">

            <div className='w-full flex flex-col  items-start justify-start gap-6'>
                <p className='border-b-[3px] border-primary tracking-wider min-[1009px]:tracking-widest text-[15px] lg:text-lg lg:leading-8 lg:tracking-wider leading-6'>ESTIMATE</p>
                <h2 className=" text-[30px] lg:text-[50px] lg:leading-[60px] leading-[40px]">{estimateData.estimate.title}</h2>
                <p className=' font-kumb text-[#525252] text-lg '>{estimateData.estimate.para_estimate}</p>
            </div>
            <div className='w-full flex items-center flex-wrap text-black border-black  justify-start gap-5'>
                {!!estimateData.estimate.socials.facebook && (
                    <a href={estimateData.estimate.socials?.facebook} target="_blank" rel="noreferrer" className='flex items-center duration-100 transition-colors text-black hover:text-primary hover:border-primary justify-center gap-5'>
                        <div className="border border-black rounded-full p-3">
                            <BiLogoFacebook />
                        </div>
                        <p>Facebook</p>
                    </a>
                    
                )}
                {!!estimateData.estimate.socials.twitter && (
                    <a href={estimateData.estimate.socials?.twitter} target="_blank" rel="noreferrer" className='flex items-center duration-100 transition-colors  hover:text-primary hover:border-primary border-black justify-center gap-5'>
                        <div className="border border-black rounded-full p-3">
                            <FaXTwitter />
                        </div>
                        <p>X</p>
                    </a>
                    
                )}
                {!!estimateData.estimate.socials.linkedIn && (
                    <a href={estimateData.estimate.socials?.linkedIn} target="_blank" rel="noreferrer" className='flex items-center duration-100 transition-colors border-black hover:text-primary hover:border-primary  justify-center gap-5'>
                        <div className="border border-black rounded-full p-3">
                            <FaLinkedin />
                        </div>
                        <p>LinkedIn</p>
                    </a>
                    
                )}
                {!!estimateData.estimate.socials.instagram && (
                    <a href={estimateData.estimate.socials?.instagram} target="_blank" rel="noreferrer" className='flex items-center duration-100 transition-colors border-black hover:text-primary hover:border-primary  justify-center gap-5'>
                        <div className="border border-black rounded-full p-3">
                            <FaInstagram />
                        </div>
                        <p>Instagram</p>
                    </a>
                    
                )}
                {!!estimateData.estimate.socials.tiktok && (
                    <a href={estimateData.estimate.socials?.tiktok} target="_blank" rel="noreferrer" className='flex items-center duration-100 transition-colors border-black hover:text-primary hover:border-primary  justify-center gap-5'>
                        <div className="border border-black rounded-full p-3">
                            <RiTiktokFill />
                        </div>
                        <p>Tiktok</p>
                    </a>
                    
                )}
                {!!estimateData.estimate.socials.youtube && (
                    <a href={estimateData.estimate.socials?.youtube} target="_blank" rel="noreferrer" className='flex items-center duration-100 transition-colors border-black hover:text-primary hover:border-primary  justify-center gap-5'>
                        <div className="border border-black rounded-full p-3">
                            <FaYoutube />
                        </div>
                        <p>YouTube</p>
                    </a>
                    
                )}
            </div>
        </div>
        <EstimateForm />
    </section>
  )
}
