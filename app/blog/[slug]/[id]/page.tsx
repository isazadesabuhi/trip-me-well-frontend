"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/app/richtext.css";

export default function RecipePage(props) {
  const blogId = props.params.id;
  const [blogMetadata, setBlogMetadata] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/blog/detail_Id=${blogId}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogMetadata(data);
      })
      .catch((error) => console.error("Error fetching blog metadata:", error));
  }, [blogId]);
  console.log(blogMetadata);
  return (
    <main className="flex flex-col mx-auto gap-y-5 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-black">
        {blogMetadata.title}
      </h1>
      <div className="bg-black text-black">
        <div className="mx-auto">
          {/* Blog Image */}
          <div className="relative w-full aspect-[3/2] overflow-hidden">
            <Image
              src={blogMetadata.title_image}
              alt={blogMetadata.title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Blog Content */}
        </div>
      </div>
      <article>
        <div dangerouslySetInnerHTML={{ __html: blogMetadata.content }} />
      </article>
      {/* Tags */}
      <div className="flex flex-row gap-x-2">
        {blogMetadata.tags?.map((tag, index) => {
          return (
            <span key={index} className="text-xs text-gray-400 font-medium">
              #{tag.name}
            </span>
          );
        })}
      </div>
      {/* <p className="text-gray-400 text-sm">{blogMetadata[0].insert_date}</p> */}
    </main>
  );
}
