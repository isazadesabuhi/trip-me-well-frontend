import fs from "fs";
import path from "path";

export async function POST(request: any) {
  try {
    // Parse the request body
    const body = await request.json();

    const { title, date, image, description } = body;

    // Validate the fields
    if (!title || !date) {
      return new Response("Missing fields", { status: 400 });
    }

    // Generate a slug from the title
    const slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    // Define the Markdown file content
    const markdownContent = `---
title: "${title}"
date: "${date}"
image: "${image || ""}"
description:"${description}"
---
`;

    // Write the file to the /blogs directory
    const blogsDir = path.join(process.cwd(), "data/blogs");
    const filePath = path.join(blogsDir, `${slug}.md`);
    fs.writeFileSync(filePath, markdownContent, "utf8");

    return new Response("Blog created successfully", { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Error creating blog", { status: 500 });
  }
}
