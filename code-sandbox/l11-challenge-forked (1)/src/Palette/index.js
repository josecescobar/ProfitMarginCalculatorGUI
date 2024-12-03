import React from "react";
import PaletteColor from "./PaletteColor.js";

const Palette = (props) => {
  const palette = props.palette.map((color) => (
    <PaletteColor
      key={color}
      color={color}
      removeFromPalette={props.removeFromPalette}
    />
  ));
  return (
    <div>
      <h2>Color Palette</h2>
      <ul className="palette-colors">{palette}</ul>
      <hr />
    </div>
  );
};

export default Palette;
