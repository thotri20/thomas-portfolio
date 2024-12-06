import Image from "next/image";
import { Home } from "../types/pages/home.types";
import { urlFor } from "@/sanity/lib/image";
import PortableText from "../atoms/content/PortableText";

export default function HomeView({ data }: { data: Home }) {
  return (
    <div>
      <div className=" bg-neutral-400">
      <h1 className="flex justify-center text-3xl font-semibold text-white">
        {data.title}
      </h1>
      </div>
      <div className="flex justify-center mt-6">
        <div className="ml-5">
          <Image
          className="rounded-md"
            src={urlFor(data.image.url).url()}
            alt={data.image.alt}
            height={300}
            width={300}
          />
          <div className="prose prose-xl">
        <PortableText value={data.entry} />
      </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">
            Om Meg
            <p className=" justify-center flex">
              Hei, Jeg er Thomas, og er 17 år gammel. Jeg går vg2
              <br>
              </br>Informasjonsteknologi ved Hamar Katedralskole.
              <br>
              </br>
              Jeg liker å lage nettsider, lage extensions og spill
            </p>
          </h1>
        </div>
      </div>

      
      <div className="flex flex-col justify-center text-3xl font-semibold mt-[10%]">
        <p className="flex justify-center">Mine prosjekter</p>
      </div>
      <div className="flex-wrap flex font-normal justify-evenly text-2xl mt-4">
        {data.project?.map((post, k) => (
          <div key={k}>
            <h2 className="font-semibold">{post.title}</h2>
            <div>
            <Image
              className="rounded-md"
              src={urlFor(post.mainImage.url).url()}
              alt={post.mainImage.alt}
              height={300}
              width={300}
            />
            </div>
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
