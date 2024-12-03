import React from "react";

/* functional component
    - accepts the data model for a single filter as a prop
    - uses that data to render the UI for a single filter in the list
*/
const Filter = (props) => (
  <li className="filter">
    <span>
      <input type="checkbox" value={true} className="filter__checkbox" />
      {props.filter.name}
    </span>
    <span className="filter__match-count">{props.filter.matchCount}</span>
  </li>
);

export default Filter;
