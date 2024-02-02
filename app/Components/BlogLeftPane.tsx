"use client";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { formatDateTime } from "../lib/helper";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogDLeftPaneProps {
  allBlogContent: blogResponse[]; 
}


export default  function BlogLeftPane({ allBlogContent }: BlogDLeftPaneProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedBlogContent, setSearchedBlogContent] = useState<blogResponse[]>([]);

  const pathName = usePathname();

  console.log(pathName);
  console.log(searchedBlogContent);


  useEffect(() => {
    if (searchTerm) {
      const filteredBySearch = allBlogContent.filter((blog: blogResponse) => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        blog.mainParagraph.toLowerCase().includes(searchTerm.toLowerCase()) || 
        blog.categories.some(cat => cat.title.toLowerCase().includes(searchTerm.toLowerCase()))
);

  
      setSearchedBlogContent(filteredBySearch);
    } else {
      setSearchedBlogContent(allBlogContent);
    }
  }, [searchTerm, allBlogContent]);
  

  const totalPages = Math.ceil(searchedBlogContent?.length / 4);

   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'

    });
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    scrollToTop()
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
    scrollToTop()
  };

  // Calculate the range of page numbers to display
  const pageNumbers = [];
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 1); i++) {
    pageNumbers.push(i);
  }
    

  const blogsPerPage = 4;

  const blogData = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return searchedBlogContent?.slice(startIndex, endIndex);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrentPage(pageNumber)
    scrollToTop()
  };
  return (
    <div className="w-full min-[1009px]:w-[65%] flex-col items-center justify-start gap-6">
      {
        pathName === '/blogs/search' &&  (
          <div className="w-full py-8 px-5 border mb-6 border-black bg-[#f4f4fa] rounded-lg">
            <input 
              type="text"
              placeholder="Search for blogs"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-3 px-5 rounded-lg bg-white w-full font-kumb leading-[26px]"
            />  
          </div>        
        )
      }
         <div className='w-full flex-1 flex flex-col items-center  justify-center gap-8'>
        {blogData().length > 0 ?   blogData().map((blog: blogResponse, id) => (
          <article key={id}  className='flex bg-[#f4f4fa] flex-col items-center justify-center blog gap-6 border border-black rounded-lg min-[649px]:flex-row p-6 lg:p-8 '>
            <div className=" rounded-lg overflow-hidden min-[649px]:w-[40%] h-[244px] w-full ">
              <Image
                src={urlFor(blog.mainImage).url()}
                alt='main-blog-image'
                width={600}
                height={600}
                className='object-cover object-center w-full blog-image h-full'
              />
            </div>
            <div className='flex flex-col justify-start w-full min-[650px]:w-[60%] items-start gap-5'>
                <Link 
                    href={`/blogs/category/${blog.categories[0].slug}`}
                    className=" rounded-md bg-primary hover:bg-primary/50 transition-colors duration-100 text-white px-4 py-2 font-kumb leading-[26px]"
                >
                    {blog.categories[0].title}
                </Link>
                <Link 
                    href={`/blogs/${blog.slug}`}
                    className=" text-xl leading-[30px] text-black hover:text-primary transition-colors duration-100"
                >{blog.title}</Link>
                <p className=" font-kumb leading-[26px] text-[#525252] line-clamp-2 ">{blog.mainParagraph}</p>
                <div className=" flex items-center justify-start gap-3">
                    <Link href={`/blogs/${blog.slug}`} className=" text-[13px] leading-[22px] uppercase hover:text-primary text-black border-b-2 border-[#525252]">READ MORE</Link>
                    <p className=" font-kumb leading-[22px] text-[#525252]">{formatDateTime(blog.publishedAt)}</p>
                </div>
            </div>
          </article>
        ) ): (
          <div className=' text-base text-gray-500 h-max w-full items-center justify-center flex-container flex-wrap'>
              <p className="text-base md:text-lg lg:text-[22px]">Oops! No blogs match your criteria. Try adjusting your filters or explore other topics.</p>
          </div>
        )}
      </div>
      {
        allBlogContent.length > blogsPerPage && (
            <div className=" flex items-center mt-10 font-kumb w-max justify-center gap-4 overflow-hidden ">
                <div className=" rounded-lg border hover:bg-primary py-3 px-6 border-black hover:text-white text-black transition-colors duration-75 cursor-pointer" onClick={handlePrev}>
                  Previous
                </div>
                    <div className=" flex w-max items-center  justify-center gap-3" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {pageNumbers.map((pageNum) => (
                    <button
                      key={pageNum}
                      className={`rounded-lg p-3  border border-black text-black transition-transform duration-100 hover:bg-primary hover:text-white ${
                        pageNum === currentPage ? "bg-primary text-white" : ""
                      }`}
                      onClick={() => handlePageClick(pageNum)}
                    >
                      0{pageNum}
                    </button>
                    ))}
                </div>
                <div className=" rounded-lg border py-3 px-6 hover:bg-primary text-lg hover:text-white transition-colors duration-75 cursor-pointer border-black"  onClick={handleNext}>
                  Next
                </div>
              </div>
        )
      }
    </div>
  )
}
