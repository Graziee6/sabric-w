import React from "react";

function input({ inputType, inputPlaceholder }) {
  return (
    <div className="bg-transparent">
      <input
        className="outline-none w-full bg-white capitalize text-gray-400 font-light p-3 rounded-lg"
        type={inputType}
        placeholder={inputPlaceholder} required
      />
    </div>
  );
}

export default input;
