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
    const { blog } = props
  return (
    <div className="max-w-sm bg-black text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full aspect-[500/281]">
        <Image
          src={blog.image}
          alt="A joyful person in Bhutan"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <Link href={`/blog/${blog.slug}`}>
          <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        </Link>
        <p className="text-sm text-gray-400 mb-4">{blog.publication_date}</p>
        <p className="text-gray-300">{blog.description.slice(0,220)}...</p>
        <div className="mt-4">
          {blog.tags?.map((tag, index) => {
            return (
              <span key={index} className="text-sm text-blue-400 font-medium">
                #{tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelCard;