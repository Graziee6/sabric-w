import React from "react";

function button({ buttonText }) {
  return (
    <div className="bg-orange-600 text-white rounded-md flex justify-center items-center capitalize p-3 font-semibold text-lg mb-4">
      <p>{buttonText}</p>
    </div>
  );
}

export default button;
