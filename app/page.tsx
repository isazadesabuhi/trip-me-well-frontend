import TravelCard from "./components/cards/travelCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export default async function Home() {
  // Read all Markdown files in the 'blogs' directory
  const blogsDir = path.join(process.cwd(), "data/blogs");
  const fileNames = fs.readdirSync(blogsDir);

  type BlogData = {
    title: string;
    image: string;
    description: string;
    tags: string[];
  };

  const blogs = fileNames.map((fileName): BlogData & { slug: string } => {
    const filePath = path.join(blogsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents) as unknown as { data: BlogData };

    return {
      ...data,
      slug: generateSlug(data.title), // Generate slug from title
    };
  });

  return (
    <div className="flex flex-col items-center">
      <h1>Blog List</h1>
      <div className="grid grid-cols-2 gap-3">
        {blogs.map((blog) => (
          <div key={blog.slug}>
            <TravelCard
              title={blog.title}
              image={blog.image}
              description={blog.description}
              tags={blog.tags}
              slug={blog.slug} date={""}            />
          </div>
        ))}
      </div>
    </div>
  );
}
