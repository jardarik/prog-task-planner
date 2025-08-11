import { useState } from "react";

import "./App.css";
import TeamList from "./components/TeamList";
import jsonData from "./team_data.json";

function App() {
  return (
    <div className="container">
      {/* hlavička */}
      <div className="row text-center">
        <div className="h1">Your app for handling project</div>
        <div className="h2">Toggle view</div>
      </div>
      {/* navigace  */}
      <div className="row">
        <div className="d-flex gap-2 flex justify-content-center">
          <button type="button" className="btn btn-primary">
            List of programmers
          </button>
          <button type="button" className="btn btn-primary">
            Form for planning tasks
          </button>
        </div>
      </div>
      {/* data */}
      <div className="row">
        <TeamList data={jsonData} />
      </div>
    </div>
  );
}

export default App;
