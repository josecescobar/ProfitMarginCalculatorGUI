import React from "react";
import HotelsList from "./Hotels/index";
import Filters from "./Filters/index";
import { filterData, hotelData } from "./data.js";

const App = () => (
  <div className="App">
    <Filters filters={filterData} />
    <HotelsList hotels={hotelData} />
  </div>
);

export default App;
