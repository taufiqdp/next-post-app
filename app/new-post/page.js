import { createPost } from "@/actions/post";
import { NewPostForm } from "@/components/new-post-form";

export default function NewPostPage() {
  return <NewPostForm createPost={createPost} />;
}
