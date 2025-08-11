import React from "react";

function TeamList({ data, handleDelete }) {
  return (
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
  );
}

export default TeamList;
