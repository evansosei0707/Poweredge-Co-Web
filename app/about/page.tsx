import { AboutUs, AboutOfferings, MissionVision } from "../Components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Power Edge Equipment Limited',
  description:
    'Power Edge Equipment Limited provides parts supply, component supply, equipment rentals, maintenance services, and more for the mining, earthmoving & power industries in Africa since 2012.',
};

export default function About() {
  return (
    <main className="w-full min-h-[100vh] items-center justify-start flex flex-col gap-6">
        <AboutUs />
        <AboutOfferings />
        <MissionVision />
    </main>
  )
}
