"use client";

import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FormSubmit from "./form-submit";
import { TriangleAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NewPostForm({ createPost }) {
  const [state, formAction] = useFormState(createPost, {});

  return (
    <>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Create New Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-8" name="newPostForm" action={formAction}>
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Enter post title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Upload Image</Label>
              <Input id="image" name="image" type="file" accept="image/*" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your post content here"
                rows={5}
              />
            </div>
            <CardFooter className="flex justify-end gap-4">
              <FormSubmit />
            </CardFooter>
            {state.errors && (
              <div className="flex items-center gap-5 bg-red-400 border-l-4 border-orange-700 py-2 px-3 shadow-md mb-2 fixed bottom-10 right-10">
                <TriangleAlert className="text-red-950" size={24} />
                <div className="text-white max-w-xs ">
                  {state.errors.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </>
  );
}
