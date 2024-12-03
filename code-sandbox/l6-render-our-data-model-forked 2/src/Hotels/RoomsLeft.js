import React from "react";

/* functional component
    - accepts a boolean prop `roomsRemaining`
    - if true, renders a span element
    - if false, doesn't render anything
*/
const RoomsLeft = (props) => {
  if (props.roomsRemaining < 10) {
    return (
      <span className="hotel__rooms-remaining">
        Only {props.roomsRemaining} rooms left!
      </span>
    );
  } else {
    return null;
  }
};

export default RoomsLeft;
