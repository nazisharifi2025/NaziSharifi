// app/lib/blogs.ts  (or wherever you keep it)
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { BlogFrontmatter, BlogPost } from "./blog";

const postsDir = path.join(process.cwd(), "/src/app/posts");

export const getAllBlogs = async (): Promise<BlogPost[]> => {
  const fileNames = fs.readdirSync(postsDir);

  const blogs = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md")) // safety
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const filePath = path.join(postsDir, fileName);
        const fileContent = fs.readFileSync(filePath, "utf8");

        const { content, data } = matter(fileContent);

        // Type assertion with validation (recommended)
        const frontmatter = data as BlogFrontmatter;

        const processedContent = await remark().use(html).process(content);
        const htmlContent = processedContent.toString();

        return {
          slug,
          html: htmlContent,
          content, // optional: keep raw markdown if you need it later
          ...frontmatter,
        } satisfies BlogPost; // this line gives you full type safety + autocomplete
      })
  );

  // Optional: sort by date descending
  return blogs.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
};
