import { LI } from "@/common/atoms/icon";
import { Home } from "lucide-react";
import { defineType } from "sanity";

export const homepage = defineType({
    name: "home",
    type: "document",
    title: "Hjemmeside",
    icon: Home, 
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "string",
        },
        {
            name: "entry",
            title: "Beskrivelse",
            description: "Liten beskrivelse av deg",
            type: "richText",
        },
        {
            name: "image",
            type: "image",
            title: "Hovedbildet",
            description: "Hovedbildet til hjemmeside",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    description: "Alternativ tekst / For folk som har l rizz å ikke klarer å se"
                }
            ],
            options: {
                hotspot: true,
            },
        }
    ]
})