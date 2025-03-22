"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {

    if (isLoading) return;
    setIsLoading(true);

    try {

      const response = await axios.post("/api/billing/create-checkout", {

        successUrl: window.location.href + "/success",
        cancelUrl: window.location.href + "/cancel",
      });

      const checkoutUrl = response.data.url;
      console.log(checkoutUrl);


      window.location.href = checkoutUrl;

    } catch (error) {
      const errorMessage =
      error.response?.data?.error ||
      error.error || "C PT 🥲";
      toast.error(errorMessage);
      setIsLoading(false);
    }

  };

  return (
  <button
  className="btn btn-primary"
  onClick={handleSubscribe}
  >
    {
      isLoading && (
        <span className="loading loading-spinner loading-xs"></span>
      )

    }
    Payer
  </button>
  );



};

export default ButtonCheckout;
