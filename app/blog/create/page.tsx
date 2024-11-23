"use client";

import { useState } from "react";

export default function CreateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    image: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/create-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Blog created successfully!");
        setFormData({ title: "", date: "", image: "", description: "" });
      } else {
        setMessage("Failed to create blog");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred");
    }
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <br />
        <button type="submit">Create Blog</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
