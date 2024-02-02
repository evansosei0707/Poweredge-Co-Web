import { Metadata } from "next";
import { CompanyHeads, CompanyLocations, ContactOverhead, Estimate } from "../Components"
import { client } from "../lib/client"
import { contactQuery } from "../lib/query";

async function getData() {
  const data = await client.fetch(contactQuery);

  return data;
}

export const metadata: Metadata = {
  title: 'Contact Power Edge Equipment - Reach Out to Our Global Locations',
  description: "Connect with Power Edge Equipment at our Burkina Faso, Mali, Cote D’Ivoire, Ghana, Botswana, South Africa, DR Congo, and USA locations. Get in touch for parts supply, equipment rentals, and comprehensive support in mining, earthmoving, and power generation industries across Africa and beyond ",
}

export default async function page() {
  const contactData:contactResponse = await getData();

  
  return (
    <main className="w-full flex flex-col items-center h-full justify-center gap-6">
        <ContactOverhead overheadData={contactData.contactBrief} />
        <CompanyLocations locationsData={contactData.locations} />
        <Estimate />
        <CompanyHeads executivesData={contactData.executives} />
    </main>
  )
}
