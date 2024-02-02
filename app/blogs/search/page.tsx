
import { BlogLeftPane, BlogRightPane } from "@/app/Components";
import { client } from "@/app/lib/client";
import { allBlogQuery } from "@/app/lib/query";
import { MdArrowDownward } from "react-icons/md";

async function getData() {
    const data = await client.fetch(allBlogQuery);

    return data;
}


export default  async function searchBlogs() {
    const allBlogContent: blogResponse[] = await getData();
      

      return (
        <main className="w-full min-h-[100vh] items-center bg-white justify-start flex flex-col gap-6">
            <section className='w-[95%] flex items-center pt-20 pb-8 justify-center gap-4'>
                <div className='flex items-center w-full border-b pb-10 border-black relative justify-center' >
                    <p className="min-[758px]:text-[50px] text-center leading-[40px] text-[30px] min-[758px]:leading-[60px]">Search for Blogs</p>
                    <a href="#blog-Page" className='bg-primary p-3 text-white font-bold rounded-lg absolute -bottom-6 left-1/2'>
                        <MdArrowDownward fontSize={20} />
                    </a>
                </div>
            </section>
            <section id='blog-Page' className='w-[95%] flex-col flex min-[999px]:items-start items-center justify-center gap-6 mt-6 min-[999px]:flex-row'>
                <BlogLeftPane allBlogContent={allBlogContent} />
                <BlogRightPane allBlogContent={allBlogContent} />
            </section>
        </main>
      )
}

