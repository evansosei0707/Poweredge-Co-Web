import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { formatDateTime } from "../lib/helper";
import { BlogDetailForm } from ".";


interface BlogDetailLeftPaneProps {
    filteredBlogData: blogResponse[]; 
  }

export default function BlogDetailLeftPane({ filteredBlogData }: BlogDetailLeftPaneProps) {
  return (
    <article className="w-full min-[1009px]:w-[65%] flex-col items-start mb-10 justify-start gap-6">
          <div className="border-l-[5px] border-black rounded-lg bg-[#f4f4fa] py-7 pr-5 pl-5 mb-6">
              <p className="md:text-[30px] text-[28px] leading-9">{filteredBlogData[0].title}</p>
          </div>
          <p className="md:text-xl text-lg leading-[26px] md:leading-[30px] font-kumb mb-6 text-[#525252]">{filteredBlogData[0].mainParagraph }</p>
          <div className=" rounded-lg overflow-hidden h-[453px] w-full">
              <Image
                  src={urlFor(filteredBlogData[0].mainImage).url()}
                  alt={`${filteredBlogData[0].title}-image`}
                  priority
                  width={500}
                  height={453}
                  className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex items-center justify-start mt-4 gap-4">
              <Link
                  href={`/blogs/category/${filteredBlogData[0].categories[0].slug}`}
                  className=" rounded-md bg-primary hover:bg-blue-600 transition-colors duration-100 text-white px-4 py-2 font-kumb leading-[26px]"
              >
                  {filteredBlogData[0].categories[0].title}
              </Link>
              <p className=" leading-[26px] text-[#525252] hover:text-primary transition-colors duration-100 font-kumb">{formatDateTime(filteredBlogData[0].publishedAt)}</p>
          </div>
          <div className="w-full h-max flex items-start flex-col justify-start pt-4 gap-8">

              {filteredBlogData[0].blogSection.map((blog: blogSectionVital) => (
                  <div key={blog._key} className="flex items-start w-full flex-col justify-start gap-4">
                      {blog.subTitle && (<p className=" md:text-[18px] text-base leading-8">{blog.subTitle}</p>)}
                      {blog.subPara && (<p className=" font-kumb md:text-xl text-lg leading-[26px] md:leading-[30px] text-[#525252]">{blog.subPara}</p>)}
                      {blog.subListing && (
                          <ol className="flex font-kumb flex-col items-start justify-start pt-2">
                              {blog.subListing.map((list, idx) => (
                                  <li key={idx} className=" list-disc md:text-xl text-lg leading-[26px] md:leading-[30px] font-kumb">{list}</li>
                              ))}
                          </ol>
                      )}
                      {blog.subImage && (
                          <div className=" w-full overflow-hidden h-[400px] rounded-lg">
                            <Image
                                src={urlFor(blog.subImage).url()}
                                alt={`${filteredBlogData[0].title}-image`}
                                priority
                                width={500}
                                height={400}
                                className="w-full h-full object-cover object-center" 
                            />
                          </div>
                        )}
          </div>
          ))
          }
      </div>
      <div className=" border-y-2 flex justify-start  items-start w-full gap-3 flex-wrap mt-10 border-black py-6">
              <p className="text-base leading-[26px] text-black">Tags:</p>
              <div className="flex items-center justify-center gap-3">
                  {filteredBlogData[0].tag.map((tagItem: tagOjb, idx: number) => (
                      <Link
                          key={idx}
                          href={`/blogs/tag/${tagItem.tagSlug}`}
                          className=" bg-[#faf7f4] font-kumb text-black hover:text-primary py-2 px-4 rounded-md capitalize"
                      >
                          <p className="text-black">{tagItem.tagSlug}</p>
                      </Link>
                  ))}
              </div>
          </div>
          <div className=" flex flex-col w-full item-start justify-start mt-6">
              <div className="flex flex-col items-start justify-center w-full gap-4">
                  <p className="text-[30px] leading-[40px] text-black">Leave a Reply</p>
                  <p className=" text-[#525252] leading-[26px] mb-7 font-kumb">Your email address will not be published. Required fields are marked *</p>
              </div>
              <BlogDetailForm filteredBlogData={filteredBlogData} />
          </div>
    </article>
    
  )
}
