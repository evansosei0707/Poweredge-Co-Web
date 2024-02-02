"use client"

import  Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { urlFor } from '../lib/client';
import Link from "next/link";
import Image from "next/image";


const HomeServicesSlider: React.FC<{ serviceData : serviceDetailResponse[] }> = ({ serviceData }) => {  


    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        centerMode: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 558,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
      };

  return (
            <div className='flex w-full h-full box-border  px-4 mb-8 mx-auto mt-0 justify-center items-center'>
                <Slider {...settings} className="w-[100%] overflow-hidden gap-6 h-full flex" >
                    {serviceData.map((item: serviceDetailResponse, idx: number) => (
                    <div key={idx} className="w-[100%] h-full flex flex-col flex-1 justify-center px-4  items-center gap-6">
                        <div className='w-full h-[285px] overflow-hidden papa rounded-2xl'>
                            <Image
                                src={urlFor(item.mainImage).url()}
                                layout="fill"
                                objectFit="cover"
                                className='w-full h-full object-cover object-center'
                                alt='service-image'
                            />
                        </div>
                        <div className='flex flex-col items-start pt-6 justify-center gap-4'>
                            <Link href={`/services/${item.title}`} className="text-xl hover:text-primary transition-colors duration-100">
                                {item.title}
                            </Link>
                            <p className="text-[#525252] ">{item.serviceBrief}</p> 
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>  )
}


export default HomeServicesSlider