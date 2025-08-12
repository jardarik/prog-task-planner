import React from "react";
import { useState } from "react";

function FormAdd({ handleAddProg }) {
  const [levelCheck, setLevelCheck] = useState("junior");
  const [progName, setProgName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (progName.length > 4) {
      handleAddProg({ name: progName, level: levelCheck });
      setProgName("");
      setLevelCheck("junior");
    } else {
      alert("Prosím zadejte jméno. Minimální počet znaků je 5.");
    }
  };

  const handleNameChange = (event) => {
    setProgName(event.target.value);
  };

  return (
    <div className="container-fluid p-0">
      {/* formular pro pridani programatora do team */}

      <form onSubmit={handleSubmit}>
        <fieldset className="border rounded p-3">
          <legend className="h3 text-center mb-3">Add new programmer</legend>
          <div className="row">
            {/* input jmeno */}
            <div className="col-12 col-md-6 d-flex align-items-center gap-3 mb-3 mb-md-0">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                aria-describedby="name"
                placeholder=""
                onChange={handleNameChange}
                value={progName}
              />
            </div>
            {/* level radio */}
            <div className="col-12 col-md-6 d-flex align-items-center gap-3 justify-content-end">
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

              {/* add button */}
              <button
                type="submit"
                className="btn btn-primary"
                name="addProg"
                id="addProg"
              >
                Add
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default FormAdd;
