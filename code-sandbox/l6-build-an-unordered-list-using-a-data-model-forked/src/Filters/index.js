import React from "react";
import Filter from "./Filter.js";

/* callback function
  - renders a single filter
  - assigns a unique `key` prop to each `Filter` component
  - passes the `filter` argument to each `Filter` component as a prop called `filter`
*/
const renderFilter = (filter) => <Filter key={filter.id} filter={filter} />;

/* functional component
  - accepts `filters` data model as a prop
  - maps over the array of filter data, calling the `renderFilter` callback function to render a `Filter` component for each item in the array
*/
const FiltersList = (props) => {
  if (!props.filters) {
    return null;
  }
  const filterListElements = props.filters.map(renderFilter);
  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;
