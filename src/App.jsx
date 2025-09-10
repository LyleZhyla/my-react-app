import { useState } from 'react'
import './App.css'


import React from "react";

// Accessible Button Component
class AccessibleButton extends React.Component {
  render() {
    const { onClick, label } = this.props;
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
}

// Accessible Form Component
class AccessibleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", error: "" };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, error: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() === "") {
      this.setState({ error: "Name is required" });
    } else {
      alert(`Hello, ${this.state.name}!`);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} aria-label="Name form">
        <label htmlFor="nameInput">Enter your name:</label>
        <input
          id="nameInput"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          required
          aria-required="true"
          aria-describedby="nameHelp"
        />
        <div id="nameHelp">This field cannot be left empty.</div>

        {this.state.error && (
          <p role="alert" style={{ color: "red" }}>
            {this.state.error}
          </p>
        )}

        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Accessible Navigation Component
class AccessibleNav extends React.Component {
  render() {
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
}

// Main App Component
class App extends React.Component {
  render() {
    return (
      <div>
        <AccessibleNav />
        <main id="main">
          <h1>Accessible UI Demo</h1>
          <AccessibleButton
            label="Click Me"
            onClick={() => alert("Button clicked!")}
          />
          <AccessibleForm />
        </main>
      </div>
    );
  }
}

export default App;
