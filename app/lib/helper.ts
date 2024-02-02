import blogImage from '@/public/power1.jpg';


type Link = {
    id: number;
    service: string;
    linkName: string;
    href: string;
}


export const blogOverview = [
    {
        category: 'Mining',
        image: blogImage,
        title: 'Announce drill results in its uphill and deposits at bottom and breath of the mining and querying center',
        firstPara: 'Were permitting reform essential to advance energy infrastructure development We are here to assist you in any other thing you may need to make a successful extraction of the minerals on your site. We can also have you repair and maintain our durable products for the long term just in case you have fault with it',
        date: '10 Jan, 2024',
    },
    {
        category: 'Planning',
        image: blogImage,
        title: 'Announce drill results in its uphill and deposits at bottom and breath of the mining and querying center',
        firstPara: 'Were permitting reform essential to advance energy infrastructure development We are here to assist you in any other thing you may need to make a successful extraction of the minerals on your site. We can also have you repair and maintain our durable products for the long term just in case you have fault with it',
        date: '10 Jan, 2024',
    },
    {
        category: 'Drilling',
        image: blogImage,
        title: 'Announce drill results in its uphill and deposits at bottom and breath of the mining and querying center',
        firstPara: 'Were permitting reform essential to advance energy infrastructure development We are here to assist you in any other thing you may need to make a successful extraction of the minerals on your site. We can also have you repair and maintain our durable products for the long term just in case you have fault with it',
        date: '10 Jan, 2024',
    },
    {
        category: 'Excavating',
        image: blogImage,
        title: 'Announce drill results in its uphill and deposits at bottom and breath of the mining and querying center',
        firstPara: 'Were permitting reform essential to advance energy infrastructure development We are here to assist you in any other thing you may need to make a successful extraction of the minerals on your site. We can also have you repair and maintain our durable products for the long term just in case you have fault with it',
        date: '10 Jan, 2024',
    },
    {
        category: 'Mounting',
        image: blogImage,
        title: 'Announce drill results in its uphill and deposits at bottom and breath of the mining and querying center',
        firstPara: 'Were permitting reform essential to advance energy infrastructure development We are here to assist you in any other thing you may need to make a successful extraction of the minerals on your site. We can also have you repair and maintain our durable products for the long term just in case you have fault with it',
        date: '10 Jan, 2024',
    }
]

export const serviceLinks: Link[] = [
    {
        id:1,
        service: 'Parts Supply',
        linkName: 'parts-supply',
        href: '/services/parts-supply'
    },
    {
        id: 2,
        service: 'Components Supply',
        linkName: 'components-supply',
        href: '/services/components-supply'

    },
    {
        id: 3,
        service: 'Components Rebuild/Refurbish',
        linkName: 'components-rebuild-refurbish',
        href: '/services/components-rebuild-refurbish'

    },
    {
        id: 4,
        service: 'Equipment Rentals',
        linkName: 'equipment-rentals',
        href: '/services/equipment-rentals',

    },
    {
        id: 5,
        service: 'Production Equipment Maintenance',
        linkName: 'production-equipment-maintenance',
        href: '/services/production-equipment-maintenance',

    },
    {
        id: 6,
        service: 'Labour Hire',
        linkName: 'labour-hire',
        href: '/services/labour-hire',

    },
    {
        id: 7,
        service: 'New Equipment Assembling',
        linkName: 'new-equipment-assembling',
        href: '/services/new-equipment-assembling'
    },
    {
        id: 8,
        service: 'Support Load & Hauling Projects/Contracts',
        linkName: 'support-load-and-hauling-projects-contracts',
        href: '/services/support-load-and-hauling-projects-contracts'

    },
]



  export  function formatDateTime(dateTimeString: string) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' } as const;
    const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);
    return formattedDate;
  }
  
