import React from "react";

function Arrow() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300">
      <p className="font-bebas text-sm tracking-[0.3em] uppercase text-text">
        Scroll
      </p>
      <div className="animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-light-green"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </div>
  );
}

export default Arrow;
