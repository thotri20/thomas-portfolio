import Image from "next/image";
import { Post } from "../types/pages/post.types";
import { urlFor } from "@/sanity/lib/image";



export default function PostView({ data }: { data: Post }) {
    return(
        <div>
            <h1>{data.title}</h1>
        </div>
    )
}