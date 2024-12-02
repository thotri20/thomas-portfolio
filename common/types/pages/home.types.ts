import { SanityRichtTextType } from "../root.types";
import { Project } from "./post.types";


export type Home = {
    _id: string;
    _type: "home";
    title: string;
    image: any;
    entry: SanityRichtTextType;
    project: Project[];
}