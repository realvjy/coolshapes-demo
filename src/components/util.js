import seoData from "./next-seo.config";
import { promises as fs } from 'fs';
import path from "path";

export const getMetaDataForPage = (title) => {
    return {
        title,
        openGraph: {
            type: "website",
            description: seoData.openGraph.description,
            url: seoData.openGraph.url,
            title: title,
            locale: "en_EN",
            siteName: "uilogos",
            images: [
                {
                    width: 1200,
                    height: 630,
                    url: seoData.openGraph.images[0].url,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: seoData.twitter.cardType,
            title: title,
            description: seoData.openGraph.description,
            creator: seoData.twitter.handle,
            creatorId: seoData.twitter.id,
            site: "vjy.me",
            images: [seoData.openGraph.images[0].url],
        },
    };
};



