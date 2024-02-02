import Link from "next/link";
import Image from "next/image";
import { allBlogQuery } from "../lib/query";
import { client, urlFor } from "../lib/client";
import { formatDateTime } from "../lib/helper";


async function getData() {
    const data = await client.fetch(allBlogQuery);

    return data;
}

export default async function BlogArticles() {
    const blogOverview: blogResponse[] = await getData();


  return (
    <section className="w-full flex flex-col items-start my-8 justify-center px-7 gap-4">
        <div className="flex flex-col min-[1011px]:flex-row min-[1011px]:justify-between  w-full md:gap-6 gap-3 items-start pb-8 justify-start">
            <div className="flex flex-col gap-6 items-start pb-8 justify-start w-full">
                <p className=" text-[18px] leading-6 border-b-2 border-primary tracking-wide capitalize ">Blog & Articles</p>
                <p className=" text-[32px] min-[749px]:text-[50px] min-[749px]:leading-[60px] leading-10 tracking-wider">Our recent posts</p>
            </div>
            <Link href="/blogs" className=" baba2 bg-black flex self-start capitalize text-white rounded-xl text-[14px] leading-3 px-6 py-5 hover:bg-primary whitespace-nowrap tracking-wider transition-colors duration-150 ">
                    See more articles
            </Link>
        </div>
        <div className="flex flex-col min-[1011px]:flex-row  items-center justify-center min-[1011px]:items-start h-full gap-4 w-full">
            <div className="w-full rounded-2xl flex overflow-hidden min-[1011px]:w-[40%] flex-col h-max border border-black  item-center justify-center">
                <div className=" overflow-hidden h-[305px] rounded-tr-2xl rounded-tl-2xl w-full">
                    <Image
                        src={urlFor(blogOverview[0].mainImage).url()}
                        width={1000}
                        height={500}
                        alt="latest-blog-post-1"
                        className="h-full w-full object-cover scaleImage transition-all duration-150"
                    />
                </div>
                <div className="flex flex-col items-start px-6 justify-center py-6 gap-6">
                    <h2 className=" text-[20px] leading-8 hover:text-primary line-clamp-2 text-black ">
                        <Link href={`/blogs/${blogOverview[0].slug}`} >{blogOverview[0].title}</Link>
                    </h2>
                    <p className="text-[#525252] line-clamp-2 cursor-pointer font-kumb leading-[26px]">{blogOverview[0].mainParagraph}</p>
                    <Link href={`/blogs/${blogOverview[0].slug}`} className="flex items-center justify-start gap-7">
                        <span className=" capitalize border-b-2 text-xs leading-[26px] border-primary">read more</span>
                        <p className=" text-[12px] leading-[26px] text-[#525252]">{formatDateTime(blogOverview[0].publishedAt)}</p>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 min-[749px]:grid-cols-2 min-[1011px]:w-[60%] gap-8 w-full">
                {
                    blogOverview.slice(1,5).map((item, idx) => (
                        <div key={idx} className="border baba2 border-black p-8 rounded-2xl flex flex-col w-full items-start justify-center gap-8">
                            <Link href={`/blogs/category/${item.categories[0].slug}`} className="bg-primary flex self-start rounded-lg tracking-wide text-[14px] leading-[20px] text-white font-kumb  px-3 py-2">{item.categories[0].title}</Link>    
                            <Link href={`/blogs/${item.slug}`} className="text-[20px] leading-[30px] hover:text-primary line-clamp-2 duration-100 transition-colors">{item.title}</Link>
                            <Link href={`/blogs/${item.slug}`} className="flex items-center justify-center gap-7">
                                <span className=" capitalize border-b-2 text-xs leading-[26px] border-primary">read more</span>
                                <p className=" text-[12px] leading-[26px] text-[#525252]">{formatDateTime(item.publishedAt)}</p>
                            </Link>
                                 
                        </div>  
                    ))
                }
            </div>
        </div>
    </section>
  )
}
