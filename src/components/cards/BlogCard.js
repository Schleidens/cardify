import React from "react";

function BlogCardComponent() {
    return (
      <div className="rounded border-solid border-2 border-gray-100 p-2">
        <img
          className="card-image rounded"
          src="https://dummyimage.com/600x400"
          alt="..."
        />
  
        <div className="my-2">
          <span className="rounded-lg bg-gray-200 px-3 py-1 text-sm">Label</span>
          <h1 className="my-2 text-xl font-medium text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt
            impedit laudantium nihil rerum deleniti sint fugit architecto sequi.
          </p>
        </div>
      </div>
    );
  }


  export default function BlogCard() {
    const times = [1, 2, 3];
    return (
      <div className="reset mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {times.map((index) => (
          <BlogCardComponent key={index} />
        ))}
      </div>
    );
  }