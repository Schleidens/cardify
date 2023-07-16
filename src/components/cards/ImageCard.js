import React from "react";

function ImageCardComponent() {
  return (
    <div className="rounded border-solid border-2 border-gray-100">
      <img
        className="card-image rounded-t"
        src="https://dummyimage.com/600x400"
        alt="..."
      />
      <div className="p-4">
        <div className="mb-2">
          <h1 className="text-xl font-medium text-gray-700">Card title</h1>
          <h2 className="text-base text-gray-400">Card subtitle</h2>
        </div>

        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt
          impedit laudantium nihil rerum deleniti sint fugit architecto sequi,
          explicabo corrupti expedita est repellendus libero esse quia obcaecati
          cupiditate tenetur.
        </p>
      </div>
    </div>
  );
}

export default function ImageCard() {
  const times = [1, 2, 3];
  return (
    <div className="reset mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {times.map((index) => (
        <ImageCardComponent key={index} />
      ))}
    </div>
  );
}
