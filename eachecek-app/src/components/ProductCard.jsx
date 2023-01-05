import React from "react";

function ProductCard({ source, text }) {
  return (
    <div className="group relative  w-60 h-60 mb-20">
      <img
        alt="Developer"
        src={source}
        className="absolute  inset-0 h-full w-full object-contain  opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className=" p-8 ">
        <div>
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex justify-center items-end">
            <p className="text-sm text-black font-bold">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
