"use client";
import React, { useState } from "react";
import { BlogPost } from "../(Pages)/blogs/blog";
import Link from "next/link";

type Props = {
  blogs: BlogPost[];
};

export default function Search({ blogs }: Props) {
  const [query, setQuery] = useState("");

  const filtered = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    blog.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`}>
            <div className="border p-3 rounded-md hover:shadow-lg transition cursor-pointer">
              <h3 className="font-semibold">{blog.title}</h3>
              <p className="text-gray-500 text-sm">{blog.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
