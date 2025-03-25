
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const FormAddPost = ( {boardId }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {

      await axios.post(`/api/post?boardId=${boardId}`, { title, description});

      setTitle("");
      setDescription("");
      toast.success("Post added 🦄")
      router.refresh();



    } catch (error) {
      const errorMessage =
      error.response?.data?.error ||
      error.message ||
      "C PT 🥲";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false)
    }
  }

  return (
  <form
  className="bg-base-100 p-8 rounded-3xl space-y-8"
  onSubmit={handleSubmit}
  >
    <p className="font-bold text-lg">Suggest a feature </p>
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">short descriptive title </span>
      </div>
      <input
        required
        type="text"
        placeholder="Nom de votre projet"
        className="input input-bordered w-full"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        maxLength={100}
        />
    </label>

    <label className="form-control">
      <div className="label">
        <span className="label-text">Description</span>
      </div>
      <textarea
        placeholder="Description"
        className="textarea textarea-bordered w-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        />
    </label>



    <button
    className="btn btn-secondary btn-block" type="submit">
    {isLoading && <span className="loading loading-spinner loading-sm"></span>}
    Add Post
    </button>

    </form>
  );
}

export default FormAddPost;
