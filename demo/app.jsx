/*global document:false*/
import React from "react";
import {VictoryHeatmap} from "../src/index";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <p>
          < VictoryHeatmap/>
        </p>
        <p>
          < VictoryHeatmap color={"red"}/>
        </p>
      </div>
    );
  }
}

const content = document.getElementById("content");

React.render(<App/>, content);
