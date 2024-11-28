"use client";
import React, { useState } from "react";
import TravelCard from "./TravelCard";

export default function SearchView(props) {
  const { blogMetadata } = props;
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      {/* <input
        placeholder="Search blogs..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      /> */}
      <div className="grid grid-cols-2 gap-20">
        {blogMetadata
          .filter((val: { title: string | string[]; }) => {
            return val.title.includes(searchValue);
          })
          .map((blog:any, blogIndex: React.Key) => {
            return <TravelCard key={blogIndex} blog={blog} />;
          })}
      </div>
    </>
  );
}
