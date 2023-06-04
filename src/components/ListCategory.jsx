import React from "react";

function ListCategory(props) {
  return (
    <div className="relative">
      <img
        className="h-full w-full object-cover"
        src={props?.url}
        alt={props?.title}
      />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-lg text-white absolute font-bold">
          {props?.title}
        </p>
        <p className="left-2 top-4 text-2xl bg-transparent text-slate-50 -rotate-12  absolute font-bold">
          {props?.category}
        </p>
      </div>
    </div>
  );
}

export default ListCategory;
