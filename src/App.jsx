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
  const [activeTab, setActiveTab] = useState("tab1");

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
      </div>
      {/* navigace  */}
      <div className="row">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => setActiveTab("tab1")}
            >
              List of programmers
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => setActiveTab("tab2")}
            >
              Planning tasks
            </button>
          </li>
        </ul>
      </div>

      {/* Team list and formadd */}
      <div className="row border border-top-0 p-2 p-md-5">
        {activeTab === "tab1" && (
          <>
            <FormAdd handleAddProg={handleAddProg} />
            <TeamList data={teamData} handleDelete={handleDelete} />
          </>
        )}
        {activeTab === "tab2" && <FormProject data={teamData} />}
      </div>
    </div>
  );
}

export default App;
