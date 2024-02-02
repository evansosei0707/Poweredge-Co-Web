"use client";

import Link from "next/link";
import { useClickAway }  from "react-use";
import { useEffect, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image"
import logo from "@/public/logo.jpeg"
import { MdPushPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { useState } from "react";
import {AiFillYoutube } from "react-icons/ai";
import { serviceLinks } from "../lib/helper";
import { IoIosArrowDown } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";


const links = [
    {name:'Home', href: '/'},
    {name:'About', href: '/about'},
    {name:'Services', href: '/services'},
    {name:'Blogs', href: '/blogs'},
    {name:'Contact', href: '/contact-us'},
]

interface HeaderProps {
  headerContactData: headerContactResponse
}

export default function Header({ headerContactData }: HeaderProps) {
    const [isOpen, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [scroll, setScroll] =  useState(false);
    const ref = useRef(null);
    const [serviceOpen, setServiceOpen] = useState(false);

    const toggleSubMenu = () => {
      setServiceOpen(!isOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
          const scroll_reveal = window.scrollY;
          if (scroll_reveal > 160) {
              setScroll(true);
          } else {
              setScroll(false);
          }
      };

      // Add event listener when component mounts
      document.addEventListener('scroll', handleScroll);

      // Remove event listener when component unmounts
      return () => {
          document.removeEventListener('scroll', handleScroll);
      };
  }, []);


    useClickAway(ref, () => setOpen(false));

    const pathName = usePathname()

  return (
    <header className="w-full h-[130px] bg-black relative p-4 min-[1174px]:pb-6 flex items-center min-[1174px]:items-start justify-between">
        <div className="flex items-center justify-between w-full ">
            <Link href='/' className="w-auto flex items-start ">
                <Image
                    src={logo}
                    alt="poweredge-logo"
                    width={150}
                    height={300}
                    className="w-full h-full"
                />
            </Link>
            <div className="flex min-[1174px]:items-center items-start justify-end  gap-6">
                <div className=" hidden min-[1174px]:flex  items-center h-full justify-center gap-6">
                    <div className="items-center flex justify-center border-r px-5  gap-3">
                        <div className="flex items-center justify-center font-kumb gap-2">
                            <MdPushPin className="text-primary" fontSize={20} />
                            <p className="text-[#d5d4d8]  text-sm">Address:</p>
                        </div>
                        <p className="text-[#d5d4d8] text-[12px]">{headerContactData.contactBrief.address}</p>
                    </div>
                    <div className="items-center flex justify-center gap-3">
                        <div  className="flex items-center justify-center gap-2">
                            <FaPhoneAlt className="text-primary" />
                            <p className="text-sm text-[#d5d4d8]">Call Us:</p>
                        </div>
                        <a href="tel:+233547307998" className="text-primary cursor-pointer ">{headerContactData.contactBrief.phoneNumber}</a>
                    </div>
                    <div className='flex gap-4 items-center justify-center'>
                        {!!headerContactData.estimate.socials.facebook && (
                            <a href={headerContactData.estimate.socials?.facebook} target="_blank" rel="noreferrer" className='hover:text-primary text-white duration-75 transition-colors'>
                                <BiLogoFacebook fontSize={20} className="hover:text-primary text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!headerContactData.estimate.socials.twitter && (
                            <a href={headerContactData.estimate.socials?.twitter} target="_blank" rel="noreferrer" className='hover:text-primary text-white duration-75 transition-colors'>
                                <FaXTwitter fontSize={20} className="hover:text-primary text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!headerContactData.estimate.socials.linkedIn && (
                            <a href={headerContactData.estimate.socials?.linkedIn} target="_blank" rel="noreferrer" className='hover:text-primary text-white duration-75 transition-colors'>
                                <FaLinkedin fontSize={20} className="hover:text-primary text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!headerContactData.estimate.socials.instagram && (
                            <a href={headerContactData.estimate.socials?.instagram} target="_blank" rel="noreferrer" className='hover:text-primary text-white duration-75 transition-colors'>
                                <FaInstagram fontSize={20} className="hover:text-primary text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!headerContactData.estimate.socials.tiktok && (
                            <a href={headerContactData.estimate.socials?.tiktok} target="_blank" rel="noreferrer" className='hover:text-primary text-white duration-75 transition-colors'>
                                <RiTiktokFill fontSize={20} className="hover:text-primary text-white duration-75 transition-colors"  />
                            </a>
                        )}
                        {!!headerContactData.estimate.socials.youtube && (
                            <a href={headerContactData.estimate.socials?.youtube} target="_blank" rel="noreferrer" className='hover:text-primary text-white duration-75 transition-colors'>
                                <AiFillYoutube fontSize={20} className="hover:text-primary text-white duration-75 transition-colors"  />
                            </a>
                        )}
                    </div>
            </div>
        </div>
            <div ref={ref} className="min-[1174px]:hidden ">
      <Hamburger toggled={isOpen} size={30} color="white" toggle={setOpen} />  
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0  z-50 top-[8rem] p-5 pt-0 bg-neutral-950 border-b border-b-primary/20"
          >
            <ul className="grid gap-2 w-full">
              {links.map((link, idx) => {

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={idx}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-primary/50 via-primary/30 to-primary/5"
                  >
                    {
                      link.href === '/services' ? (
                        <div
                        onClick={() => setServiceOpen((prev) => !prev)}
                          className="flex flex-col items-center p-5 h-max justify-center bg-black w-full rounded-xl"
                        >
                          <div className={`${pathName === link.href ? 'text-primary py-3 font-semibold': ''} flex items-center justify-between w-full px-4 `}>
                            <span className="flex gap-1 text-white hover:text-primary uppercase transition-colors duration-100 text-lg">{link.name}</span>
                            <IoIosArrowDown className="text-white text-xl" />
                          </div>
                          <ul  onClick={toggleSubMenu} className=" flex flex-col w-full items-start justify-start  bg-black overflow-hidden overflow-y-scroll transition-all duration-150 "  style={{ height: serviceOpen ? '300px' : '0' }}>
                            {serviceLinks.map((item, idx: number) => (
                              <Link 
                                key={idx}
                                href={`/blogs/${item.href}`}
                                onClick={() =>  {
                                  setOpen((prev) => !prev);
                                  setServiceOpen((prev) => !prev)
                                }}
                                className=" divide-y text-white font-kumb hover:text-primary duration-100 transition-colors border-white py-3 text-left"
                              >
                                {item.service}
                              </Link>
                            ))}
                          </ul>
                      </div>
                      ): (
                        <Link
                          href={link.href}
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            `${pathName === link.href ? ' text-primary font-semibold ' : ''} flex items-center justify-between w-full p-5 rounded-xl bg-black`
                          }
                        >
                          <span className="flex gap-1 text-white hover:text-primary uppercase transition-colors duration-100 text-lg">{link.name}</span>
                        </Link>
                      )
                    }
                   
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
        </div>

        <nav className={` hidden min-[1174px]:flex w-[98%] shadow-xl ${scroll ? ' rounded-none shadow-none rounded-l-none  rounded-r-none rounded-br-none mx-0 min-[1174px]:fixed w-full min-[1174px]:z-50 min-[1174px]:top-0 right-0 left-0 min-[1174px]:bg-black min-[1174px]:text-white h-max border-none ': ''} absolute transition-all duration-150 box-border z-30 -bottom-10 border bg-white items-center justify-between rounded-xl py-4 px-8`}>
            <ul className="flex items-center gap-10 justify-start">
                {links.map((item, idx) => (
                    pathName === item.href ? (
                    <Link key={idx} href={item.href} className={` text-primary text-[13px] tracking-wide uppercase font-semibold `}>
                        {item.name}
                    </Link>
                    ) : (
                      <>
                        {
                           item.href === '/services' ? (
                            <>    
                                <p onMouseOver={() => setIsHovered( true)}  className={` ${item.href === '/services' ? 'relative' : ''} text-black ${scroll ? 'text-white': 'text-black'} text-[13px] tracking-wide uppercase transition-colors duration-100 hover:text-primary/90 `}>
                                  {item.name}
                                </p>
                                  <div onMouseLeave={() => setIsHovered(false)} onMouseOver={() => setIsHovered(true)}   className={` absolute top-[80px] left-12 rounded-lg z-30  ${ isHovered ? 'opacity-100 block scale-100' : 'opacity-0 hidden scale-0'} bg-white grid grid-cols-2 justify-start gap-4 dropdown font-kumb p-6 py-8 min-w-[300px] transition-all duration-100 h-max `}>
                                    {
                                      serviceLinks.map((item, idx) => (
                                         <Link  onMouseOver={() => setIsHovered(true)} onClick={() => setIsHovered(false)}  key={idx} href={item.href}  className={` whitespace-nowrap link_after text-left text-lg text-black  leading-[24px] hover:text-primary `}>{item.service}</Link>
                                      ))
                                    }
                                  </div>
                            </>
                          ) : (
                            <Link href={item.href} onMouseOver={() => setIsHovered(false)}  className={`text-black text-[13px] tracking-wide uppercase ${scroll ? 'text-white' : 'text-black' } transition-colors duration-100 hover:text-primary/90 `}>
                              {item.name}
                            </Link> 
                          )
                        }
                      </>
                    )
                ))}
            </ul>
            <div className={`bg-primary text-[14px] uppercase flex self-end ${scroll ? 'baba3' : 'papa'} text-white rounded-xl py-3 px-9 cursor-pointer z-20 `}>
                <Link href='/contact-us' className="uppercase" >inquiry now</Link>
            </div>
        </nav>

    </header>
  )
}
