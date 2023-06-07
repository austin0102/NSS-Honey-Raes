

import { useEffect, useState } from "react";

export const CustomerForm = () => {
  const [profile, setProfile] = useState({
    address: "",
    phone: "",
    userId: 0,
  });

  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    fetch(`http://localhost:8088/customers?userId=${honeyUserObject.id}`)
      .then((res) => res.json())
      .then((data) => {
        const customerObject = data[0];
        setProfile(customerObject);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8088/customers/${profile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then(() => {
        setFeedback("Customer profile successfully saved");
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
            <label htmlFor="address">Address:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              value={profile.address}
              onChange={(evt) => {
                const copy = { ...profile };
                copy.address = evt.target.value;
                setProfile(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              className="form-control"
              value={profile.phone}
              onChange={(evt) => {
                const copy = { ...profile };
                copy.phone = evt.target.value;
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
