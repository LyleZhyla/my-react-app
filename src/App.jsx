import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default function App() {
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    middleInitial: "",
    dob: null,
    nationality: "",
    citizenship: "",
    sex: "",
    civilStatus: "",
    street: "",
    brgy: "",
    province: "",
    city: "",
    country: "",
    zip: "",
  });

  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.dob) {
      setError("Please complete required fields (First Name, Last Name, DOB).");
      return;
    }

    setRecords([...records, { id: Date.now(), ...form }]);
    setForm({
      lastName: "",
      firstName: "",
      middleInitial: "",
      dob: null,
      nationality: "",
      citizenship: "",
      sex: "",
      civilStatus: "",
      street: "",
      brgy: "",
      province: "",
      city: "",
      country: "",
      zip: "",
    });
    setError("");
  };

  const Field = ({ label, children }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label style={{ fontWeight: "bold" }}>{label}</label>
      {children}
    </div>
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Student Registration Form</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form-grid">
        <Field label="Last Name:">
          <input id="lastName" value={form.lastName} onChange={handleChange} />
        </Field>

        <Field label="First Name:">
          <input id="firstName" value={form.firstName} onChange={handleChange} />
        </Field>

        <Field label="Middle Initial:">
          <input
            id="middleInitial"
            value={form.middleInitial}
            onChange={handleChange}
          />
        </Field>

        <Field label="Date of Birth:">
          <DatePicker
            selected={form.dob}
            onChange={(date) => setForm({ ...form, dob: date })}
            dateFormat="MM/dd/yyyy"
            placeholderText="MM/DD/YYYY"
            showYearDropdown
            scrollableYearDropdown
          />
        </Field>

        <Field label="Nationality:">
          <input
            id="nationality"
            value={form.nationality}
            onChange={handleChange}
          />
        </Field>

        <Field label="Citizenship:">
          <input
            id="citizenship"
            value={form.citizenship}
            onChange={handleChange}
          />
        </Field>

        <Field label="Sex:">
          <select id="sex" value={form.sex} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </Field>

        <Field label="Civil Status:">
          <select
            id="civilStatus"
            value={form.civilStatus}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
            <option>Separated</option>
          </select>
        </Field>

        <Field label="Street:">
          <input id="street" value={form.street} onChange={handleChange} />
        </Field>

        <Field label="Barangay:">
          <input id="brgy" value={form.brgy} onChange={handleChange} />
        </Field>

        <Field label="Province:">
          <input id="province" value={form.province} onChange={handleChange} />
        </Field>

        <Field label="City/Municipality:">
          <input id="city" value={form.city} onChange={handleChange} />
        </Field>

        <Field label="Country:">
          <input id="country" value={form.country} onChange={handleChange} />
        </Field>

        <Field label="Zip Code:">
          <input id="zip" value={form.zip} onChange={handleChange} />
        </Field>

        {error && (
          <p className="error-message">{error}</p>
        )}

        <button type="submit" className="save-btn">
          Save
        </button>
      </form>

      {/* Table */}
      <div style={{ marginTop: "40px", maxWidth: "1100px", marginInline: "auto" }}>
        <h2>Saved Records</h2>
        {records.length === 0 ? (
          <p>No records yet.</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr style={{ background: "#007BFF", color: "white" }}>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>Name</th>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>DOB</th>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>Sex</th>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>Citizenship</th>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>Civil Status</th>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>Address</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id}>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                    {r.lastName}, {r.firstName} {r.middleInitial}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                    {r.dob ? r.dob.toLocaleDateString() : ""}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>{r.sex}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>{r.citizenship}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>{r.civilStatus}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                    {r.street}, {r.brgy}, {r.city}, {r.province}, {r.country} {r.zip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* CSS inside */}
      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
          background: #f9f9f9;
          padding: 25px;
          border-radius: 10px;
          border: 1px solid #ccc;
        }
        @media (min-width: 600px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 900px) {
          .form-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .save-btn {
          grid-column: 1 / -1;
          padding: 12px;
          background: #007BFF;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
        }
        .error-message {
          grid-column: 1 / -1;
          color: red;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
