import SearchView from "@/components/SearchView";
import getBlogMetadata from "@/utils/getBlogMetadata";

export default function Home() {
  const blogMetadata = getBlogMetadata("blogs");

  return (
    <main className="flex flex-col items-center">
      <SearchView blogMetadata={blogMetadata} />
    </main>
  );
}
