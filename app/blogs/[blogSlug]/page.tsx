import { BlogDetailLeftPane, BlogRightPane } from "@/app/Components";
import { client } from "@/app/lib/client";
import { allBlogQuery } from "@/app/lib/query";
import { Metadata } from "next";
import { MdArrowDownward } from "react-icons/md";

async function getData() {
    const data = await client.fetch(allBlogQuery);

    return data;
} 


type Params = {
  params: {
      blogSlug : string
  }
}

export async function generateMetadata({params: { blogSlug }}: Params): Promise<Metadata> {
  const singleServiceData: blogResponse[] = await getData();
  

  // fetch data
  const data = singleServiceData.find((item) => item.slug.toLowerCase().includes(blogSlug.toLowerCase()));

  if(singleServiceData.length < 1 || !singleServiceData ) {
    return {
      title: 'No Blog Found'
    }
  }

  return {
    title: singleServiceData[0].title,
    description: singleServiceData[0].mainParagraph,
  };
}


export default  async function blogDetailPage({params: { blogSlug }}: Params) {
    const allBlogContent: blogResponse[] = await getData();

    const filteredBlogData =  allBlogContent.filter((blogPost: blogResponse) =>
        blogPost.slug === blogSlug
      )

      return (
        <main className="w-full min-h-[100vh] items-center bg-white justify-start flex flex-col gap-6">
            <section className='w-[95%] flex items-center pt-20 pb-8 justify-center gap-4'>
                <div className='flex items-center w-full border-b pb-10 border-black relative justify-center' >
                    <p className="min-[758px]:text-[50px] text-center leading-[40px] capitalize text-[30px] min-[758px]:leading-[60px]">{filteredBlogData[0].title}</p>
                    <a href="#blog-Page" className='bg-primary p-3 text-white font-bold rounded-lg absolute -bottom-6 left-1/2'>
                        <MdArrowDownward fontSize={20} />
                    </a>
                </div>
            </section>
            <section id='blog-Page' className='w-[95%] flex-col flex min-[999px]:items-start items-center justify-center gap-6 mt-6 min-[999px]:flex-row'>
                <BlogDetailLeftPane filteredBlogData={filteredBlogData} />
                <BlogRightPane allBlogContent={allBlogContent} />
            </section>
        </main>
      )
}


export async function generateStaticParams() {
    const allBlogContent: blogResponse[] = await getData();
  
    return allBlogContent.map( item => ({
      params: {
        blogSlug: item.slug
      },
    }))
  
  }
    