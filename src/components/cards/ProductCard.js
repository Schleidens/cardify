import React from "react";

function ProductCardComponent() {
  return (
    <div className="rounded border-solid border-2 border-gray-100">
      <img
        className="card-image rounded-t"
        src="https://dummyimage.com/600x400"
        alt="..."
      />
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-gray-400">Category</span>
          <h1 className="mb-4 text-xl font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <span className="mr-2">$200</span>
          <span className="text-gray-400 line-through">$420</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard() {
  const times = [1, 2, 3];
  return (
    <div className="reset mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {times.map((index) => (
        <ProductCardComponent key={index} />
      ))}
    </div>
  );
}
