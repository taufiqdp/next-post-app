import { Feed } from "@/components/feed-page";
import { getPosts } from "@/lib/post";

export default function FeedPage() {
  const posts = getPosts();

  return (
    <div className="container mx-auto text-gray-300">
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <Feed key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
