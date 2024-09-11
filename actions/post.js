"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/post";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevSate, formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const image = formData.get("image");

  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required");
  }

  if (image.size === 0) {
    errors.push("Image is required");
  }

  if (errors.length > 0) {
    return { errors };
  }

  const imageUrl = await uploadImage(image);
  storePost({ imageUrl: imageUrl, title: title, content: content, userId: 1 });

  revalidatePath("/feed");
  redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
  updatePostLikeStatus(postId, 2);
  revalidatePath("/feed");
}
