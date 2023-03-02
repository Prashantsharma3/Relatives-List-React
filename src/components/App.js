import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relatives = [
      { id: "relativeListItem1", name: "Aunt Jane" },
      { id: "relativeListItem2", name: "Uncle John" },
      { id: "relativeListItem3", name: "Cousin Sarah" },
      { id: "relativeListItem4", name: "Grandma Mary" },
      { id: "relativeListItem5", name: "Grandpa Joe" },
    ];

    return (
      <div id="main">
        <h1>Relatives to Visit:</h1>
        <ol key="relativeList">
          {relatives.map((relative) => (
            <li key={relative.id}>{relative.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
