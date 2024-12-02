import Image from "next/image";
import { Home } from "../types/pages/home.types";
import { urlFor } from "@/sanity/lib/image";
import PortableText from "../atoms/content/PortableText";

export default function HomeView({ data }: { data: Home }) {
  return (
    <div>
      <h1 className="flex justify-center text-3xl font-semibold">
        {data.title}
      </h1>
      <div className="flex ">
        <div className="ml-5">
          <Image
            src={urlFor(data.image.url).url()}
            alt={data.image.alt}
            height={300}
            width={300}
          />
        </div>
        <div>
          <h1 className="font-semibold text-2xl">
            Om Meg
            <p>
              Hei, Jeg er Thomas, og er 17 år gammel. Jeg går vg2
              Informasjonsteknologi ved Hamar Katedralskole.
            </p>
          </h1>
        </div>
      </div>

      <div className="prose prose-xl">
        <PortableText value={data.entry} />
      </div>
      <div className="flex flex-col justify-center text-3xl font-semibold">
        <p>Mine prosjekter</p>
      </div>
      <div className="flex-col flex font-normal text-2xl">
        {data.project?.map((post, k) => (
          <div key={k}>
            <h2>{post.title}</h2>
            <Image
              src={urlFor(post.mainImage.url).url()}
              alt={post.mainImage.alt}
              height={300}
              width={300}
            />
            <div>
              {/* Assuming `post.content` is a PortableText object or array */}
              <PortableText value={post.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
