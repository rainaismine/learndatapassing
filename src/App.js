import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [hasEnteredName, setHasEnteredName] = useState(false);

  return (
    <div className="App">
      {hasEnteredName ? (
        <Welcome name={name} />
      ) : (
        <>
          <input
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => setHasEnteredName(true)}>Next Page</button>
        </>
      )}
    </div>
  );
}

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome, {props.name}</h1>
    </div>
  );
};
