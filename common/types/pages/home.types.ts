import { SanityRichtTextType } from "../root.types";


export type Home = {
    _id: string;
    _type: "home";
    title: string;
    image: any;
    entry: SanityRichtTextType;
    //TODO: LEGG TIL FLERE TYPES
}