"use client"

import  Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { urlFor } from '../lib/client';
import Image from "next/image";


const LogoSlider: React.FC<{ logoData : logoResponse }> = ({ logoData }) => {  


    const settings = {
        infinite: true,
        speed: 300,
        autoplay: true,
        centerMode: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 558,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 401,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    
      };

  return (
            <div className='flex w-full h-full box-border  px-4 mb-8 mx-auto mt-0 justify-center items-center'>
                <Slider {...settings} className="w-[100%]" >
                    {
                        logoData.logos.map((item, idx) => (
                        <div key={idx} className=" h-max w-max transform translate-y-0 flex px-4 items-center justify-center hover:-translate-y-3 transition-transform duration-200 ">
                            <Image 
                                src={urlFor(item.image).url()} 
                                width={220}
                                height={75}
                                alt="logo-icon"
                                className=" h-auto max-h-[250px] w-[220px] object-contain"
                            />
                        </div>
                     ))
                    }
                </Slider>
            </div>  )
}


export default LogoSlider;