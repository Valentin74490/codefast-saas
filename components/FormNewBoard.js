
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const FormNewBoard = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {

      const data = await axios.post("api/board", { name });
      setName("");
      router.refresh();



    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }

  return (
  <form
  className="bg-base-100 p-8 rounded-3xl space-y-8"
  onSubmit={handleSubmit}
  >
    <p className="font-bold text-lg">Créez votre projet </p>
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">Nom du projet</span>
      </div>
      <input
        required
        type="text"
        placeholder="Nom de votre projet"
        className="input input-bordered w-full"
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
    </label>
    <button
    className="btn btn-secondary btn-block" type="submit">
    {isLoading && <span className="loading loading-spinner loading-sm"></span>}
    Créer son projet
    </button>

    </form>
  );
}

export default FormNewBoard;
