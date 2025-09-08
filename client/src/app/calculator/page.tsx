"use client";
import { useState } from "react";

export default function page() {
  // State for Skilled Worker calculation
  const [skilledPoints, setSkilledPoints] = useState(0);
  const [skilledForm, setSkilledForm] = useState({
    vocationalEducation: false,
    workExperience: 0,
    workExperienceAustria: 0,
    languageGerman: 0,
    age: 15,
  });

  // State for Other Key Worker calculation
  const [keyWorkerPoints, setKeyWorkerPoints] = useState(0);
  const [keyWorkerForm, setKeyWorkerForm] = useState({
    qualifications: 20,
    workExperience: 0,
    languageGerman: 0,
    age: 15,
  });

  // Function to calculate points for Skilled Workers
  const calculateSkilledWorkerPoints = () => {
    let points = 0;

    // Qualifications (Vocational education in shortage occupation)
    if (skilledForm.vocationalEducation) points += 30;

    // Work experience
    points += skilledForm.workExperience * 2; // 1 point per half-year
    points += skilledForm.workExperienceAustria * 4; // 2 points per half-year

    // Language Skills (German)
    points += skilledForm.languageGerman;

    // Age
    points += skilledForm.age;

    setSkilledPoints(points);
  };

  // Function to calculate points for Key Workers
  const calculateKeyWorkerPoints = () => {
    let points = 0;

    // Qualifications
    points += keyWorkerForm.qualifications;

    // Work experience
    points += keyWorkerForm.workExperience;

    // Language Skills (German)
    points += keyWorkerForm.languageGerman;

    // Age
    points += keyWorkerForm.age;

    setKeyWorkerPoints(points);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "120px" }}>
      <h1>Red-White-Red Card Point Calculator</h1>

      {/* Skilled Workers in Shortage Occupations */}
      <h2>Skilled Workers in Shortage Occupations</h2>
      <form>
        <label>
          Completed vocational education (shortage occupation):
          <input
            type="checkbox"
            checked={skilledForm.vocationalEducation}
            onChange={(e) =>
              setSkilledForm({
                ...skilledForm,
                vocationalEducation: e.target.checked,
              })
            }
          />
        </label>
        <br />
        <label>
          Work Experience (in years):
          <input
            type="number"
            value={skilledForm.workExperience}
            onChange={(e) =>
              setSkilledForm({
                ...skilledForm,
                workExperience: parseInt(e.target.value),
              })
            }
            min="0"
          />
        </label>
        <br />
        <label>
          Work Experience in Austria (in years):
          <input
            type="number"
            value={skilledForm.workExperienceAustria}
            onChange={(e) =>
              setSkilledForm({
                ...skilledForm,
                workExperienceAustria: parseInt(e.target.value),
              })
            }
            min="0"
          />
        </label>
        <br />
        <label>
          German Language Skills:
          <select
            value={skilledForm.languageGerman}
            onChange={(e) =>
              setSkilledForm({
                ...skilledForm,
                languageGerman: parseInt(e.target.value),
              })
            }
          >
            <option value="0">None</option>
            <option value="5">A1</option>
            <option value="10">A2</option>
            <option value="15">B1</option>
          </select>
        </label>
        <br />
        <label>
          Age:
          <select
            value={skilledForm.age}
            onChange={(e) =>
              setSkilledForm({ ...skilledForm, age: parseInt(e.target.value) })
            }
          >
            <option value="15">Up to 30</option>
            <option value="10">Up to 40</option>
            <option value="5">Up to 50</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={calculateSkilledWorkerPoints}>
          Calculate Skilled Worker Points
        </button>
      </form>

      <h3>Total Points for Skilled Workers: {skilledPoints}</h3>

      <hr />

      {/* Other Key Workers */}
      <h2>Other Key Workers</h2>
      <form>
        <label>
          Qualifications (20, 25, or 30):
          <input
            type="number"
            value={keyWorkerForm.qualifications}
            onChange={(e) =>
              setKeyWorkerForm({
                ...keyWorkerForm,
                qualifications: parseInt(e.target.value),
              })
            }
            min="0"
          />
        </label>
        <br />
        <label>
          Work Experience (in years):
          <input
            type="number"
            value={keyWorkerForm.workExperience}
            onChange={(e) =>
              setKeyWorkerForm({
                ...keyWorkerForm,
                workExperience: parseInt(e.target.value),
              })
            }
            min="0"
          />
        </label>
        <br />
        <label>
          German Language Skills:
          <select
            value={keyWorkerForm.languageGerman}
            onChange={(e) =>
              setKeyWorkerForm({
                ...keyWorkerForm,
                languageGerman: parseInt(e.target.value),
              })
            }
          >
            <option value="0">None</option>
            <option value="5">A1</option>
            <option value="10">A2</option>
            <option value="15">B1</option>
          </select>
        </label>
        <br />
        <label>
          Age:
          <select
            value={keyWorkerForm.age}
            onChange={(e) =>
              setKeyWorkerForm({
                ...keyWorkerForm,
                age: parseInt(e.target.value),
              })
            }
          >
            <option value="15">Up to 30</option>
            <option value="10">Up to 40</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={calculateKeyWorkerPoints}>
          Calculate Key Worker Points
        </button>
      </form>

      <h3>Total Points for Key Workers: {keyWorkerPoints}</h3>
    </div>
  );
}
