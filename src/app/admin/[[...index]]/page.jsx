'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import {NextStudio} from 'next-sanity/studio'
import config from '../../../../sanity.config'
import {useEffect} from "react";
import {createClient} from "next-sanity";
// Initialize Sanity client

export default function StudioPage() {
    useEffect(() => {
        generateAndSetPrivateLinks();
    }, []);
    return <NextStudio config={config}/>
}

async function generateAndSetPrivateLinks() {
    const client = createClient({
        "projectId": "0a3zpxbs",
        "dataset": "production",
        "token": "sk25R4VxZEF65UZySmr1q1BYm1GcaSH0q3V6ykEkGsty8RKcy0WpuWfzo2r9gDcYdgcsi3qzpk8mtHqUgVEBgSgI0ApwJQDXsUeFaOswQVApKObR5chByOaM6dwRUtDQosBjABQgwatiPoMnHZDIowSP5jyIiHR1WVmFpHfw6GDbw9ScW5rC"
    });
    // Fetch all articles
    const articles = await client.fetch(`
    *[_type == "apartment"]{
    ...,
    city->
    }
    `);

    // Generate private links and update articles
    for (const article of articles) {
        if (article.city && article.name) {
            const privateLink = generatePrivateLink(article.city.name, article.name); // Generate the private link
            const updatedArticle = {...article, privateLink};

            console.log(privateLink);
            await client
                .patch(article._id)
                .set({privateLink})
                .commit();
        }
        // // Update the article with the new private link

    }
}

function generatePrivateLink(city, name) {
    // Implement your private link generation logic here
    return `https://hexuvium.com/${city}/${name}`;
}


