import React from 'react'
import { MdArrowDownward } from 'react-icons/md'
import { BlogLeftPane, BlogRightPane } from '../Components'
import { allBlogQuery } from "../lib/query";
import { client, urlFor } from "../lib/client";
import { Metadata } from 'next';


async function getData() {
    const data = await client.fetch(allBlogQuery);

    return data
}

export const metadata: Metadata = {
    title: 'Blogs & Articles By Power Edge Equipment about Mining and Heavy Equipment Maintenance ',
    description: "Stay informed with the latest insights and news in the industrial sector. Explore PowerEdge Equipment's blogs for expert opinions, industry trends, and valuable information.",
  }

export default async function blogPage() {
    const allBlogContent: blogResponse[] = await getData();


  return (
    <main className="w-full min-h-[100vh] items-center justify-start bg-white flex flex-col gap-6">
        <section className='w-[95%] flex items-center pt-20 pb-8 justify-center gap-4'>
            <div className='flex items-center w-full border-b pb-10 border-black relative justify-center' >
                <p className="min-[758px]:text-[70px] text-center leading-[50px] text-[40px] min-[758px]:leading-[80px]">Blogs</p>
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
