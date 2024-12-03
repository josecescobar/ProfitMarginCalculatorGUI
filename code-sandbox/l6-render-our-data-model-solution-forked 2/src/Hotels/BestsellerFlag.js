import React from "react";

/* functional component
    - accepts a boolean prop `isBestseller`
    - if true, renders a span element
    - if false, doesn't render anything
*/
const BestsellerFlag = (props) => {
  if (props.isBestseller) {
    return <span className="hotel__best-seller-flag">Bestseller</span>;
  } else {
    return null;
  }
};

export default BestsellerFlag;
