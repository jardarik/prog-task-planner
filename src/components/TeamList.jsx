// Komponenta pro zobrazení seznamu programátorů v týmu
// Zobrazuje tabulku s jmény, úrovní a tlačítkem pro smazání
import React from "react";

function TeamList({ data, handleDelete }) {
  // data: pole programátorů (id, name, level)
  // handleDelete: funkce pro smazání programátora podle id
  return (
    <div className="mb-4">
      {/* Nadpis sekce týmu */}
      <h4 className="text-center mb-3">Your team</h4>
      {/* Tabulka s týmem, responsivní a zaoblená */}
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
            {/* Výpis všech programátorů v týmu */}
            {data.map((item) => (
              <tr key={item.id}>
                {/* Jméno programátora */}
                <td>{item.name}</td>
                {/* Úroveň programátora jako barevný badge */}
                <td>
                  <span
                    className={`badge ${
                      item.level === "senior" ? "bg-primary" : "bg-secondary"
                    }`}
                  >
                    {item.level}
                  </span>
                </td>
                {/* Tlačítko pro smazání programátora */}
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
