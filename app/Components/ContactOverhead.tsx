

interface ContactOverheadProps {
  overheadData : contactVital1;
}

export default function ContactOverhead( { overheadData }: ContactOverheadProps ) { 
  return (
    <section className="w-full bg-black flex text-white items-start h-max flex-col pt-8 min-[1009px]:pt-14 min-[1009px]:flex-row justify-center">
        <div className="flex flex-col items-start justify-start w-full pb-6 px-6  min-[1009px]:pt-[5rem] min-[1009px]:w-1/2  gap-6">
          <h2 className=" md:text-[50px] text-[30px] md:leading-[60px] leading-[40px] text-white pb-[6px] md:pb-[12px]">Contact Us</h2>
          <p className="text-[18px] leading-[26px] font-kumb pb-[13px] md:leading-8">
            {overheadData.briefHistory}
          </p>
          <p className="text-[26px] leading-[36px] ">Need Help?</p>
          <p className=" md:text-xl text-lg leading-6 md:leading-[30px]">Call us on: <a href={`tel:${overheadData.phoneNumber}`} className="text-primary cursor-pointer ">{overheadData.phoneNumber}</a>
          </p>
          <p className=" md:text-xl text-lg leading-6 md:leading-[30px]">Email us on: <a href={`mailto:${overheadData.email}`} className="text-primary underline ">{overheadData.email}</a>
          </p>
        </div>
        <div className="w-full overflow-hidden h-[520px] min-[1009px]:w-1/2  map_shape">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4578240358874!2d-0.2581556262756348!3d5.646704832733564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9ed32350dba7%3A0x225fd07b37a6c056!2sMary%20Lucy%20Hospital!5e0!3m2!1sen!2sgh!4v1705986377297!5m2!1sen!2sgh" width="100%" height="520"  loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            
          </iframe>
        </div>

    </section>
  )
}
