



import { useEffect, useState } from "react";

export const EmployeeForm = () => {
  const [profile, setProfile] = useState({
    specialty: "",
    rate: 0,
    userId: 0,
  });

  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    fetch(`http://localhost:8088/employees?userId=${honeyUserObject.id}`)
      .then((res) => res.json())
      .then((data) => {
        const employeeObject = data[0];
        setProfile(employeeObject);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8088/employees/${profile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then(() => {
        setFeedback("Employee profile successfully saved");
      })
      .catch((error) => {
        setFeedback(`Error: ${error.message}`);
      });
  };

  return (
    <>
      <form className="profile">
        <h2 className="profile__title">New Service Ticket</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="specialty">Specialty:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              value={profile.specialty}
              onChange={(evt) => {
                const copy = { ...profile };
                copy.specialty = evt.target.value;
                setProfile(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="rate">Hourly rate:</label>
            <input
              type="number"
              className="form-control"
              value={profile.rate}
              onChange={(evt) => {
                const copy = { ...profile };
                copy.rate = parseFloat(evt.target.value, 2);
                setProfile(copy);
              }}
            />
          </div>
        </fieldset>
        <button
          onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
          className="btn btn-primary"
        >
          Save Profile
        </button>
      </form>
      <div
        className={`${
          feedback.includes("Error") ? "error" : "feedback"
        } ${feedback === "" ? "invisible" : "visible"}`}
      >
        {feedback}
      </div>
    </>
  );
};
