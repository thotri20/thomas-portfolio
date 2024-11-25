import { POST_BY_SLUG } from "@/common/queries/pages/post.queries";
import PostView from "@/common/view/post-view";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ sortOrder?: string }>;
};

const getData = async (slug: string) => {
  const initial = await sanityFetch({
    query: POST_BY_SLUG,
    params: { slug },
  });

  return initial;
};

export default async function PostPage(props: Props) {
  const resolvedParams = await props.params;
  const slug = resolvedParams.slug;

  const data = await getData(slug);

  if (!data || !data.data) return notFound(); 

  return (
    <>
        <PostView data={data.data} />
    </>
  );
}