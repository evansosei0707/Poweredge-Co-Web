export const aboutOverview = `*[_type == 'homeContents'][0] {
    aboutOverview {
        title,
        paragraph1,
        paragraph2,
        contact,
        image{
          asset ->{
            url
            
          }
        }
    }
   
 }
 `

 export const serviceOverview = `*[_type == 'homeContents'][0] {
  servicesOverview[] {
    serviceTitle,
    serviceDetail,
    Image{
      asset ->{
        url
      }
    }
  }
  
}
`

export const  OperationsOverview = `*[_type == 'homeContents'][0] {
  operations[] {
    figure,
    append,
    operation,
    operationDetail
  }
    
}
`

export const homeContactOverview = `*[_type == 'homeContents'][0] {
  homeContact {
    chyron,
    "imageUrl": image{
        asset -> {
          url
        }
    }
  }
}
`

export const clientOverview = `*[_type == 'homeContents'][0] {
  feedbacks[] {
    name,
    job,
    message,
    clientImage{
         asset -> {
           url
         }
    }
  }

}      
`

export const aboutBriefOverview = `*[_type == 'aboutContent'][0] {
  aboutBrief {
    aboutBrief1,
    aboutBrief2,
    firstImage {
      asset -> {
        url
      }
    },
    secondImage {
      asset -> {
        url
      }
    },
  }
}`

export const aboutServiceQuery = `*[_type == 'aboutContent'][0] {
  aboutService[] {
    Title,
    image{
      asset -> {
        url
        
      }
    }
  }

}`

export const VisionGoal = `*[_type == 'aboutContent'][0] {
  aboutCompany[] {
    subject,
    body,
  }

}`

export const serviceDetailQuery = (serviceId: string) => {
  const query = `*[_type == 'serviceDetail' && slug.current == '${serviceId}'][0] {
    "pageSlug": slug.current,
    title,
    serviceBrief,
    firstPara,
    secondPara,
    mainImage{
      asset -> {
        url
      }
    },
    secondImage{
      asset -> {
        url
      }
    },
    instinctTitle,
    instinctPara,
    sharedData
  
    
  }`

  return query;
}


  export const homeServicesQuery = `*[_type == 'serviceDetail'] {
    title,
    serviceBrief,
    firstPara,
    secondPara,
    mainImage{
      asset -> {
        url
      }
    },
    secondImage{
      asset -> {
        url
      }
    },
    instinctTitle,
    instinctPara,
    sharedData
  
    
  }`



  export const allServiceQuery = `*[_type == 'serviceDetail'] {
    "pageSlug": slug.current,
    title,
    serviceBrief,
    firstPara,
    secondPara,
    mainImage{
      asset -> {
        url
      }
    },
    secondImage{
      asset -> {
        url
      }
    },
    instinctTitle,
    instinctPara,
    sharedData
    
  }`

  export const projectsQuery = `*[_type == 'projects']  {
    _id,
    duration,
      mainImage{
        asset -> {
          url
        }
      },
    operations,
    service[] -> {
      "refSlug" : slug.current,
    },
    country,
    client,
  }
  `

  export const contactQuery = `*[_type == 'contactContent'][0] {
    contactBrief{
      briefHistory,
      phoneNumber,
      email,
    },
    locations[] {
      telephone {
        telephone1,
        telephone2,
      },
      country,
      image{
        asset -> {
          url
        }
      },
      address,
        company
    },
    executives[] {
      image {
        asset -> {
          url
        }
      },
      number,
      role,
      name,
      email,
      _key,
    }
  }`

  export const estimateCardQuery = `*[_type == 'contactContent'][0] {
    estimate {
      title,
      para_estimate,
        socials {
        facebook,
        linkedIn,
        twitter,
        youtube,
        instagram,
        tiktok,
        }
    }
  }`


  export const headerContactQuery = `*[_type == 'contactContent'][0] {
     contactBrief{
        address,
        phoneNumber,
    },
    estimate {
        socials {
        facebook,
        linkedIn,
        twitter,
        youtube,
        instagram,
        tiktok,
        }
    }
  }`

  export const allBlogQuery = `*[_type == 'blogPost'] | order(_createdAt desc) {
    "slug": slug.current,
     title,
     _id,
     mainParagraph,
     mainImage {
       asset -> {
         url
       }
     },
    blogSection[] {
      _key,
      subTitle,
      subPara,
      subListing[],
      subImage {
        asset -> {
          url
        }
      },
    },

     categories[] -> {
       "slug": slug.current,
       title,
     },

     tag[] -> {
       tag,
       "tagSlug": slug.current,
     },

     publishedAt,
    
  }`

  export const tagsQuery = `*[_type == 'tag'] {
    tag,
    "tagSlug": slug.current 
}`


export const privacyQuery = `*[_type == 'privacyPolicy'][0] {
  policyStatement[] {
    subject,
    description,
  },
  corporatePolicy
}
`

export const footerQuery = `*[_type == 'footer'][0] {
  firstSummary,
  secondSummary,
  thirdSummary,
    
}
`