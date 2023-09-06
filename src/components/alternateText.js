import React from "react";

function alternateText({ p1, link, p2 }) {
  return (
    <div className="bg-transparent flex gap-1 font-semibold static">
      <p className="text-black">{p1}</p>
      <a href={link} className="no-underline text-purple-800 capitalize">
        {p2}
      </a>
    </div>
  );
}

export default alternateText;
