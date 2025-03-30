import { useState } from "react";

function handleFormSubmit(event) {
  console.log(event);
  event.preventDefault();
  console.log("Form is Submitted");
}

let styles = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  margin: "10px",
  color: "black",
};

function NameForm() {
  const [name, setName] = useState("");
  function handleInputChange(event) {
    setName(event.target.value);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        style={styles}
        onChange={handleInputChange}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default NameForm;
