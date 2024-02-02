import Link from "next/link";
import { FiSend } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import callMessage from "@/public/icons8-call-64.png";
import Image from "next/image";
import { client } from "../lib/client";
import { allServiceQuery, contactQuery, footerQuery, headerContactQuery } from "../lib/query";
import { RiTiktokFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

async function getData() {
    const summaryQuery = await client.fetch(footerQuery);

    return summaryQuery
}
async function getServiceData() {
    const summaryQuery = await client.fetch(allServiceQuery);

    return summaryQuery
}
async function getContactData() {
    const summaryQuery = await client.fetch(headerContactQuery);

    return summaryQuery
}
async function getContactData2() {
    const summaryQuery = await client.fetch(contactQuery);

    return summaryQuery
}


export default async function Footer() {
    const summaryData: Promise<footerResponse> = getData();
    const serviceData: Promise<allServiceResponse[]> = getServiceData();
    const contactData: Promise<headerContactResponse> = getContactData();
    const conctactData2: Promise<contactResponse> =  getContactData2();


    const [summary, service, contact, contact2] = await Promise.all([summaryData, serviceData, contactData, conctactData2])

  return (
    <footer className="w-full flex flex-col items-center justify-center gap-6 bg-black text-white">
        <div className="flex flex-col w-[92%] min-[972px]:flex-row items-start justify-center gap-7 py-8 lg:pb-12 md:pt-14 md:pb-10 lg:pt-20 border-b border-white/80 ">
            <div className="flex flex-col items-start justify-center gap-4  md:gap-8">
                <p className=" leading-10 uppercase border-b-2 border-primary">Let&apos;s start together.</p>
                <p className="text-white text-[25px] md:text-[30px] md:leading-[40px] lg:text-[40px] lg:leading-[50px]  leading-[30px] ">{summary.firstSummary}</p>
            </div>
            <div className="flex flex-col items-start leading-[28px] text-white justify-center gap-4">
                <p className=" my-4 ">{summary.secondSummary}</p>
                <div className="flex items-start flex-col justify-start md:justify-center gap-4 w-full">
                    <Link href='/contact-us' className="rounded-xl px-4 md:px-7 tracking-normal whitespace-nowrap bg-primary baba3 py-2 leading-[26px] uppercase md:tracking-wide">
                        Contact Us
                    </Link>
                    <Link href='/contact-us' className="rounded-xl px-4 md:px-7 whitespace-normal md:whitespace-nowrap bg-transparent baba3 py-2 leading-[26px] border-2 border-white uppercase md:tracking-wide tracking-normal">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex flex-col min-[748px]:flex-row w-[95%] text-white py-11 border-b border-white/80 items-start justify-center gap-8">
            <div className="flex flex-col min-[1322px]:flex-row text-white items-start justify-center gap-8">
                <div className="flex flex-col justify-center items-start gap-4">
                    <p className=" text-white/80 text-[13px] leading-[24px] ">{summary.thirdSummary}</p>
                    <div className="flex flex-col items-start justify-center gap-4">
                        <p className=" text-xl leading-[30px] ">Social info</p>
                        <div className='flex gap-4 items-center justify-center'>
                        {!!contact.estimate.socials.facebook && (
                            <a href={contact.estimate.socials?.facebook} className='hover:text-white hover:bg-primary bg-slate-700 rounded-full p-4 text-white duration-75 transition-colors'>
                                <BiLogoFacebook fontSize={20} className=" text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!contact.estimate.socials.twitter && (
                            <a href={contact.estimate.socials?.twitter} className='hover:text-white hover:bg-primary bg-slate-700 rounded-full p-4 text-white duration-75 transition-colors'>
                                <FaXTwitter fontSize={20} className=" text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!contact.estimate.socials.linkedIn && (
                            <a href={contact.estimate.socials?.linkedIn} className='hover:text-white hover:bg-primary bg-slate-700 rounded-full p-4 text-white duration-75 transition-colors'>
                                <FaLinkedin fontSize={20} className=" text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!contact.estimate.socials.instagram && (
                            <a href={contact.estimate.socials?.instagram} className='hover:text-white hover:bg-primary bg-slate-700 rounded-full p-4 text-white duration-75 transition-colors'>
                                <FaInstagram fontSize={20} className=" text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!contact.estimate.socials.tiktok && (
                            <a href={contact.estimate.socials?.tiktok} className='hover:text-white hover:bg-primary bg-slate-700 rounded-full p-4 text-white duration-75 transition-colors'>
                                <RiTiktokFill fontSize={20} className=" text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!contact.estimate.socials.youtube && (
                            <a href={contact.estimate.socials?.youtube} className='hover:text-white hover:bg-primary bg-slate-700 rounded-full p-4 text-white duration-75 transition-colors'>
                                <AiFillYoutube fontSize={20} className=" text-white duration-75 transition-colors"  />
                            </a>
                        )}
                    </div>
 
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start whitespace-nowrap gap-4">
                    <p className="text-xl leading-[30px] text-white">Our company</p>
                    <div className="flex flex-col justify-center items-start font-kumb gap-4">
                        <Link href="/" className="text-white/80 leading-[26px] hover:text-primary transition-colors duration-100">Home</Link>
                        <Link href="/about" className="text-white/80 leading-[26px] hover:text-primary transition-colors duration-100">About us </Link>
                        <Link href="/blogs" className="text-white/80 leading-[26px] hover:text-primary transition-colors duration-100">Blogs</Link>
                        <Link href="/services/parts-supply" className="text-white/80 leading-[26px] hover:text-primary transition-colors duration-100">
                            services
                        </Link>
                        <Link href="/contact-us" className="text-white/80 leading-[26px] hover:text-primary transition-colors duration-100">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col min-[1024px]:flex-row text-white min-[1024px]:justify-between items-start justify-center gap-8">

                <div className="flex flex-col justify-center whitespace-nowrap items-start gap-4">
                    <p className="text-xl leading-[30px] text-white">Our services</p>
                    <div className="flex flex-col justify-center items-start font-kumb gap-4">
                        {
                            service.slice(0,5).map((item: allServiceResponse, idx: number ) => (
                                
                                <Link key={idx} href={`/blogs/${item.pageSlug}`} className="text-white/80 leading-[26px] hover:text-primary transition-colors duration-100">{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full items-start gap-4">
                    <p className="text-xl leading-[30px]">Our newsletter</p>
                    <form className="flex flex-col w-full justify-center mb-7 items-start gap-4">
                        <div className="flex items-center h-[55px] box-border w-full overflow-hidden justify-center gap-3">
                                <input 
                                    className=" border-2 h-full bg-black w-[80%] font-kumb text-white p-3 border-white rounded-xl   py-4"
                                    type="email"
                                    placeholder="Your email address"
                                />
                                <button
                                    type="submit"
                                    className="bg-primary flex items-center w-[20%] justify-center h-full rounded-xl text-white p-4"
                                >
                                    <FiSend fontSize={25} />
                                </button>
                        </div>
                        <div className="flex  font-kumb items-center justify-start gap-3">
                                <input
                                    className="bg-black border border-white"
                                    type="checkbox"
                                    name="checkPolicy"
                                />
                                <label htmlFor="checkPolicy" >I agree to all your terms and policies</label>
                        </div>
                    </form>
                    <div className="flex items-center justify-start gap-3">
                        <Image 
                            src={callMessage}
                            alt="call-and-message-details"
                            width={70}
                            height={56}
                        />
                        <div className="flex flex-col items-start justify-center gap-1">
                            <a href="tel:+233547307998" className="text-white text-lg cursor-pointer ">{contact2.contactBrief.phoneNumber}</a>
                            <a href={`mailto:${contact2.contactBrief.email}`} className="text-white flex flex-wrap underline whitespace-pre-wrap cursor-pointer ">{contact2.contactBrief.email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex md:items-center flex-col md:flex-row justify-start  gap-5 items-start mx-auto w-[95%] font-kumb  md:justify-between pb-11">
            <Link href='/privacy' className="text-[15px] font-kumb whitespace-nowrap text-white/80 hover:text-primary transition-colors duration-100">Help/Terms & Conditions/Privacy</Link>
            <p className=" text-white/80 text-[15px] whitespace-nowrap ">Copyright &copy;{currentYear} Poweredge. All rights reserved.</p>
        </div> 
    </footer> 
  )
}

