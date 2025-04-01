"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const ButtonVote = ({ postId, initialVoted, initialVotesCounter }) => {
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(initialVoted);
  const [votesCounter, setVotesCounter] = useState(initialVotesCounter);

  const handleVote = async () => {
    if (isVoting) return;

    setIsVoting(true);

    try {
      if (hasVoted) {
        // Decrement votesCounter
        const response = await axios.delete(`/api/vote`, { data: { postId } });
        setVotesCounter(response.data.votesCounter);
        setHasVoted(false);
        toast.success("Votre vote a été retiré !");
      } else {
        // Increment votesCounter
        const response = await axios.post(`/api/vote`, { postId });
        setVotesCounter(response.data.votesCounter);
        setHasVoted(true);
        toast.success("Merci pour votre vote !");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Une erreur est survenue.";
      toast.error(errorMessage);
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <button
      className={`btn btn-square ${
        hasVoted ? "btn-success" : "btn-neutral"
      }`}
      onClick={handleVote}
    >
      {isVoting ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5l6 6H6l6-6z"
            />
          </svg>
          <div className="text-sm mt-1">{votesCounter}</div>
        </>
      )}
    </button>
  );
};

export default ButtonVote;
