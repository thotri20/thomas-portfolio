import { SanityRichtTextType } from "../root.types";


export type Post = {
    _id: string;
    _type: "post";
    title: string;
    mainImage: any;
    content: SanityRichtTextType;
}