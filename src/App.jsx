import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/* ---------------- Accessible Components ---------------- */

// 🔹 Accessible Button
function AccessibleButton({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="save-btn"
      aria-pressed="false"
    >
      {children}
    </button>
  );
}

// 🔹 Accessible Input
function AccessibleInput({ label, name, value, onChange, required = false }) {
  const inputId = `${name}-id`;

  return (
    <div>
      <label htmlFor={inputId}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        aria-required={required}
      />
    </div>
  );
}

// 🔹 Accessible Navigation
function AccessibleNav() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="nav-brand">Student Portal</div>
      <ul className="nav-links">
        <li>
          <a href="#form">Registration</a>
        </li>
        <li>
          <a href="#records">Records</a>
        </li>
      </ul>
    </nav>
  );
}

/* ---------------- Main App ---------------- */

export default function App() {
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    middleInitial: "",
    dob: null,
    nationality: "",
    sex: "",
    civilStatus: "",
    brgy: "",
    province: "",
    city: "",
    country: "",
    zip: "",
  });

  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.dob) {
      setError("Please complete required fields.");
      return;
    }

    setRecords([...records, { id: Date.now(), ...form }]);
    setForm({
      lastName: "",
      firstName: "",
      middleInitial: "",
      dob: null,
      nationality: "",
      sex: "",
      civilStatus: "",
      brgy: "",
      province: "",
      city: "",
      country: "",
      zip: "",
    });
    setError("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <AccessibleNav />

      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        Student Registration Form
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form-grid" id="form">
        <AccessibleInput
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />

        <AccessibleInput
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <AccessibleInput
          label="Middle Initial"
          name="middleInitial"
          value={form.middleInitial}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="dob">
            Date of Birth <span style={{ color: "red" }}>*</span>
          </label>
          <DatePicker
            id="dob"
            selected={form.dob}
            onChange={(date) => setForm({ ...form, dob: date })}
            dateFormat="MM/dd/yyyy"
            placeholderText="MM/DD/YYYY"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            minDate={new Date(1900, 0, 1)}
            maxDate={new Date(2025, 11, 31)}
          />
        </div>

        <AccessibleInput
          label="Nationality"
          name="nationality"
          value={form.nationality}
          onChange={handleChange}
          required
        />

        <div>
          <label htmlFor="sex">
            Sex <span style={{ color: "red" }}>*</span>
          </label>
          <select
            id="sex"
            name="sex"
            value={form.sex}
            onChange={handleChange}
            aria-required="true"
          >
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="civilStatus">
            Civil Status <span style={{ color: "red" }}>*</span>
          </label>
          <select
            id="civilStatus"
            name="civilStatus"
            value={form.civilStatus}
            onChange={handleChange}
            aria-required="true"
          >
            <option value="">-- Select --</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
            <option value="Separated">Separated</option>
          </select>
        </div>

        <AccessibleInput
          label="Barangay"
          name="brgy"
          value={form.brgy}
          onChange={handleChange}
          required
        />

        <AccessibleInput
          label="Province"
          name="province"
          value={form.province}
          onChange={handleChange}
          required
        />

        <AccessibleInput
          label="City/Municipality"
          name="city"
          value={form.city}
          onChange={handleChange}
          required
        />

        <AccessibleInput
          label="Country"
          name="country"
          value={form.country}
          onChange={handleChange}
          required
        />

        <AccessibleInput
          label="Zip Code"
          name="zip"
          value={form.zip}
          onChange={handleChange}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <AccessibleButton type="submit">Save</AccessibleButton>
      </form>

      {/* Table */}
      <div
        id="records"
        style={{ marginTop: "40px", maxWidth: "1100px", marginInline: "auto" }}
      >
        <h2>Saved Records</h2>
        {records.length === 0 ? (
          <p>No records yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Sex</th>
                <th>Nationality</th>
                <th>Civil Status</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id}>
                  <td>
                    {r.lastName}, {r.firstName} {r.middleInitial}
                  </td>
                  <td>{r.dob ? r.dob.toLocaleDateString() : ""}</td>
                  <td>{r.sex}</td>
                  <td>{r.nationality}</td>
                  <td>{r.civilStatus}</td>
                  <td>
                    {r.brgy}, {r.city}, {r.province}, {r.country} {r.zip}
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
