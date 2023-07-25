import React from "react";

function PricingCardComponent() {
  const list = [
    "All modules include",
    "Access to all basic features",
    "Up to 10 individual users",
    "20GB individual data each user",
    "Chat and email support",
    "Personalized+Priority service",
  ];

  return (
    <div className="rounded border-solid border-2 border-gray-100 p-4">
      <div className="mb-6 border-solid border-0 border-b border-gray-200 pb-6 text-center">
        <span className="mb-2 text-base font-semibold text-gray-600">
          Start here
        </span>
        <h1 className="text-3xl font-bold text-gray-700">$10</h1>
        <h3 className="text-base text-gray-400">Per month</h3>
      </div>

      <div className="text-base text-gray-600">
        <div className="mb-4">
          {list.map((item, index) => (
            <div key={index} className="mb-3 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <span className="ml-3 leading-none">{item}</span>
            </div>
          ))}
        </div>
        <button className="w-full rounded border-solid border-2 border-blue-500 bg-blue-500 py-1 text-center text-gray-50 ">
          Try free for 30 days
        </button>
      </div>
    </div>
  );
}

export default function PricingCard() {
  const times = [1, 2];
  return (
    <div className="reset mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
      {times.map((index) => (
        <PricingCardComponent key={index} />
      ))}
    </div>
  );
}
