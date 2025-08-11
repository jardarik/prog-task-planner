import React from "react";

function TeamList({ data, handleChange }) {
  return (
    <div className="container">
      <div className="row">
        <div className="h2 text-center">Your team</div>
        <div className="table-responsive rounded-3 overflow-hidden">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Jméno</th>
                <th>Level</th>
                <th>Akce</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.level}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Smaž
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* formular pro pridani programatora do team */}
      <div className="row">
        <form action="submit">
          <fieldset className="border rounded p-3">
            <legend>Přidání nového programátora</legend>
            <div className="row">
              {/* input jmeno */}
              <div className="col d-flex align-items-center gap-3">
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
                />
              </div>
              {/* level radio */}
              <div className="col d-flex align-items-center gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="level"
                    id="radioJunior"
                    value="junior"
                    checked
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
                  />
                  <label className="form-check-label" htmlFor="radioSenior">
                    Senior
                  </label>
                </div>

                {/* add button */}
                <button
                  type="button"
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
    </div>
  );
}

export default TeamList;
