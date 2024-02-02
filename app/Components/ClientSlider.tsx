"use client"
import { useState, useRef } from "react";
import  Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { urlFor } from '../lib/client';
import Image from "next/image";
import { RiDoubleQuotesR } from "react-icons/ri";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";




const ClientSlider: React.FC<{ clientData : clientResponse }> = ({ clientData }) => {  
    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    const [focus, setFocus] = useState(1);



    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
          <div
          className={`${className} rounded-full absolute bottom-0 right-24 border-2 z-50 p-3 hover:text-white hover:bg-primary transition-colors duration-100 cursor-pointer`}
          style={{ ...style }}
            onClick={onClick}
          >
            <GoArrowRight fontSize={30} />
          </div>
        );
      }
      
      function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={`${className} rounded-full absolute bottom-3 z-50 left-7 text-black  border-2 p-3 hover:text-white hover:bg-primary transition-colors duration-100 cursor-pointer`}
            style={{ ...style }}
            onClick={onClick}
          >
            <GoArrowLeft fontSize={30} />
          </div>
        );
      }


      const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };


  return (
    <div className='w-full flex items-center mt-9 flex-col min-[966px]:flex-row justify-center '>
      <div className='w-full min-[966px]:w-[40%] '>
        <Slider 
            asNavFor={nav2 as Slider} 
            ref={(slider1: Slider) => setNav1(slider1)}
            slidesToShow={3}
            arrows
            swipeToSlide={true}
            focusOnSelect={true}
        >
           {
            clientData.feedbacks.map((item, idx) => (
                <div key={idx} onClick={() => setFocus(idx)} className="flex items-center justify-center gap-4 flex-col ">
                    <div className="w-max h-max overflow-hidden relative">
                        <div className="rounded-full overflow-hidden border h-[115px] w-[115px] ">
                            <Image 
                                src={urlFor(item.clientImage).url()}
                                width={115}
                                height={115}
                                alt="client-photo"
                                className={`h-full w-full ${idx !== focus ? '  blur-[2px]': 'blur-0'} object-cover`}
                            />
                        </div>
                            <span className={`rounded-full bg-primary z-50 absolute ${focus === idx? 'flex': 'hidden'} bottom-2 right-0 text-white p-2`}>
                            <RiDoubleQuotesR className="text-sm" />
                            </span>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <p className={` ${focus === idx ? 'block' : 'hidden'} text-left leading-7`}>{item.name}</p>
                        <span className={`text-[#888888] ${focus === idx ? 'block' : 'hidden'} text-left text-[14px] leading-5`}>{item.job}</span>
                    </div>
                </div>
            ))
           }
        </Slider>
      </div>
      <div className='min-[966px]:w-[60%] w-full mt-5 min-[966px]:mt-0 relative'>
        <Slider
            asNavFor={nav1 as Slider}
            ref={(slider2: Slider) => setNav2(slider2)}
            {...settings}
            className="relative"


        >
            {
                clientData.feedbacks.map((item, idx) => (
                    <div key={idx} className="w-full min-[966px]:px-9 px-2 py-4">
                        <h4 className="text-xl leading-[34px]">{item.message}</h4>
                    </div>
                ))
            }
        </Slider>
      </div>
    </div>
  );
}

export default ClientSlider;