import React from "react";

const PaletteColor = (props) => (
  <li className="palette-color">
    <span
      className="palette-color-preview"
      style={{ backgroundColor: props.color }}
    />
    <div>
      {props.color}
      <span
        onClick={() => props.removeFromPalette(props.color)}
        className="remove-from-palette"
      >
        X
      </span>
    </div>
  </li>
);

export default PaletteColor;
