import { client } from "../lib/client"
import { projectsQuery } from "../lib/query"
import { ProjectsSlider } from "../Components"

async function getData() {
    const data = client.fetch(projectsQuery);

    return data
}

type Param = {
  serviceSlug : string
}


export default async  function ProjectUnderService({ serviceSlug}: Param ) {
  const projectsData : projectResponse[] = await getData();

  
  return (
    <div className='flex w-full h-full box-border  px-4 mb-8 mx-auto mt-0 justify-center items-center'>
       <ProjectsSlider projectsData={projectsData} />
    </div>
  )
}