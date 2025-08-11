import { useState } from "react";

import "./App.css";
import TeamList from "./components/TeamList";
import jsonData from "./team_data.json";
import FormAdd from "./components/FormAdd";

function App() {
  const [teamData, setTeamData] = useState(jsonData);

  const handleDelete = (idToDel) => {
    const temp = teamData.filter((item) => item.id !== idToDel);
    setTeamData(temp);
    // setCarsToShow(temp);
  };
  const handleAddProg = () => {};
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
      {/* Team list */}
      <div className="row">
        <TeamList data={teamData} handleDelete={handleDelete} />
        <FormAdd handleAddProg={handleAddProg} />
      </div>
    </div>
  );
}

export default App;
