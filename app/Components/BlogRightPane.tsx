
import { IoIosSearch } from "react-icons/io";
import { IoFolderOutline } from "react-icons/io5";
import Link from "next/link";
import { tagsQuery } from "../lib/query";
import { client } from "../lib/client";
import { serviceLinks } from "../lib/helper";


async function getData() {
  const data = await client.fetch(tagsQuery);

  return data;
}

type tagResponse = {
  tag: string,
  tagSlug: string,
}

interface BlogRightPaneProps {
  allBlogContent: blogResponse[]; 
}


export default async function BlogRightPane({ allBlogContent }: BlogRightPaneProps) {
  const tagData: tagResponse[] = await getData();


  const categoryLength = (category: string) =>  {
    const dataLength: blogResponse[] = allBlogContent.filter((item: blogResponse) => {
      item.categories.some((filtered: categoryObj) => {
        filtered.title.toLowerCase().includes(category.toLowerCase());
      })
    })

    return dataLength
  }

  return (
    <div className='flex w-full min-[999px]:w-[35%] bg-[#f4f4fa] sticky rounded-lg top-4 '>
        <div className='flex flex-col flex-1 items-center justify-center gap-4'>
            <div className='flex flex-col gap-3 items-center   w-full py-6  p-2 rounded-xl'>
              <Link href={`/blogs/search`} className='w-[90%] flex h-[55px] items-center border border-black  justify-center p-3 rounded-xl'>
                <input 
                className='w-full bg-[#f4f4fa] text-black font-kumb h-full px-5  outline-none'
                type="button"
                value="Search for blogs"
                />
                <div className=" h-full w-[15%]">
                    <IoIosSearch fontSize={32} />
                </div>
              </Link>
            </div>
         
             
           <div className='flex flex-col gap-3 px-8 items-start justify-center  w-full py-6 p-2 rounded-2xl'>
              <p className=' text-xl text-left leading-[30px]'>Categories</p>
              <div className=' w-full flex flex-col justify-center items-start gap-4'>
                {
                  serviceLinks.map((blog, idx) => (
                    <Link href={`/blogs/category/${blog.linkName}`} key={idx} className='flex border-b w-full justify-between items-centers gap-4'>
                      <div className='flex  justify-center items-center gap-3'>
                        <IoFolderOutline className="text-primary" />
                        <p className='text-[12px] hover:text-primary transition-colors duration-100 leading-[26px] uppercase'>{blog.service}</p>
                      </div>
                      <p className=" text-[15px] font-kumb">{ categoryLength(blog.service).length }</p>
                    </Link>
                  ))
                }
              </div>
            </div>
           <div className='flex flex-col gap-3 px-8 items-start justify-center  w-full py-6 p-2 rounded-2xl'>
              <p className=' text-xl text-left leading-[30px]'>Popular Posts</p>
              <div className=' w-full flex flex-col justify-center items-start gap-4'>
                {
                  allBlogContent.map((blog: blogResponse, idx: any) => (
                    <div  key={idx} className='flex w-full justify-start items-center pb-4 border-b gap-4'>
                      <p className=" text-[25px] leading-[26px]  text-[#525252] border-r px-4">{idx + 1}</p>
                      <div className='flex  justify-start flex-col items-start gap-3 px-3'>
                        <Link href={`/blogs/category/${blog.categories[0].slug}`} className=" text-[#525252] leading-[23px] hover:text-primary duration-100 transition-colors font-kumb  line-clamp-1" >{blog.categories[0].title}</Link>
                        <Link href={`/blogs/${blog.slug}`} className='text-[16px] line-clamp-1 hover:text-primary transition-colors duration-100 leading-[26px] uppercase'>{blog.title}</Link>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
           <div className="flex w-full flex-col  justify-start items-start py-7 gap-7 px-8">
           <p className=' text-xl text-left leading-[30px]'>Tags</p>
           <div className=" w-full flex-wrap gap-5 flex items-center justify-center">
           {
               tagData.map((item:tagResponse, idx:number) => (
               <Link
                   key={idx}
                   href={`/blogs/tag/${item.tagSlug}`}
                   className=" border text-black hover:text-white font-kumb hover:border-primary p-2 leading-[26px] border-gray-500 rounded-lg bg-transparent hover:bg-primary duration-100 transition-colors"
               >
                   #{item.tag}
               </Link>
               ))
           }
           </div>
       </div>
    </div>
</div>
  )
}
