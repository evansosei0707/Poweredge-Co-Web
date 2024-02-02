
type hereObj = {
    title: string,
    subTitle: string,
    Image: any
}

type heroResponse = {
    heroData : hereObj[]
}

type homeAboutData = {
    title: string,
    paragraph1: string,
    paragraph2: string,
    image: any,
    contact: string,
}


type aboutOverviewResponse = {
        aboutOverview: homeAboutData
       
}


type operationVital = {
        figure: number,
        append: string,
        operation: string,
        operationDetail: string,
      
}

type operationResponse = {
     operations: operationVital[]
}

type homeContactVital = {
    chyron: string[],
    imageUrl: any,
}

type homeContactResponse = {
    homeContact: homeContactVital
}

type clientVital = {
    name: string,
    job: string,
    message: string,
    clientImage: any
}

type clientResponse = {
    feedbacks: clientVital[];
}

type logoVital = {
    image: any
}

type logoResponse = {
    logos: logoVital[]
}


type aboutBriefVital = {
    aboutBrief1: string,
    aboutBrief2: string,
    firstImage: any,
    secondImage: any,
        
}

type aboutBriefResponse = {
    aboutBrief: aboutBriefVital
}

type aboutServiceVital = {
    Title: string,
    image: any,
         
}

type aboutServiceResponse = {
        aboutService: aboutServiceVital[]
}

type visionGoalVital = {
    subject,
    body,
}

type visionGoalResponse = {
    aboutCompany: visionGoalVital[]
}



type serviceDetailResponse = {
    pageSlug: string,
    title: string,
    serviceBrief: string,
    firstPara: string,
    secondPara: string,
    mainImage: any,
    secondImage: any,
    instinctTitle: string,
    instinctPara: string,
    sharedData: string[],
}

type allServiceResponse = {
    pageSlug: string,
    title: string,
}

type projectDuration = {
    startTime: string,
    endTime: string,
}

type slugRef = {
    refSlug: string
}

type projectResponse = {
    _id : string,
    duration : projectDuration,
    mainImage: any,
    operations: string[],
    service: slugRef[],
    country: string,
    client: string,
}

type contactVital1 = {
    briefHistory: string,
    phoneNumber: string,
    email: string,
}

type contactVital2 = {
    telephone1: string,
    telephone2: string | null,
}

type contactVital2Main = {
    telephone: contactVital2,
    image: any,
    country: string,
    address: string,
    company: string,

}

type executivesVital = {
        image : any,
        number: string | null,
        role: string,
        name: string,
        email: string | null,
        _key: string,
}

type contactResponse = {
        contactBrief: contactVital1,
        locations: contactVital2Main[],
        executives: executivesVital[],
}

type estimateVital = {
    facebook: string | null,
    linkedIn: string | null,
    twitter: string | null,
    youtube: string | null,
    instagram: string | null,
    tiktok: string | null,
}

type estimateVitalMain = {
    para_estimate: string,
    title: string,
    socials: estimateVital,
}

type estimateResponse = {
    estimate:estimateVitalMain
}

type headerContactVital1 ={
    address: string,
    phoneNumber: string,
}

type headerContactVital2 = {
    socials: estimateVital
}


type headerContactResponse = {
    contactBrief: headerContactVital1,
    estimate : headerContactVital2

}

type blogSectionVital = {
    _key: string,
    subTitle: string | null,
    subPara: string | null,
    subListing: string[] | null,
    subImage : any,
}

type categoryObj = {
    slug: string,
    title: string,
   
}

type tagOjb = {
    tagSlug: string,
    title: string,
}

type blogResponse = {
    slug: string,
    _id: string,
    title: string,
    mainImage: any,
    mainParagraph: string,
    blogSection:blogSectionVital[],
    categories: categoryObj[],
    tag: tagOjb[],
    publishedAt: string,

}

type statementVital = {
    subject: string;
    description: string;
}

type privacyResponse = {
    policyStatement: statementVital[];
    corporatePolicy: string;
      
}

type footerResponse = {
    firstSummary: string,
    secondSummary: string,
    thirdSummary: string,
}