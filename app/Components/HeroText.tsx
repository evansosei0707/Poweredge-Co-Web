import { motion } from "framer-motion"


const HeroText: React.FC<{ item: hereObj }> = ({ item }) => {  
  return (
      <div className='z-30 lg:flex w-full flex-wrap hidden pt-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  top-1/2  right-0 border-white h-full items-center justify-center absolute bg-gradient-to-tr from-primary/30 via-transparent to-primary/35 '>
            <motion.p
              initial={{y: 40,opacity: 0 }}
              whileInView={{y:0, opacity:1}}
              transition={{duration: 0.7}}
              className='md:text-[28px] leading-8 lg:leading-[45px] -mt-16 lg:text-4xl  pb-1 text-center mx-auto border-primary  font-medium text-slate-200  '> 
                  {item.subTitle}
            </motion.p>
      </div>

  )
}

export default HeroText
