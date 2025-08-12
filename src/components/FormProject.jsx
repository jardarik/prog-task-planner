import React, { useEffect, useState } from "react";

function FormProject({ data }) {
  const [lines, setLines] = useState(0);
  const [days, setDays] = useState(0);
  const [isApproved, setIsApproved] = useState(false);

  // Funkce pro výpočet celkového počtu řádků za den
  const getTotalLinesPerDay = () => {
    return data.reduce(
      (sum, prog) => sum + (prog.level === "senior" ? 200 : 100),
      0
    );
  };
  const handleOnClick = () => {
    const totalLinesPerDay = getTotalLinesPerDay();
    console.log("Celkový počet řádků za den:", totalLinesPerDay);
    if (totalLinesPerDay >= lines / days) {
      setIsApproved(true);
      console.log("Plán je schválený");
      alert("Plán je splněn.");
    } else {
      setIsApproved(false);
      console.log("Plán není schválený");
    }
  };

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
  useEffect(() => {
    const totalLinesPerDay = getTotalLinesPerDay();
    if (lines > 0 && days > 0) {
      setIsApproved(totalLinesPerDay >= lines / days);
    } else {
      setIsApproved(false);
    }
  }, [lines, days, data]);

  return (
    <form>
      <fieldset className="border rounded-3 p-3 bg-white">
        <legend className="h4 text-center mb-4">Your task</legend>
        <div className="row g-3">
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
