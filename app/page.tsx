// export default function Home() {
//   return <main className="flex flex-col items-center">main page</main>;
// }
"use client";
import React, { useEffect, useState } from "react";
import TravelCard from "@/components/TravelCard";
export default function Home() {
  const [blogMetadata, setBlogMetadata] = useState([]);

  useEffect(() => {
    fetch("https://trip-me-well-backend.onrender.com/api/blog/list/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setBlogMetadata(data);
      })
      .catch((error) => console.error("Error fetching blog metadata:", error));
  }, []);
  console.log(blogMetadata);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-20">
      {/* {blogMetadata.map((item, index) => {
        return (
          <div key={index}>
            <TravelCard
              tags="qzezq,qzezq"
              slug="yess"
              title="titleee"
              publication_date="02 nov 2024"
              image={item.image}
              description={item.short_description}
            />
          </div>
        );
      })} */}
    </main>
  );
}
