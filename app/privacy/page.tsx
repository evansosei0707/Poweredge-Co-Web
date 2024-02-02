import { MdArrowDownward } from "react-icons/md";
import { client } from "../lib/client";
import { privacyQuery } from "../lib/query";
import { Metadata } from "next";

async function getData() {
    const data = await client.fetch(privacyQuery);

    return data;
}


export const metadata: Metadata = {
    title: "Privacy Policies of Power Edge Equipment Limited" ,
    description: "Discover how we prioritize your data privacy. Explore our policy for transparency, confidentiality, and compliance.",
  }

export default async function page() {
    const privacyData: privacyResponse = await getData();
  return (
    <main className="w-full min-h-[100vh] items-center bg-white justify-start flex flex-col gap-6">
            <section className='w-[95%] flex items-center pt-20 pb-8 justify-center gap-4'>
                <div className='flex items-center w-full border-b pb-10 border-black relative justify-center' >
                    <p className="min-[758px]:text-[50px] text-center leading-[40px] text-[30px] min-[758px]:leading-[60px]">Privacy Policy</p>
                    <a href="#privacy-Page" className='bg-primary p-3 text-white font-bold rounded-lg absolute -bottom-6 left-1/2'>
                        <MdArrowDownward fontSize={20} />
                    </a>
                </div>
            </section>
            <section id="privacy-Page" className='w-[95%] flex flex-col  justify-start items-center gap-10'>
                <div className='flex flex-col w-full items-center justify-start gap-6'>
                    <h2 className=' lg:text-2xl text-[19px] uppercase w-full'>Policy <span className='text-primary'>Statement</span></h2>
                    <div className=' grid grid-cols-1 w-full lg:grid-cols-2 gap-3'>
                        {
                            privacyData.policyStatement.map((item, idx) => (
                            <div key={idx} className='flex flex-col justify-start w-full gap-3 items-start'>
                                <p className='border-b-2 border-blue-950 w-full uppercase'>{item.subject}:</p>
                                <p className=' font-kumb text-black/95'>
                                    {item.description}
                                </p>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-6'>
                    <h2 className=' lg:text-2xl text-[19px] uppercase'>Our Corporate <span className='text-primary'>Policies</span></h2>
                    <div className='flex  gap-6 flex-row items-start justify-center'>
                        <p className=' font-kumb'>{privacyData.corporatePolicy}</p>
                    </div>
                </div>
            </section>
    </main>
  )
}
