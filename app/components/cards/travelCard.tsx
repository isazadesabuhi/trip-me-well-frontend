import Image from "next/image";
import Link from "next/link";

interface TravelCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
}

function TravelCard({ title, date, description, image, tags, slug }: TravelCardProps) {
  console.log(tags);
  return (
    <div className="max-w-sm bg-black text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt="A joyful person in Bhutan"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <Link href={`/blog/${slug}`}>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
        </Link>
        <p className="text-sm text-gray-400 mb-4">30 April 2024</p>
        <p className="text-gray-300">{description}</p>
        <div className="mt-4">
          {tags?.map((tag, index) => {
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
