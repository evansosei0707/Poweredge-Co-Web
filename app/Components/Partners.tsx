import { LogoSlider } from ".";
import { client } from "../lib/client";

async function getData() {
    const query = `*[_type == 'homeContents'][0] {
        logos[] {
           image{
              asset -> {
                url
              }
           }
        }     
    }
    `

    const data = await client.fetch(query);

    return data;
}

export default async function Partners() {
    const partnersLogo: logoResponse  = await getData();

  return (
    <section className="flex w-full flex-wrap items-center my-10 justify-center gap-6 px-6">
       <LogoSlider logoData={partnersLogo} />
    </section>
  )
}
