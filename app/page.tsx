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
