"use client";
import React, { useState } from "react";
import TravelCard from "./TravelCard";

export default function SearchView(props) {
  const { blogMetadata } = props;
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <input
        placeholder="Search blogs..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <div className="grid grid-cols-2 gap-6">
        {blogMetadata
          .filter((val) => {
            return val.title.includes(searchValue);
          })
          .map((blog, blogIndex) => {
            return <TravelCard key={blogIndex} blog={blog} />;
          })}
      </div>
    </>
  );
}
