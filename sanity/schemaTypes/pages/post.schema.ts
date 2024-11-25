import { defineType } from "sanity";
import { Newspaper } from "lucide-react";


export const postType = defineType({
    type: "document",
    name: "article",
    title: "Article",
    icon: Newspaper,
    groups: [
        {
            name: "general",
            title: "General",
            default: true,
        },
    ],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            group: "general",
            description: "Tittel til siden"
        },
        {
            name: "slug",
            type: "slug",
            options: {
                source: 'title',
            },
            description: "Url til post eks: /next-js-sanity-prosjekt"
        },
        {
            name: "mainImage",
            title: "Hoved bilde",
            group: "general",
            type: "image",
            description: "Hovedbilde for post"
        },
        {
			name: 'content',
			type: 'richText',
			title: 'Content',
			group: 'general',
		},
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Publisert',
            description: 'Dato for publisering av artikkelen',
            group: 'byline',
            initialValue: new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        },
    ]
})