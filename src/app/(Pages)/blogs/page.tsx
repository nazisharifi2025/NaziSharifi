import FeatureBlog from "@/app/Componnint/FeatureBlog";
import Search from "@/app/Componnint/Search";
import { getAllBlogs } from "./getBlogs"; 
import type { BlogPost } from "./blog"; 
import Navbar from "@/app/Componnint/Navbar";
import Footer from "@/app/Componnint/Footer";
export const metadata = {
  title: "Blog",
};
async function page() {
  const blogs: BlogPost[] = await getAllBlogs();
  return (
    <div className="mx-auto bg-gray-950 pt-24 w-full">
      <Navbar />
      <FeatureBlog blogs={blogs} /> 
      <Search blogs={blogs} />
      {/* <AllBlog blogs={blogs} /> */}
      <Footer />
    </div>
  );
}

export default page;
