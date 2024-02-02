"use client"

import  Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { urlFor } from '../lib/client';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formatDateTime } from "../lib/helper";
import Image from "next/image";


const ProjectsSlider: React.FC<{ projectsData: projectResponse[];}> = ({ projectsData}) => {  

    const [filteredProjects, setFilteredProjects] = useState<projectResponse[]>([]);

    const { uniqueService } = useParams();




    useEffect(() => {
     
        if(uniqueService) {
            const projectFiltered = projectsData.filter(project =>
                project.service.some( item => item.refSlug === uniqueService)
              );

              setFilteredProjects( projectFiltered )
        }

    },[uniqueService, projectsData])


    const settings = {
        infinite: true,
        speed: 300,
        autoplay: true,
        centerMode: false,
        pauseOnHover: true,
        dots: false,
        slidesToShow:2 ,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 977,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
      };

  return (
        <Slider {...settings} className="w-[100%] overflow-hidden gap-6 h-full flex" >
            {filteredProjects.map((item, idx) => (
            <div key={idx} className="w-[100%] h-full flex flex-col  flex-1 justify-center px-4  items-center gap-6">
                <div className='w-full h-[285px] overflow-hidden papa rounded-2xl'>
                    <Image
                        src={urlFor(item.mainImage).url()}
                        layout="fill"
                        objectFit="cover"
                        className='w-full h-full object-cover object-center'
                        alt={`${item.service}-image`}
                    />
                </div>
                <div className='flex flex-col items-start pt-6 justify-center gap-4'>
                    <p  className="text-base transition-colors duration-100">
                        ClIENT:  <span className=" pl-2 font-kumb text-lg">{item.client}</span>
                    </p>
                    <p className="">LOCATION: <span className=" pl-2 font-kumb text-lg">{item.country}</span></p> 
                    <div className="flex items-center text-[15px] justify-start gap-2">
                        <p className=" ">
                            DURATION: <span className=" pl-2 font-kumb text-[#525252] text-[17px]">{formatDateTime(item.duration.startTime)}</span></p> 
                            <span className=" text-lg">-</span>
                        <p className="text-[#525252] "><span className=" pl-2 font-kumb text-[17px]">{formatDateTime(item.duration.endTime)}</span></p> 
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <p>{ item.operations.length > 0 && " What We Offered:"}</p>
                        <ul className="flex flex-col list-disc items-start justify-start gap-2">
                            { 
                                item.operations.map((operation, idx) => (
                                    <li key={idx} className="font-kumb text-[14px]">{operation}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            ))}
        </Slider>
          )
}


export default ProjectsSlider;