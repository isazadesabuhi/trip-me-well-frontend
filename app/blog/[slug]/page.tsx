import Image from "next/image"
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Utility function to convert a title to a slug
function generateSlug(title: string): string {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

interface Params {
  slug: string;
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = params;

  const blogsDir = path.join(process.cwd(), 'data/blogs');
  const fileNames = fs.readdirSync(blogsDir);

  // Find the file that matches the slug
  const fileName = fileNames.find((file) => {
    const filePath = path.join(blogsDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return generateSlug(data.title) === slug; // Match slug with title-based slug
  });

  if (!fileName) {
    throw new Error('Blog not found');
  }

  const filePath = path.join(blogsDir, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return (
    // <article className='flex flex-col'>
    //   <h1>{data.title}</h1>
    //   <p>{data.date}</p>
    //   <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    // </article>
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Blog Image */}
        <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Blog Content */}
        <div className="mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold">{data.title}</h1>
          <p className="text-gray-400 mt-2 text-sm">{data.date}</p>

          <p className="mt-4 text-gray-300">{data.description}</p>

          {/* Tags */}
          <div className="mt-6">
            {/* {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-blue-800 text-blue-200 py-1 px-2 rounded-full mr-2"
              >
                #{tag}
              </span>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), 'data/blogs');
  const fileNames = fs.readdirSync(blogsDir);

  return fileNames.map((fileName) => {
    const filePath = path.join(blogsDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: generateSlug(data.title), // Generate slug from title
    };
  });
}
