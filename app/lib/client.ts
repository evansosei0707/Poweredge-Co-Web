import { createClient } from 'next-sanity'
import  ImageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'mc3f3t9x',
    dataset: 'production',
    apiVersion: '2024-01-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_API_TOKEN,
})

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source)
}