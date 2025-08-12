import { useState } from "react";

import "./App.css";
import TeamList from "./components/TeamList";
import jsonData from "./team_data.json";
import FormAdd from "./components/FormAdd";
import FormProject from "./components/FormProject";

function App() {
  const [teamData, setTeamData] = useState(jsonData);
  // const [showForm, setShowForm] = useState("form-add");
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

  return (
    <div className="container py-4">
      {/* hlavička */}
      <h1 className="text-center mb-4">Your app for handling project</h1>

      {/* navigace  */}
      <ul className="nav nav-tabs mb-0 justify-content-center border-bottom-0">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "tab1" ? "active bg-light" : ""
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            List of programmers
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "tab2" ? "active bg-light" : ""
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Planning tasks
          </button>
        </li>
      </ul>

      {/* Content area */}
      <div className="border border-top p-4 rounded-3 bg-light">
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
