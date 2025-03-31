"use client"

import {useState} from "react";
import {toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const ButtonDeletePost = ( {postId} ) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletePost = async () => {

   try {
    const isUserSure = window.confirm(
      "Voulez-vous vraiment supprimer ce post ?"
    );


    if (isUserSure & !isLoading) {
      setIsLoading(true);
      await axios.delete(`/api/post?postId=${postId}`);
      toast.success("Post supprimé ma caille 🦄");
      router.refresh();

    }

   } catch (error) {
    const errorMessage =
    error.response?.data?.error ||
    error.message ||
    "C PT 🥲";
    toast.error(errorMessage);
  } finally {
    setIsLoading(false);
  }
  };
  return <button className="btn btn-ghost" onClick={handleDeletePost}>
    {
      isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  fill="currentColor"
  className="size-4"
>
  <path
    fillRule="evenodd"
    d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
    clipRule="evenodd"
  />
</svg>

      )
    }
Supprimer le post</button>;

};

export default ButtonDeletePost;
