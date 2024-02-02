import { ServiceAlpha, ServiceContext } from "@/app/Components";
import { client } from "@/app/lib/client";
import { allServiceQuery } from "@/app/lib/query";
import { Metadata } from "next";


async function getData() {
    const data = await client.fetch(allServiceQuery);

    return data;
} 


type Params = {
  params: {
      uniqueService : string
  }
}

export async function generateMetadata({params: { uniqueService }}: Params): Promise<Metadata> {
  const allCatBlogData: serviceDetailResponse[] = await getData();
  

  // fetch data
  const filteredBlogData =  allCatBlogData.filter((item) => item.pageSlug === uniqueService)

  return {
    title: uniqueService,
    description: filteredBlogData[0].serviceBrief,
  };
}


export default  async function uniqueServicePage({params: { uniqueService}}: Params) {
    

  return (
    <main className="w-full min-h-[100vh] items-center justify-start flex flex-col gap-6">
        <ServiceAlpha uniqueService={uniqueService} />
        <ServiceContext uniqueService={uniqueService} />
    </main>
  )
}


export async function generateStaticParams() {
  const allServiceData: serviceDetailResponse[] = await getData();

  return allServiceData.map(serviceSlug => ({
    params: {
      uniqueService: serviceSlug.pageSlug,
    },
  }))

}