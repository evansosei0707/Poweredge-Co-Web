import { BlogLeftPane, BlogRightPane } from "@/app/Components";
import { client } from "@/app/lib/client";
import { allBlogQuery, tagsQuery } from "@/app/lib/query";
import { MdArrowDownward } from "react-icons/md";
import { Metadata } from "next";

async function getData() {
    const data = await client.fetch(allBlogQuery);

    return data;
} 

async function getTagsData() {
    const data = await client.fetch(tagsQuery);

    return data;
} 


type Params = {
  params: {
      tagSlug : string
  }
}

export async function generateMetadata({params: { tagSlug }}: Params): Promise<Metadata> {
  const allCatBlogData: blogResponse[] = await getData();
  

  // fetch data
  const filteredBlogData =  allCatBlogData.filter((item, idx) => {
    item.tag.some(tagItem => tagItem.tagSlug.toLowerCase().includes(tagSlug.toLowerCase()))
  })

  if(filteredBlogData.length < 1 || !filteredBlogData ) {
    return {
      title: 'No Blog found in this tag'
    }
  }

  return {
    title:  'Common Tag among blogs ',
    description:  `Articles with common tags:  ${filteredBlogData.map((item, idx) => {
      <span key={idx}>{item.title}</span>
    })}
      <span key={item._id}>{item.title}</span>
    })} `,
  };
}


export default  async function tagBlogs({params: { tagSlug }}: Params) {
    const allCatBlogData : blogResponse[] = await getData();

    const filteredBlogData =  allCatBlogData.filter((blogPost: blogResponse) =>
        blogPost.tag.some(tagItem => tagItem.tagSlug === tagSlug)
      )

      return (
        <main className="w-full min-h-[100vh] items-center bg-white justify-start flex flex-col gap-6">
            <section className='w-[95%] flex items-center pt-20 pb-8 justify-center gap-4'>
                <div className='flex items-center w-full border-b pb-10 border-black relative justify-center' >
                    <p className="min-[758px]:text-[50px] text-center leading-[40px] text-[30px] min-[758px]:leading-[60px]">Tag Archives: {tagSlug}</p>
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
    const allTagsData: tagOjb[] = await getTagsData();
  
    return allTagsData.map( item => ({
      params: {
        tagSlug: item.tagSlug
      },
    }))
  
  }
    