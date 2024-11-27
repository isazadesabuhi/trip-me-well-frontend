import fs from "fs";
import matter from "gray-matter";

export default function getBlogMetadata(basePath) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownBlogs = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const blogs = markdownBlogs.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      publication_date: matterResult.data.prep_time,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
      slug: filename.replace(".md", ""),
      image: matterResult.data.image,
    };
  });
  return blogs;
}
