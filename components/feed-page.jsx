import Image from "next/image";
import { formatDate } from "@/lib/utils";
import LikeButton from "./like-button";

export function Feed({ post }) {
  return (
    <li
      className="flex flex-col md:flex-row bg-[#18181b] rounded-lg shadow-md overflow-hidden"
      key={post.id}
    >
      <div className="md:w-1/3">
        <Image
          src={post.image}
          alt={post.title}
          width={300}
          height={200}
          className="w-full overflow-hidden object-cover md:h-60 h-52"
        />
      </div>
      <div className="md:flex-1 p-6">
        <h2 className="text-2xl font-semibold">{post.title}</h2>

        <div className="text-sm mb-4">
          <p className="text-sm">
            {post.userFirstName} {post.userLastName}
          </p>
          {formatDate(post.createdAt)}
        </div>
        <p className="">{post.content}</p>
      </div>
      <div className="p-6 flex h-fit space-x-3">
        <LikeButton post={post} />
        <span>{post.likes}</span>
      </div>
    </li>
  );
}
