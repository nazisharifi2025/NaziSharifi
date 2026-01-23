import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { getAllBlogs } from "@/lib/data/getBlogs";
import { Inter } from "next/font/google";
import { ArrowLeft, BookOpenText, Clock, Tag } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = (await params).slug;
  return {
    title: `${slug}`,
  };
};

async function fetchBlog(slug: any) {
  const blogs = await getAllBlogs();
  return blogs.find((blog) => blog.slug === slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params; // destructure slug directly
  const blog = await fetchBlog(slug);
  if (!blog) return notFound();
  return (
    <div className="bg-background text-gray-400">
      <article className="w-full max-w-5xl mx-auto my-4 px-4 py-12">
        <Link href={"/blog"} className="flex text-base gap-1.5 my-2">
          <ArrowLeft /> Back to All Blogs
        </Link>
        <span className="bg-primary-color text-sm my-4 flex items-center gap-1 w-fit text-white py-1 px-3 rounded-full">
          <Tag width={17} height={17} /> {blog.category}
        </span>
        <h1 className="text-3xl md:4xl lg:text-5xl font-bold mb-4">
          {blog.title}
        </h1>

        <div className="flex items-center justify-between gap-3 text-sm mb-6">
          <span className="flex items-center text-primary-color gap-1">
            <BookOpenText width={16} height={16} />
            {blog.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock width={16} height={16} />
            {blog.publishedAt}
          </span>
        </div>

        <Image
          src={blog.image}
          alt={blog.title}
          width={1000}
          height={1000}
          className="rounded-md shadow-custom/35 mb-4 w-full h-80 object-cover"
        />

        <div className="markdown prose-lg mx-auto my-2">
          <div>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: blog.html }}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
