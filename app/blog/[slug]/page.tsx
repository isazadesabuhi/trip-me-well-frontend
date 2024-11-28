import Markdown from "markdown-to-jsx";
import getBlogMetadata from "@/utils/getBlogMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

function getBlogContent(slug) {
  const folder = "blogs/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const blogs = getBlogMetadata("blogs");
  return blogs.map((blog) => ({ slug: blog.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
  };
}

export default function RecipePage(props) {
  const slug = props.params.slug;
  const blog = getBlogContent(slug);

  return (
    <main className="flex flex-col mx-auto gap-y-5 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">
        {blog.data.title}
      </h1>
      <div className="bg-black text-white">
        <div className="mx-auto">
          {/* Blog Image */}
          <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden">
            <Image
              src={blog.data.image}
              alt={blog.data.title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Blog Content */}
        </div>
      </div>
      <article>
        <Markdown>{blog.content}</Markdown>
      </article>
      {/* Tags */}
      <div className="flex flex-row gap-x-2">
        {blog.data.tags.map((tag: string, index: number) => (
          <span key={index} className="text-sm text-gray-400">
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-gray-400 text-sm">{blog.data.publication_date}</p>
    </main>
  );
}
