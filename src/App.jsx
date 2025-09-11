import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      {/* ✅ Sticky Navbar */}
      <nav className="navbar">
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

      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        Student Registration Form
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form-grid" id="form">
        <div>
          <label>Last Name: <span style={{ color: "red" }}>*</span></label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>First Name: <span style={{ color: "red" }}>*</span></label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Middle Initial:</label>
          <input
            name="middleInitial"
            value={form.middleInitial}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Date of Birth: <span style={{ color: "red" }}>*</span></label>
          <DatePicker
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

        <div>
          <label>Nationality: <span style={{ color: "red" }}>*</span></label>
          <input
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Citizenship: <span style={{ color: "red" }}>*</span></label>
          <input
            name="citizenship"
            value={form.citizenship}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Sex: <span style={{ color: "red" }}>*</span></label>
          <select name="sex" value={form.sex} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Civil Status: <span style={{ color: "red" }}>*</span></label>
          <select
            name="civilStatus"
            value={form.civilStatus}
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
            <option value="Separated">Separated</option>
          </select>
        </div>

        <div>
          <label>Street: <span style={{ color: "red" }}>*</span></label>
          <input name="street" value={form.street} onChange={handleChange} />
        </div>

        <div>
          <label>Barangay: <span style={{ color: "red" }}>*</span></label>
          <input name="brgy" value={form.brgy} onChange={handleChange} />
        </div>

        <div>
          <label>Province: <span style={{ color: "red" }}>*</span></label>
          <input name="province" value={form.province} onChange={handleChange} />
        </div>

        <div>
          <label>City/Municipality: <span style={{ color: "red" }}>*</span></label>
          <input name="city" value={form.city} onChange={handleChange} />
        </div>

        <div>
          <label>Country: <span style={{ color: "red" }}>*</span></label>
          <input name="country" value={form.country} onChange={handleChange} />
        </div>

        <div>
          <label>Zip Code: <span style={{ color: "red" }}>*</span></label>
          <input name="zip" value={form.zip} onChange={handleChange} />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="save-btn">
          Save
        </button>
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
                    {r.brgy}, {r.city}, {r.province}, {r.country}{" "}
                    {r.zip}
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
