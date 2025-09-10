import React, { useState } from "react";

// Accessible Button
function AccessibleButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "6px",
        border: "2px solid #333",
        backgroundColor: "#007BFF",
        color: "#fff",
        cursor: "pointer",
        margin: "10px 0"
      }}
    >
      {label}
    </button>
  );
}

// Accessible Form
function AccessibleForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Name is required");
    } else {
      alert(`Hello, ${name}!`);
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Name form">
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        aria-required="true"
        aria-describedby="nameHelp"
      />
      <div id="nameHelp">This field cannot be left empty.</div>

      {error && (
        <p role="alert" style={{ color: "red" }}>
          {error}
        </p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

// Accessible Nav
function AccessibleNav() {
  return (
    <nav aria-label="Main navigation">
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <a href="#home" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

// App
export default function App() {
  return (
    <div>
      <AccessibleNav />
      <main id="main">
        <h1>Accessible UI Demo (React 19)</h1>
        <AccessibleButton
          label="Click Me"
          onClick={() => alert("Button clicked!")}
        />
        <AccessibleForm />
      </main>
    </div>
  );
}
