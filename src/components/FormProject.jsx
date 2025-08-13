// Komponenta pro plánování projektu
// Umožňuje zadat počet řádků kódu a časový limit, spočítá, zda tým zvládne úkol
import React, { useEffect, useState, useCallback } from "react";

function FormProject({ data }) {
  // Počet řádků kódu, které je potřeba napsat
  const [lines, setLines] = useState(0);
  // Počet dnů na splnění úkolu
  const [days, setDays] = useState(0);
  // Stav, zda je plán schválený (splnitelný)
  const [isApproved, setIsApproved] = useState(false);

  // Funkce pro výpočet celkového počtu řádků za den podle úrovně programátorů
  // Senior zvládne 200 řádků za den, junior 100
  const getTotalLinesPerDay = useCallback(() => {
    return data.reduce(
      (sum, prog) => sum + (prog.level === "senior" ? 200 : 100),
      0
    );
  }, [data]);
  // Kontrola, zda je plán splnitelný (po kliknutí na tlačítko)
  const handleOnClick = () => {
    const totalLinesPerDay = getTotalLinesPerDay();
    console.log("Celkový počet řádků za den:", totalLinesPerDay);
    // Pokud tým zvládne požadovaný počet řádků za den, schválí plán
    if (totalLinesPerDay >= lines / days) {
      setIsApproved(true);
      console.log("Plán je schválený");
      alert("Plán je splněn.");
    } else {
      setIsApproved(false);
      console.log("Plán není schválený");
    }
  };

  // Zpracování změny vstupních hodnot (řádky, dny)
  const handleChange = (event) => {
    switch (event.target.id) {
      case "lines":
        setLines(event.target.value);
        break;
      case "days":
        setDays(event.target.value);
        break;
      default:
        break;
    }
  };
  // Automatická kontrola schválení plánu při změně vstupů nebo týmu
  useEffect(() => {
    const totalLinesPerDay = getTotalLinesPerDay();
    if (lines > 0 && days > 0) {
      setIsApproved(totalLinesPerDay >= lines / days);
    } else {
      setIsApproved(false);
    }
  }, [lines, days, getTotalLinesPerDay]);

  return (
    <form>
      <fieldset className="border rounded-3 p-3 bg-white">
        <legend className="h4 text-center mb-4">Your task</legend>
        <div className="row g-3">
          {/* Vstup pro počet řádků kódu */}
          <div className="col-12 col-md-5">
            <label htmlFor="lines" className="form-label">
              Lines of code:
            </label>
            <input
              type="number"
              className="form-control"
              name="lines"
              id="lines"
              onChange={handleChange}
              value={lines}
              min={0}
              placeholder="0"
            />
          </div>
          {/* Vstup pro počet dnů */}
          <div className="col-12 col-md-5">
            <label htmlFor="days" className="form-label">
              Time limit [days]:
            </label>
            <input
              type="number"
              className="form-control"
              name="days"
              id="days"
              onChange={handleChange}
              value={days}
              min={0}
              placeholder="0"
            />
          </div>
          {/* Tlačítko pro schválení plánu */}
          <div className="col-12 col-md-2 d-flex align-items-end">
            <button
              type="button"
              className={`btn w-100 ${
                isApproved ? "btn-success" : "btn-danger"
              }`}
              onClick={handleOnClick}
              disabled={!isApproved}
            >
              Do it
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default FormProject;
