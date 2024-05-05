import seoData from "./next-seo.config";
// import { promises as fs } from 'fs';
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

export const convertToCamelCase = (inputString) => {
    // Remove leading numbers, symbols, and hyphens
    if (!inputString) {
        return "";
    };
    let cleanedString = inputString
        .replace(/^[^a-zA-Z_]+/, "")
        .replace(/[^a-zA-Z0-9_]+/g, "");

    // Split the string into words
    const words = cleanedString.split(/[\s-_]+/);

    // Capitalize the first letter of each word and join with underscores
    const camelCaseString = words
        .map((word, index) => {
            return index === 0
                ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("_");

    return camelCaseString;

}



