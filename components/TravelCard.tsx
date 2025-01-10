import Image from "next/image";
import Link from "next/link";

function TravelCard({
  tags,
  slug,
  title,
  publication_date,
  description,
  image,
  id,
}) {
  return (
    <div className="flex flex-col gap-y-3 bg-white text-black rounded-lg shadow-lg hover:shadow-xl overflow-hidden leading-[22px] p-2 border-2 border-blue-50	">
      <Link
        href={`/blog/${slug}/${id}`}
        className="relative w-full aspect-[500/281]"
      >
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-center object-cover	"
        />
      </Link>
      <Link href={`/blog/${slug}/${id}`}>
        <h2 className="text-2xl font-bold leading-7">{title}</h2>
      </Link>
      <p className="text-sm text-gray-400 italic">{publication_date}</p>
      <p className="text-[#71717A] line-clamp-4">
        {description.slice(0, 220)}...
      </p>
      <div className="flex flex-row gap-x-2">
        {tags?.map((tag, index) => {
          return (
            <span key={index} className="text-xs text-[#71717A] font-medium">
              #{tag.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TravelCard;
