"use client";
import React, { useEffect, useState } from "react";
import TravelCard from "@/components/TravelCard";
export default function Home() {
  const [blogMetadata, setBlogMetadata] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blog/list/")
      .then((response) => response.json())
      .then((data) => {
        setBlogMetadata(data);
      })
      .catch((error) => console.error("Error fetching blog metadata:", error));
  }, []);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-20">
      {blogMetadata.map((item, index) => {
        return (
          <div key={index}>
            <TravelCard
              tags={item.tags}
              slug={item.slug}
              title={item.title}
              publication_date={item.publication_date}
              image={item.title_image}
              description={item.short_description}
              id={item.id}
            />
          </div>
        );
      })}
    </main>
  );
}
