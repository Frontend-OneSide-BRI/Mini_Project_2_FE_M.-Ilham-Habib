import React from "react";

function ListCategory(props) {
  return (
    <div className="relative ">
      <img
        className="h-full w-full object-cover"
        src={props?.bg}
        alt={props?.text}
      />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl text-white absolute font-bold">
          {props?.text}
        </p>
      </div>
    </div>
  );
}

export default ListCategory;
