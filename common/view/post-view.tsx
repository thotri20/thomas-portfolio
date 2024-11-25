import Image from "next/image";
import { Post } from "../types/pages/post.types";
import { urlFor } from "@/sanity/lib/image";
import PortableText from "../atoms/content/PortableText";



export default function PostView({ data }: { data: Post }) {
    return(
        <div>
            <h1>{data.title}</h1>

            <Image
                src={urlFor(data.mainImage.url).url()}
                alt={data.mainImage.alt}
                height={500}
                width={500}
            />

            <div className="prose prose-xl">
                <PortableText value={data.content} />
            </div>
        </div>
    )
}