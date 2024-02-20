import { client } from './lib/client';
import HeroBanner from './Components/HeroBanner';
import { AboutMining, HomeServices, HomeOperatons, HomeContactUs, CustomerClient, Partners, BlogArticles } from './Components';

async function getData() {
 const query = `*[_type == 'homeContents'][0] {
    heroData[] {
        title,
        message,
        subTitle,
        Image{
          asset -> {
            url,
            
          }
        },
    },
}
`
  const data = await client.fetch(query)

  return data;
}


export default async function Home() {
  const bannerData: heroResponse = await getData();
  

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <HeroBanner bannerData={bannerData} />
        <div className='w-[96%] lg:hidden mx-auto mt-4 '>
          <p className=' text-[19px] leading-7'>Promoting Made in USA goods and services in the construction & mining industry worldwide
</p>
        </div>
         <AboutMining />
         <HomeServices />
         <HomeOperatons />
         <HomeContactUs />
         <CustomerClient />
         <Partners />
         <BlogArticles />
    </main>
  )
}
