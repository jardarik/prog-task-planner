import React from "react";

function TeamList({ data, handleDelete }) {
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
                      onChange={() => handleDelete(item.id)}
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
    </div>
  );
}

export default TeamList;
