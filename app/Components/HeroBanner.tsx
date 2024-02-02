"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { useState } from 'react';
import HeroText from './HeroText';



const HeroBanner: React.FC<{ bannerData: heroResponse }> = ({ bannerData }) => {



  const [navigates, setNavigates] = useState(false);

  const { heroData } = bannerData;


  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
    <div className={`z-40 rounded-full  min-[1174px]:flex justify-center  ${navigates ? 'bg-white/20' : 'bg-transparent' } transition-all duration-300 hover:bg-white/70  p-4  items-center absolute right-5 lg:right-20  top-[40%] `}>
        <button
        className={ ` lg:rounded-full cursor-pointer font-extrabold  ` }
        style={{ ...style }}
          onClick={onClick}
        >
           <SlArrowRight  className='text-lg md:text-xl min-[1174px]:text-black text-white lg:text-2xl' fontweight={700} />
        </button>
      </div>
    );
  }


  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div className={`z-40 rounded-full  min-[1174px]:flex justify-center  ${navigates ? 'bg-white/20' : 'bg-transparent'} transition-colors duration-200 hover:bg-white/70  p-4    items-center absolute left-5 lg:left-20  top-[40%] `}>
        <button
        className={ ` lg:rounded-full cursor-pointer font-extrabold  ` }
        style={{ ...style }}
          onClick={onClick}
        >
           <SlArrowLeft  className='text-lg md:text-xl min-[1174px]:text-black text-white lg:text-2xl' fontSize={40} />
        </button>
      </div>
    );
  }

    const settings = {
      dots: false,
      infinite: true,
      speed: 900,
      fade: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      easing:'ease-in',
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };


    return (
      <div onMouseEnter={() => setNavigates(true)} onMouseLeave={() => setNavigates(false)} className='flex justify-center items-center relative w-full h-[50vh] md:h-[70vh]  bg-gradient-to-tr from-primary/50 via-transparent to-primary/65 lg:h-[100vh]'>
        <Slider {...settings} className='relative overflow-hidden w-full h-full'>
            {
                bannerData?.heroData?.map((item, i) => (
                  <div key={i}>
                    <div  className='relative w-full h-[100vh] items-center bg-slate-600 justify-center '>
                      <span className='hero-overlay'></span>
                      <Image
                        src={urlFor(item.Image).url()}
                        alt={`home-${i}`}
                        className='w-full h-full bg-center bg-gray-600 bg-no-repeat object-fill min-[800px]:object-cover'
                        priority
                        width={1000}
                        height={1000}
                      />
                       <HeroText item={item} />
                    </div>
                  </div>
                  ))
              }
        </Slider>
      </div>
    );
}

export default HeroBanner