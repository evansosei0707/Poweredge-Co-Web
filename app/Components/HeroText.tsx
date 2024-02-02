import { motion } from "framer-motion"


const HeroText: React.FC<{ item: hereObj }> = ({ item }) => {  
  return (
      <div className='z-30 flex w-full pt-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  top-1/2  right-0 border-white h-full  flex-col absolute bg-gradient-to-tr from-primary/30 via-transparent to-primary/35 '>
        <div className=' h-max z-10 w-full'>
            <motion.p
              initial={{y: 40,opacity: 0 }}
              whileInView={{y:0, opacity:1}}
              transition={{duration: 0.7}}
              className='text-[11px] md:text-base pb-1 text-center md:border-b-2 mx-auto border-primary w-max font-medium text-slate-200  '> 
                  {item.subTitle}
            </motion.p>
        </div>
        <div className="w-full mx-auto h-max z-10">
            <motion.p
              initial={{y: 40,opacity: 0 }}
              whileInView={{y:0, opacity:1}}
              transition={{duration: 0.7}}
              className='text-
              [28px] text-3xl sm:text-4xl lg:text-7xl lg:max-w-[90%] lg:leading-[5rem] text-center leading-9  mx-auto md:max-w-[85%] max-w-[90%] lg:mt-10 mt-3 font-medium text-slate-200  '>
                  {item.title}
            </motion.p>
        </div>
      </div>

  )
}

export default HeroText
