// import the react library to write JSX
import React from "react";

/* write an arrow function called "NameTag" that returns JSX
The JSX returned should consist of:
  - a div element with className attribute of "name-tag" and three nested children elements:
    - an h3 element with className attribute of "title" and the inner text of "HELLO"
    - a p element with className attribute of "subtitle" and the inner text of "my name is"
    - a h2 element with className attribute of "name" and the inner text of your name
*/
const NameTag = () => (
  <div className="name-tag">
  <h3 className="title">HELLO</h3>
  <p className="subtitle">my name is</p>
    <h2 className="name">Jesse</h2>
  </div>
);


/* export our functional component definition to be 
imported then rendered within another module */
export default NameTag;