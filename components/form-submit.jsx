"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        className={`${
          pending && "hidden"
        } py-2 px-3 rounded-lg text-gray-300 hover:underline hover:underline-offset-4 hover:text-white`}
      >
        Reset
      </button>
      <button
        type="submit"
        className="bg-[#0e0e11] text-gray-300 px-4 py-2 rounded-md font-semibold"
        disabled={pending}
      >
        {pending ? (
          <div className="border-gray-300 h-5 w-5 animate-spin rounded-full border-2 border-t-[#0e0e11]" />
        ) : (
          "Submit"
        )}
      </button>
    </>
  );
}
