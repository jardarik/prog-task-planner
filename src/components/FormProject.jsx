import React, { useEffect, useState } from "react";

function FormProject({ data }) {
  const [lines, setLines] = useState("");
  const [days, setDays] = useState("");

  //   useEffect(() => {
  //     // Tady můžeš reagovat na změnu počtu programátorů
  //     console.log("Počet programátorů:", data.length);
  //   }, [data]);

  const handleOnClick = () => {
    let totalLinesPerDay = 0;
    data.forEach((prog) => {
      totalLinesPerDay += prog.level === "senior" ? 200 : 100;
    });
    console.log("Celkový počet řádků za den:", totalLinesPerDay);
    if (totalLinesPerDay > lines / days) {
      console.log("Plán je schválený");
    } else {
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
                className="btn btn-primary"
                onClick={handleOnClick}
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
