import Link from "next/link";
import { BlogPost } from "../(Pages)/blogs/blog"; 

type Props = {
  blogs: BlogPost[];
};

export default function FeatureBlog({ blogs }: Props) {
  const featurePost = blogs.find((blog) => blog.feature);

  if (!featurePost) return null;

  return (
    <div className="mb-8 lg:h-[59vh] md:h-[39vh] h-fit mx-auto border border-fuchsia-900/40 bg-transparent flex md:flex-row flex-col rounded-lg lg:w-10/12 w-11/12 shadow-md">
      <img src={featurePost.image} className="h-full lg:w-[500px] md:w-5/12 w-full rounded-l-lg" alt="" />
      <div className=" lg:w-1/2 w-full lg:pl-12 md:pl-2 py-4 flex flex-col gap-4">
      <h2 className=" font-bold py-2 px-2 items-center bg-gray-100 gap-3 w-fit flex space-x-2 text-sm rounded-xl text-gray-700"> <span className="px-3 bg-blue-700 py-0.5  text-white rounded-full ">Featured</span> 6 min read</h2>
        <h3 className="lg:text-4xl text-2xl font-semibold text-stone-300">{featurePost.title}</h3>
      <p className="mt-2 text-gray-500">{featurePost.excerpt}</p>
      <button className="  px-6 py-1 border bg-blue-800 border-gray-300 text-white rounded-md w-fit">
        <Link href={`blogs/${featurePost.slug}`}>Read More..</Link>
      </button>
      </div>
    </div>
  );
}
