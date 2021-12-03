import React from "react";
import Calender from "./Components/calendar";
import Sidebar from "./Components/sidebar";
import "./main.scss";

// function App() {
//   return (
//     <div style={{ display: "block", marginTop: "40px" }}>
//       <div className="cal-box">
//         <Calender />
//         <Calender />
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="container">
      <div className="container__nav">
      </div>
      <div className="container__sidebar">
        <Sidebar/>
      </div>
      <div className="container__main">
        <div className="container__main--scroll">
            <div className="form__radio">
              <input className="original-radio" type="radio" value='bike' id="bike" name="machine"/>
             
              <label for="bike"> <span className="check-button">&nbsp;</span> bike</label>
            </div>

            <div className="form__radio">
              <input className="form__radio-input" type="radio" value='car' id="car" name="machine"/>
              <label className="form__radio-label" for="car"><span className="check-button">&nbsp;</span>car</label>
            </div>
            <div className="form__checkbox">
              <label className="form__checkbox--label" for="company">
                <input className="form__checkbox--label-input" type="checkbox" value='company' id="company" name="machine"/>
                <span className="form__checkbox--label-button check-button"></span>
                <span>company</span>
              </label>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
