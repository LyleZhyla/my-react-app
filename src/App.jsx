import React, { useState } from "react";

// Accessible Form with Table
export default function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");
  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || course.trim() === "") {
      setError("Both name and course are required.");
      return;
    }

    const newRecord = { id: Date.now(), name, course };
    setRecords([...records, newRecord]);

    // clear fields
    setName("");
    setCourse("");
    setError("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Student Information
      </h1>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        aria-label="Student form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9"
        }}
      >
        <label htmlFor="nameInput">Name:</label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="courseInput">Course:</label>
        <input
          id="courseInput"
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        {error && (
          <p role="alert" style={{ color: "red", fontWeight: "bold" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Save
        </button>
      </form>

      {/* Table of Records */}
      <div style={{ marginTop: "30px" }}>
        <h2>Saved Records</h2>
        {records.length === 0 ? (
          <p>No records yet.</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px"
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#007BFF", color: "white" }}>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                  Course
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec) => (
                <tr key={rec.id}>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {rec.name}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {rec.course}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
