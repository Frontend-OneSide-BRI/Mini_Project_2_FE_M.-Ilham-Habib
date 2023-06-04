import React from "react";

function Modal({ data, onClick }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-75 z-50">
        <div className="bg-white rounded-lg p-8 w-2/4">
          <h2 className="text-2xl font-bold mb-4">{data?.title}</h2>
          <p>{data?.desc}</p>
          <img src={data?.url} alt={data?.title} className="my-4" />
          <button
            className=" text-white py-2 px-4 rounded mx-auto flex"
            onClick={onClick}
          >
            Close Modal
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
