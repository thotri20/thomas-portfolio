import { LI } from "@/common/atoms/icon";
import { Home } from "lucide-react";
import { defineType } from "sanity";

export const homepage = defineType({
    name: "home",
    type: "document",
    title: "Hjemmeside",
    icon: Home, 
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
            title: "Tittel",
            type: "string",
            group: "general"
        },
        {
            name: "entry",
            title: "Beskrivelse",
            description: "Liten beskrivelse av deg",
            type: "simpleRichText",
            group: "general"
        },
        {
            name: "image",
            type: "image",
            title: "Hovedbildet",
            description: "Hovedbildet til hjemmeside",
            options: {
                hotspot: true,
            },
        }
    ]
})