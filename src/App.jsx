import { useState } from "react";

import "./App.css";
import TeamList from "./components/TeamList";
import jsonData from "./team_data.json";
import FormAdd from "./components/FormAdd";
import FormProject from "./components/FormProject";

function App() {
  const [teamData, setTeamData] = useState(jsonData);
  const [showForm, setShowForm] = useState("form-add");
  // const [newProg, setNewProg] = useState("");

  const handleDelete = (idToDel) => {
    const temp = teamData.filter((item) => item.id !== idToDel);
    setTeamData(temp);
    // setCarsToShow(temp);
  };
  const handleAddProg = (prog) => {
    const temp = [
      ...teamData,
      {
        id:
          teamData.length > 0
            ? Math.max(...teamData.map((car) => car.id)) + 1
            : 1,
        name: prog.name,
        level: prog.level,
      },
    ];
    setTeamData(temp);
  };

  const handleOnClick = (event) => {
    if (event.target.id === "btn-add") {
      setShowForm("form-add");
    } else if (event.target.id === "btn-project") {
      setShowForm("form-project");
    }
  };

  return (
    <div className="container">
      {/* hlavička */}
      <div className="row text-center my-3">
        <div className="h1">Your app for handling project</div>
        <div className="h2">Toggle view</div>
      </div>
      {/* navigace  */}
      <div className="row my-3">
        <div className="d-flex gap-2 flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            name="btn-add"
            id="btn-add"
            onClick={handleOnClick}
          >
            List of programmers
          </button>
          <button
            type="button"
            className="btn btn-primary"
            name="btn-project"
            id="btn-project"
            onClick={handleOnClick}
          >
            Form for planning tasks
          </button>
        </div>
      </div>
      {/* Team list and formadd */}
      <div className="row my-3">
        {showForm === "form-add" && (
          <>
            <FormAdd handleAddProg={handleAddProg} />
            <TeamList data={teamData} handleDelete={handleDelete} />
          </>
        )}
        {showForm === "form-project" && <FormProject data={teamData} />}
      </div>
    </div>
  );
}

export default App;
