"use client";
import { useState } from "react";
import { BlogPost } from "../(Pages)/blogs/blog";
import Link from "next/link";
import { ArrowRight, SearchIcon, Tag } from "lucide-react";
import DataCard from "./dataCard";

type Props = {
  blogs: BlogPost[];
};

export default function Search({ blogs }: Props) {
  const [query, setQuery] = useState("");
const filtered = blogs.filter(
  (blog) =>
    blog.feature=== false &&
    (
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      blog.category.toLowerCase().includes(query.toLowerCase())
    )
);

  return (
    <div className="my-4">
      <div className=" w-10/12 flex flex-col gap-3 justify-center items-center mx-auto">
      <h1 className="text-2xl font-bold text-gray-200">Search Blogs with titles</h1>
      <label htmlFor="" className="lg:w-6/12 md:w-9/12 w-11/12 relative mx-auto">
        <SearchIcon size={20}  className="text-gray-500 absolute top-3 left-2 text-sm"/>
      <input
        type="text"
        placeholder="Enter blog title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-white py-3 px-8 border border-gray-500/40 outline-0 placeholder:text-gray-500 text-sm rounded-lg mb-4"
      />
      </label>
      </div>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:w-10/12 w-11/12 mx-auto gap-4">
        {filtered.map((blog) => (
          // <DataCard key={blog.id} blog={blog} />
            <div className="text-gray-400 " >
            <div className="border border-fuchsia-400/20 lg:h-[74vh] h-[55vh] hover:border-fuchsia-400/20 shadow-fuchsia-400/40 hover:shadow-[0_0_12px_0_rgba(0,0,0,0.3)]  rounded-md  hover:-translate-y-2 transition-all duration-700 cursor-pointer">
              <img src={blog.image} className="w-full rounded-t-md h-[200px]" alt="" />
              <div className=" w-full flex flex-col h-[250px] justify-between">
              <div className="flex flex-col gap-2 py-5 p-2">
                <div className=" flex justify-between items-center px-3">
                <span>{blog.publishedAt}</span>
                <button className="px-3 text-white font-normal py-1 rounded-full text-sm flex justify-center items-center space-x-1 bg-blue-700"><Tag width={17} height={17} />{blog.category} </button>
                </div>
              <h3 className="font-semibold text-xl">{blog.title}</h3>
              <p className="text-gray-500 text-sm font-medium">{blog.excerpt}</p>
              </div>
              <div className="flex justify-between items-center px-3">
                <span>{blog.readTime}</span>
               <Link className="text-blue-700 font-medium flex items-center cursor-pointer hover:text-blue-500" href={`/blogs/${blog.slug}`} > Read More <ArrowRight size={18} /></Link>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
