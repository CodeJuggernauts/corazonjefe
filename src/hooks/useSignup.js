import { useState } from "react";

const useSignup = () => {
  const [status, setStatus] = useState("idle");

  const signup = async (email) => {
    setStatus("submitting");

    try {
      const response = await fetch("/.netlify/functions/createContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus(`${error}`);
    }
  };

  return {
    signup,
    status,
  };
};

export default useSignup;
