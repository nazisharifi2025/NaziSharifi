import FeatureBlog from "@/app/Componnint/FeatureBlog";
import Search from "@/app/Componnint/Search";
import { getAllBlogs } from "./getBlogs"; 
import type { BlogPost } from "./blog"; 
import AllBlog from "@/app/Componnint/AllBlog";
export const metadata = {
  title: "Blog",
};
async function page() {
  const blogs: BlogPost[] = await getAllBlogs();
  return (
    <div className="mx-auto max-w-6xl w-full">
      <FeatureBlog blogs={blogs} />
      <Search blogs={blogs} />
      <AllBlog blogs={blogs} />
    </div>
  );
}

export default page;
