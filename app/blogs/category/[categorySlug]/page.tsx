import { BlogLeftPane, BlogRightPane } from "@/app/Components";
import { client } from "@/app/lib/client";
import { allBlogQuery } from "@/app/lib/query";
import { MdArrowDownward } from "react-icons/md";
import { serviceLinks } from "@/app/lib/helper"
import { Metadata } from "next";

async function getData() {
    const data = await client.fetch(allBlogQuery);

    return data;
} 


type Params = {
  params: {
      categorySlug : string
  }
}


export async function generateMetadata({params: { categorySlug }}: Params): Promise<Metadata> {
  const allCatBlogData: blogResponse[] = await getData();
  

  const filteredBlogData =  allCatBlogData.filter((blogPost: blogResponse) =>
        blogPost.categories.some(category => category.slug === categorySlug)
      )
  
  if(filteredBlogData.length < 1 || !filteredBlogData ) {
    return {
      title: 'No Blog found in Category'
    }
  }

  return {
    title: `Category:  ${filteredBlogData[0].categories[0].title }`,
    description: filteredBlogData[0].mainParagraph 
  };
}

export default  async function categoryBlogs({params: { categorySlug }}: Params) {
    const allCatBlogData: blogResponse[] = await getData();

    const filteredBlogData =  allCatBlogData.filter((blogPost: blogResponse) =>
        blogPost.categories.some(category => category.slug === categorySlug)
      )

      return (
        <main className="w-full min-h-[100vh] items-center bg-white justify-start flex flex-col gap-6">
            <section className='w-[95%] flex items-center pt-20 pb-8 justify-center gap-4'>
                <div className='flex items-center w-full border-b pb-10 border-black relative justify-center' >
                    <p className="min-[758px]:text-[50px] text-center leading-[40px] text-[30px] min-[758px]:leading-[60px]">Category Archives: {categorySlug}</p>
                    <a href="#blog-Page" className='bg-primary p-3 text-white font-bold rounded-lg absolute -bottom-6 left-1/2'>
                        <MdArrowDownward fontSize={20} />
                    </a>
                </div>
            </section>
            <section id='blog-Page' className='w-[95%] flex-col flex min-[999px]:items-start items-center justify-center gap-6 mt-6 min-[999px]:flex-row'>
                <BlogLeftPane allBlogContent={filteredBlogData} />
                <BlogRightPane allBlogContent={allCatBlogData} />
            </section>
        </main>
      )
}


export async function generateStaticParams() {
  
    return serviceLinks.map( item => ({
      params: {
        categorySlug: item.linkName
      },
    }))
  
  }
    