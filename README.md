# Simple Student Registration Portal

## 📌 Project Overview

This project was built using **React 19** as part of the activity requirements. The goal was to create accessible UI components (Button, Input Form, and Navigation Menu) and integrate them into a functional **Student Registration System**.

The app allows users to:

* Fill in a student registration form.
* Save submitted records.
* View the saved records in a table.

---

## ⚙️ Features & Components

### 1. **Accessible Button (`AccessibleButton`)**

* Implemented with semantic `<button>` element.
* Supports `type` (`button`, `submit`) and `aria-pressed` attribute for screen readers.
* Large clickable area with good color contrast and hover effect.

### 2. **Accessible Input (`AccessibleInput`)**

* Each input field has a `<label>` linked via `htmlFor` and `id`.
* `aria-required` added for required fields.
* Error messages are displayed clearly in red text.
* Inputs are responsive and keyboard-friendly.

### 3. **Accessible Navigation Menu (`AccessibleNav`)**

* Uses semantic `<nav>` with `aria-label="Main Navigation"`.
* High-contrast design (white text on dark blue background).
* Links are keyboard navigable and have hover focus styles.

---

## 🛠 Accessibility Fixes

* ✅ Added **labels** for all input fields.
* ✅ Used `aria-required` to indicate mandatory fields.
* ✅ Ensured **color contrast** meets WCAG 2.1 AA (dark blue background with white text).
* ✅ Added error messages that are **visible and descriptive**.
* ✅ Navigation bar uses `<nav>` landmark for screen readers.
* ✅ Integrated **axe-core** for accessibility auditing during development.

---

## 🚀 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/student-portal-accessible.git
   cd student-portal-accessible
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the development server:

   ```bash
   npm run dev
   ```
4. Open in your browser:

   ```
   http://localhost:5173
   ```

---

## 📂 Project Structure

```
├── src
│   ├── App.jsx          # Main app with form, records, and accessible components
│   ├── App.css          # Styling
│   ├── main.jsx         # Entry point (with axe-core integration)
│
└── package.json
```
