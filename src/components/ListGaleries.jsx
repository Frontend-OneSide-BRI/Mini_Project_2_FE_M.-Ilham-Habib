import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function ListGaleries(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="relative">
      <Link to="#" onClick={openModal}>
        <img
          className="h-full w-full object-cover"
          src={props?.url}
          alt={props?.title}
        />

        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-lg text-white absolute font-bold">
            {props?.title}
          </p>
          <p className="left-2 top-4 text-2xl bg-transparent text-slate-50 -rotate-12 absolute font-bold">
            {props?.category}
          </p>
        </div>
      </Link>

      {isModalOpen && <Modal data={props} onClick={closeModal} />}
    </div>
  );
}

export default ListGaleries;
