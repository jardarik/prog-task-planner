// Hlavní komponenta aplikace
// Řídí stav týmu, navigaci mezi záložkami a předává data podkomponentám
import { useState } from "react";

import "./App.css";
import TeamList from "./components/TeamList";
import jsonData from "./team_data.json";
import FormAdd from "./components/FormAdd";
import FormProject from "./components/FormProject";

function App() {
  // teamData: stav pro pole programátorů
  const [teamData, setTeamData] = useState(jsonData);
  // activeTab: stav pro aktivní záložku (tab1 = seznam, tab2 = plánování)
  const [activeTab, setActiveTab] = useState("tab1");

  // handleDelete: smaže programátora podle id
  const handleDelete = (idToDel) => {
    const temp = teamData.filter((item) => item.id !== idToDel);
    setTeamData(temp);
  };
  // handleAddProg: přidá nového programátora do týmu
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
      {/* Hlavička aplikace */}
      <h1 className="text-center mb-4">Your app for handling project</h1>

      {/* Navigace mezi záložkami */}
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

      {/* Obsah podle aktivní záložky */}
      <div className="border border-top p-4 rounded-3 bg-light">
        {activeTab === "tab1" && (
          <>
            {/* Formulář pro přidání programátora */}
            <FormAdd handleAddProg={handleAddProg} />
            {/* Výpis týmu */}
            <TeamList data={teamData} handleDelete={handleDelete} />
          </>
        )}
        {activeTab === "tab2" && <FormProject data={teamData} />}
      </div>
    </div>
  );
}

export default App;
