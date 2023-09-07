import React from "react";

function button({ buttonText }) {
  return (
    <div className="bg-orange-600 text-white rounded-md flex justify-center items-center capitalize p-3 font-semibold text-lg mb-4 lg:text-md lg:mb-64 lg:font-semibold lg:text-medium cursor-pointer lg:hover:opacity-70">
      <p>{buttonText}</p>
    </div>
  );
}

export default button;
