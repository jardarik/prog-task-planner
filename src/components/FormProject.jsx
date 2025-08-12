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
      <fieldset className="border rounded p-3">
        <div className="row mb-3">
          <div className="col text-center">
            <legend className="h3">Your task</legend>
          </div>
        </div>

        {/* <div className="col"> */}
        {/* <div className="h2 text-center">Your task</div> */}
        {/* </div> */}
        <div className="row">
          <div className="col-12 col-md-5 d-flex align-items-center gap-3 justify-content-end mb-3 mb-md-3">
            <label htmlFor="lines" className="form-label">
              Lines of code:
            </label>
            <input
              type="number"
              className="form-control w-25"
              name="lines"
              id="lines"
              onChange={handleChange}
              value={lines}
              min={0}
            />
          </div>
          <div className="col-12 col-md-5 d-flex align-items-center justify-content-end gap-3 mb-3 mb-md-3">
            <label htmlFor="days" className="form-label">
              Time limit [days]:
            </label>
            <input
              type="number"
              className="form-control w-25"
              name="days"
              id="days"
              onChange={handleChange}
              value={days}
              min={0}
            />
          </div>
          <div className="col-12 col-md-2 d-flex align-items-center gap-3 justify-content-end mb-3 mb-md-3">
            <button
              type="button"
              className={`btn ${
                isApproved === true ? "btn-success" : "btn-danger disabled"
              }`}
              onClick={handleOnClick}
              id="doit"
              name="doit"
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
