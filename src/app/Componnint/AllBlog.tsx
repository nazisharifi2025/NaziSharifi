import Link from "next/link";
import { BlogPost } from "../(Pages)/blogs/blog"; 

type Props = {
  blogs: BlogPost[];
};

export default function AllBlog({ blogs }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <Link href={`/blog/${blog.slug}`}>
            <h3 className="text-xl font-semibold hover:underline">{blog.title}</h3>
          </Link>
          <p className="text-gray-600 mt-2">{blog.excerpt}</p>
          <p className="text-sm mt-1 text-gray-400">
            {blog.readTime} • {blog.publishedAt}
          </p>
        </div>
      ))}
    </div>
  );
}
