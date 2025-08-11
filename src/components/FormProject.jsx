import React, { useEffect, useState } from "react";

function FormProject({ data }) {
  const [lines, setLines] = useState("");
  const [days, setDays] = useState("");
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
    } else {
      setIsApproved(false);
      console.log("Plán není schválený");
    }
  };

  const handleChange = (event) => {
    const value = Number(event.target.value);
    switch (event.target.id) {
      case "lines":
        setLines(value);
        break;
      case "days":
        setDays(value);
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
    <div className="container">
      <form>
        <fieldset className="border rounded p-3">
          <legend>Your task</legend>

          {/* <div className="col"> */}
          {/* <div className="h2 text-center">Your task</div> */}
          {/* </div> */}
          <div className="row">
            <div className="col d-flex align-items-center gap-3">
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
              />
            </div>
            <div className="col d-flex align-items-center gap-3">
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
              />
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
    </div>
  );
}

export default FormProject;
