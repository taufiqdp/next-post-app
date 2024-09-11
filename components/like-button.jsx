"use client";
import { togglePostLikeStatus } from "@/actions/post";
import { FaHeart } from "react-icons/fa";
import { useOptimistic } from "react";

export default function LikeButton({ post }) {
  const [optimisticPost, updateOptimisticPost] = useOptimistic(
    [post],
    (prevPosts, updatedPost) => {
      const updatedPostIndex = prevPosts.findIndex(
        (p) => p.id === updatedPost.id
      );

      if (updatedPostIndex === -1) {
        return prevPosts;
      }

      const updatedPosts = [...prevPosts];
      updatedPosts[updatedPostIndex] = {
        ...updatedPosts[updatedPostIndex],
        likes: updatedPost.likes,
        isLiked: updatedPost.isLiked,
      };

      return updatedPosts;
    }
  );

  async function updatePost(postId) {
    // Create the updated post object
    const updatedPost = {
      ...optimisticPost[0], // Assuming optimisticPost is always an array with one element
      likes: optimisticPost[0].likes + (optimisticPost[0].isLiked ? -1 : 1),
      isLiked: !optimisticPost[0].isLiked,
    };

    updateOptimisticPost(updatedPost); // Pass the updated post object
    await togglePostLikeStatus(postId);
  }

  return (
    <button
      type="button"
      onClick={async () => {
        await updatePost(optimisticPost[0].id);
      }}
    >
      <FaHeart
        color={`${optimisticPost[0].isLiked ? "#de354a" : "fff"}`}
        size={24}
      />
    </button>
  );
}
