import React from "react";

function imgCard({ imgSrc, heading, text, id }) {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2 lg:text-left lg:items-start lg:justify-start">
      <div className="py-4">
        <img src={imgSrc} alt="card with icon" key={id}/>
      </div>
      <div>
        <h1 className="capitalize font-bold text-medium text-black mb-3">
          {heading}
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default imgCard;
