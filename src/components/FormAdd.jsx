// Komponenta pro přidání nového programátora do týmu
// Umožňuje zadat jméno a úroveň (junior/senior), validuje vstup
import React from "react";
import { useState } from "react";

function FormAdd({ handleAddProg }) {
  // levelCheck: stav pro úroveň programátora (junior/senior)
  const [levelCheck, setLevelCheck] = useState("junior");
  // progName: stav pro jméno programátora
  const [progName, setProgName] = useState("");

  // Odeslání formuláře, validace jména (min. 5 znaků)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (progName.length > 4) {
      // Přidání programátora do týmu
      handleAddProg({ name: progName, level: levelCheck });
      // Resetování vstupů
      setProgName("");
      setLevelCheck("junior");
    } else {
      alert("Prosím zadejte jméno. Minimální počet znaků je 5.");
    }
  };

  // Změna hodnoty jména programátora
  const handleNameChange = (event) => {
    setProgName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <fieldset className="border rounded-3 p-3 bg-white">
        <legend className="h4 text-center mb-3">Add new programmer</legend>
        <div className="row g-3">
          {/* Vstup pro jméno programátora */}
          <div className="col-12 col-md-6">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              onChange={handleNameChange}
              value={progName}
              placeholder="Enter programmer name"
            />
          </div>
          {/* Výběr úrovně programátora a tlačítko pro přidání */}
          <div className="col-12 col-md-6 d-flex align-items-end gap-3 justify-content-md-end ">
            {/* Výběr junior/senior */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="level"
                id="radioJunior"
                value="junior"
                checked={levelCheck === "junior"}
                onChange={() => setLevelCheck("junior")}
              />
              <label className="form-check-label" htmlFor="radioJunior">
                Junior
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="level"
                id="radioSenior"
                value="senior"
                checked={levelCheck === "senior"}
                onChange={() => setLevelCheck("senior")}
              />
              <label className="form-check-label" htmlFor="radioSenior">
                Senior
              </label>
            </div>
            {/* Tlačítko pro přidání programátora */}
            <button type="submit" className="btn w-100 btn-primary px-3">
              Add
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default FormAdd;
