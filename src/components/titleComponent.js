import { useState } from "react";

export const TitleComponent = () => {
  const [colorCode, setColorCode] = useState("0000FF");

  const changeColorCode = (event) => {
    const value = event.target.value.toUpperCase();
    setColorCode(value);
  };

  return (
    <>
      <input
        value={colorCode}
        type="text"
        style={{ width: "60px", height: "30px" }}
        onChange={changeColorCode}
      ></input>
      <h4
        style={{
          display: "inline-block",
          marginLeft: "30px",
          color: `#${colorCode}`,
          borderColor: "black",
        }}
      >
        EL JUEGO DE JUANMA
      </h4>
    </>
  );
};
