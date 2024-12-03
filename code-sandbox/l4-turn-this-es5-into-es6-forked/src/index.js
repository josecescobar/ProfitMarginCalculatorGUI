import React from "react";
import ReactDOM from "react-dom";
import * as helpers from "./helpers";
import TestFunction from "./TestFunction.js";
import "./styles.css";

/* Complete this challenge by updating the 
syntax used in the function definitions over in the
helpers.js module. You'll know that you are done
when you have all 5 functions successfully returning
the expected data type!
*/

function App()  {
  return (
  <div className="App">
    <h1>Turn the ES5 functions into ES6</h1>
    <table>
      <thead>
        <tr>
          <th>function</th>
          <th>Valid ES5 or ES6?</th>
          <th>example return value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>getRandom</td>
          <td>
            <TestFunction
              func={helpers.getRandom}
              expectedReturnType="number"
            />
          </td>
          <td>{helpers.getRandom()}</td>
        </tr>
        <tr>
          <td>getRandomBelow</td>
          <td>
            <TestFunction
              func={helpers.getRandomBelow}
              expectedReturnType="number"
            />
          </td>
          <td>{helpers.getRandomBelow(10)}</td>
        </tr>
        <tr>
          <td>getRandomBetween</td>
          <td>
            <TestFunction
              func={helpers.getRandomBetween}
              expectedReturnType="number"
            />
          </td>
          <td>{helpers.getRandomBetween(30, 70)}</td>
        </tr>
        <tr>
          <td>getEmptyProfile</td>
          <td>
            <TestFunction
              func={helpers.getEmptyProfile}
              expectedReturnType="object"
            />
          </td>
          <td>{JSON.stringify(helpers.getEmptyProfile())}</td>
        </tr>
        <tr>
          <td>makeNewProfile</td>
          <td>
            <TestFunction
              func={helpers.makeNewProfile}
              expectedReturnType="object"
            />
          </td>
          <td>
            {JSON.stringify(
              helpers.makeNewProfile(
                "blair",
                "blair@skillcrush.com",
                "https://lh3.googleusercontent.com/gGpUv65y3VoJbuzdtf5MVAqxpxeSaaVEMPETbN7piWHD_xq4K8Ja2V-YIsuk0ZklNLBu0iESyXV9749zZKte6A=w558"
              )
            )}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
