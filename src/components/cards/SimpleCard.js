import React from "react";

function SimpleCardComponent() {
  return (
    <div className="rounded border-solid border-2 border-gray-100 p-4">
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
  );
}

export default function SimpleCard() {
  const times = [1, 2, 3];
  return (
    <div className="reset mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {times.map((index) => (
        <SimpleCardComponent key={index} />
      ))}
    </div>
  );
}
