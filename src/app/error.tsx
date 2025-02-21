"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-primary">
          Something went wrong!
        </h2>
        <p className="text-secondary">We apologize for the inconvenience.</p>
        <button
          onClick={() => reset()}
          className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary/80 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
