import React, { useState } from "react";
function Data(props) {
  const [name, setName] = useState(props?.name);

  function handleName() {
    // if (name === "Mutia") setName("Habib");
    // if (name === "Habib") setName("Mutia");
    setName(name === "Mutia" ? "Habib" : "Mutia");
    console.log(name);
  }

  return (
    <>
      <button onClick={handleName}>Klik Nama</button>
      <p>{name}</p>
      <p>{props?.desc}</p>
      <p className="text-3xl font-bold underline">Hello world!</p>
    </>
  );
}

export default Data;
