import { useState } from "react";

export default function Form({ location, setLocation }) {
  const [typedLocation, setTypedLocation] = useState("");

  function handleChange(e) {
    setTypedLocation(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLocation(typedLocation)
    setTypedLocation("")
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="city">
          City:
          <input type="text" value={typedLocation} onChange={handleChange} />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
