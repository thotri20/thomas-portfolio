import { defineType } from "sanity";
import { Newspaper } from "lucide-react";


export const postType = defineType({
    type: "document",
    name: "post",
    title: "Prosjekter",
    icon: Newspaper,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
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
            type: "image",
            description: "Hovedbilde for post",
            fields: [
                {
                    name: "alt",
                    type: "string",
                }
            ]
        },
        {
			name: 'content',
			type: 'richText',
			title: 'Content',
		},
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Publisert',
            description: 'Dato for publisering av artikkelen',
            initialValue: new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        },
    ]
})