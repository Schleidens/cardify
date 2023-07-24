import React from "react";

function TestimonialCardComponent() {
  return (
    <div className="rounded border-solid border-2 border-gray-100 p-4">
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt
        impedit laudantium nihil rerum deleniti sint fugit architecto sequi.
      </p>
      <div className="mt-5 flex">
        <img
          className="h-12 w-12 rounded-full"
          src="https://dummyimage.com/600x400"
          alt=""
        />
        <div className="ml-3">
          <h1 className="text-xl font-bold text-gray-700">Schleidens Dev</h1>
          <h2 className="text-sm text-gray-500">Creator of Cardify</h2>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCard() {
  const times = [1, 2];
  return (
    <div className="reset mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
      {times.map((index) => (
        <TestimonialCardComponent key={index} />
      ))}
    </div>
  );
}
