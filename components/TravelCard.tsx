import Image from "next/image";
import Link from "next/link";

interface Blog {
  tags: any;
  slug: string;
  title: string;
  publication_date: string;
  description: string;
  image: string;
}

interface TravelCardProps {
  blog: Blog;
}

function TravelCard(props: TravelCardProps) {
  const { blog } = props;
  console.log(blog);
  return (
    <div className="flex flex-col gap-y-3 bg-black text-white rounded-lg shadow-lg overflow-hidden leading-[22px]">
      <Link
        href={`/blog/${blog.slug}`}
        className="relative w-full aspect-[500/281]"
      >
        <Image
          src={blog.image}
          alt="A joyful person in Bhutan"
          layout="fill"
          objectFit="cover"
        />
      </Link>
      <Link href={`/blog/${blog.slug}`}>
        <h2 className="text-2xl font-bold leading-7">{blog.title}</h2>
      </Link>
      <p className="text-sm text-gray-400 italic">{blog.publication_date}</p>
      <p className="text-gray-400 line-clamp-4">
        {blog.description.slice(0, 220)}...
      </p>
      <div className="flex flex-row gap-x-2">
        {blog.tags?.map((tag, index) => {
          return (
            <span key={index} className="text-xs text-gray-400 font-medium">
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TravelCard;
