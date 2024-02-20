"use client";

import Link from "next/link";
import { useClickAway }  from "react-use";
import { useEffect, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image"
import logo from "@/public/mainLogo.jpg"
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
    <header className="w-full min-h-[130px] lg:min-h-[100px] bg-white pt-4 relative p-4 lg:px-10 min-[1174px]:pb-6 flex items-center min-[1174px]:items-center justify-between">
        <div className="flex items-center justify-between w-full ">
            <Link href='/' className="md:w-auto w-[250px] h-[70px] md:h-auto flex items-start ">
                <Image
                    src={logo}
                    alt="poweredge-logo"
                    width={300}
                    height={300}
                    className="w-full h-full"
                />
            </Link>
            <ul className="min-[1174px]:flex items-center gap-10 hidden relative  justify-start">
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
                                <p onMouseOver={() => setIsHovered( true)}  className={` ${item.href === '/services' ? 'relative' : ''} text-black ${scroll ? 'text-white': 'text-black'} text-[13px] tracking-wide uppercase cursor-pointer transition-colors duration-100 hover:text-primary/90 `}>
                                  {item.name}
                                </p>
                                  <div onMouseLeave={() => setIsHovered(false)} onMouseOver={() => setIsHovered(true)}   className={` absolute top-[65px] right-3 rounded-lg z-30   ${ isHovered ? 'opacity-100 block scale-100' : 'opacity-0 hidden scale-0'} bg-white grid grid-cols-2 justify-start gap-4 dropdown font-kumb p-6 py-8 min-w-[700px] w-full transition-all duration-100 h-max `}>
                                    {
                                      serviceLinks.map((item, idx) => (
                                         <Link  onMouseOver={() => setIsHovered(true)} onClick={() => setIsHovered(false)}  key={idx} href={`/services/${item.linkName}`}  className={` whitespace-nowrap link_after text-left text-lg text-black  leading-[24px] hover:text-primary `}>{item.service}</Link>
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
            <div ref={ref} className="min-[1174px]:hidden  ">
      <Hamburger toggled={isOpen} size={30} color="black" toggle={setOpen} />  
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed w-full shadow-4xl box-border left-0  overflow-hidden  z-50 top-[8rem] p-5 pt-0 bg-white border-b border-black border-b-primary/20"
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
                          className="flex flex-col items-center p-5 h-max justify-center bg-white text-black w-full rounded-xl"
                        >
                          <div className={`${pathName === link.href ? 'text-primary py-3 font-semibold': ''} flex items-center justify-between w-full px-4 `}>
                            <span className="flex gap-1 text-black hover:text-primary uppercase transition-colors duration-100 text-lg">{link.name}</span>
                            <IoIosArrowDown className="text-white text-xl" />
                          </div>
                          <ul  onClick={toggleSubMenu} className=" flex flex-col w-full items-start justify-start  bg-white overflow- text-black overflow-y-scroll transition-all duration-150 "  style={{ height: serviceOpen ? '300px' : '0' }}>
                            {serviceLinks.map((item, idx: number) => (
                              <Link 
                                key={idx}
                                href={`/services/${item.linkName}`}                                
                                  onClick={() =>  {
                                  setOpen((prev) => !prev);
                                  setServiceOpen((prev) => !prev)
                                }}
                                className=" divide-y text-black font-kumb hover:text-primary duration-100 transition-colors border-white py-3 text-left"
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
                            `${pathName === link.href ? ' text-primary font-semibold ' : ''} flex items-center justify-between w-full p-5 rounded-xl text-black bg-white`
                          }
                        >
                          <span className="flex gap-1 text-black hover:text-primary uppercase transition-colors duration-100 text-lg">{link.name}</span>
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

        <nav className={` w-[98%] shadow-xl ${scroll ? ' flex rounded-none shadow-none rounded-l-none  rounded-r-none rounded-br-none mx-0 min-[1174px]:fixed w-full min-[1174px]:z-50 min-[1174px]:top-0 right-0 left-0 min-[1174px]:bg-black min-[1174px]:text-white h-max border-none ': 'hidden'} absolute transition-all duration-150 box-border z-30 -bottom-10 border bg-white items-center justify-between rounded-xl py-4 px-8`}>
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
                                <p onMouseOver={() => setIsHovered( true)}  className={` ${item.href === '/services' ? 'relative' : ''} text-black ${scroll ? 'text-white': 'text-black'} text-[13px] tracking-wide cursor-pointer uppercase transition-colors duration-100 hover:text-primary/90 `}>
                                  {item.name}
                                </p>
                                  <div onMouseLeave={() => setIsHovered(false)} onMouseOver={() => setIsHovered(true)}   className={` absolute top-[80px] left-12 rounded-lg z-30  ${ isHovered ? 'opacity-100 block scale-100' : 'opacity-0 hidden scale-0'} bg-white grid grid-cols-2 justify-start gap-4 dropdown font-kumb p-6 py-8 min-w-[300px] transition-all duration-100 h-max `}>
                                    {
                                      serviceLinks.map((item, idx) => (
                                         <Link  onMouseOver={() => setIsHovered(true)} onClick={() => setIsHovered(false)}  key={idx} href={`/services/${item.linkName}`}  className={` whitespace-nowrap link_after text-left text-lg text-black  leading-[24px] hover:text-primary `}>{item.service}</Link>
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
