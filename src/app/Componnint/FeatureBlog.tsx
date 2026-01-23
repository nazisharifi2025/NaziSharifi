import Link from "next/link";
import { BlogPost } from "../(Pages)/blogs/blog"; 

type Props = {
  blogs: BlogPost[];
};

export default function FeatureBlog({ blogs }: Props) {
  const featurePost = blogs.find((blog) => blog.feature);

  if (!featurePost) return null;

  return (
    <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Featured Post</h2>
      <Link href={`/blog/${featurePost.slug}`}>
        <h3 className="text-2xl font-semibold hover:underline">{featurePost.title}</h3>
      </Link>
      <p className="mt-2 text-gray-600">{featurePost.excerpt}</p>
    </div>
  );
}
