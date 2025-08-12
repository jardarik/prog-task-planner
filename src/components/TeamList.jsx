import React from "react";

function TeamList({ data, handleDelete }) {
  return (
    <div className="mb-4">
      <h4 className="text-center mb-3">Your team</h4>
      <div className="table-responsive rounded-3 overflow-hidden">
        <table className="table table-striped table-hover mb-0">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <span
                    className={`badge ${
                      item.level === "senior" ? "bg-primary" : "bg-secondary"
                    }`}
                  >
                    {item.level}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                    title="Delete programmer"
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamList;
