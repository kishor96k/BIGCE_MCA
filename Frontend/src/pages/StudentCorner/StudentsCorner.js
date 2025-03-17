import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import './StudentsCorner.css';

const syllabusData = {
    "MCA Syllabus": {
        "": [{ pdf: "/MCA-I/syllabus.pdf" }],
    },
};

const notesData = {
    "Semester 1": {
        DSA: [
            { name: "Unit 1", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-1.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-2.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-3.pdf" },
            { name: "Unit 4", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-4.pdf" },
            { name: "Unit 5", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-5.pdf" },
        ],
        "JAVA Programming": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-I/JAVA/UNIT- I JAVA.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-I/JAVA/UNIT- II JAVA.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-I/JAVA/UNIT- III JAVA.pdf"},
            { name: "Unit 4", pdf: "/MCA-I/Sem-I/JAVA/UNIT- I JAVA.pdf" },
            { name: "Unit 5", pdf: "/MCA-I/Sem-I/JAVA/UNIT V.pdf" },
        ],
        "Operating System": [
          { name: "Unit 1", pdf: "/MCA-I/Sem-I/OS/Unit1-OS.pdf" },
          { name: "Unit 2", pdf: "" },
          { name: "Unit 3", pdf: "" },
          { name: "Unit 4", pdf: "" },
          { name: "Unit 5", pdf: "" },
      ],
      "DBMS": [
        { name: "Unit 1", pdf: "" },
        { name: "Unit 2", pdf: "" },
        { name: "Unit 3", pdf: "" },
        { name: "Unit 4", pdf: "" },
        { name: "Unit 5", pdf: "" },
    ],
    "Probability and statistics": [
      { name: "Unit 1", pdf: "/MCA-I/Sem-I/PS/Unit1.pdf" },
      { name: "Unit 2", pdf: "/MCA-I/Sem-I/PS/Unit2.pdf" },
      { name: "Unit 3", pdf: "/MCA-I/Sem-I/PS/Unit3.pdf" },
      { name: "Unit 4", pdf: "/MCA-I/Sem-I/PS/Unit4.pdf" },
      { name: "Unit 5", pdf: "/MCA-I/Sem-I/PS/Unit5.pdf" },
  ],
    },
    "Semester 2": {
        "Object Design & Agile Development (ODAD) ": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        "Computer Networks (CN)": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        "Artificial Intelligent (AI)": [
          { name: "Unit 1", pdf: "" },
          { name: "Unit 2", pdf: "" },
          { name: "Unit 3", pdf: "" },
          { name: "Unit 4", pdf: "" },
          { name: "Unit 5", pdf: "" },
      ],
      " Advance Database Technologies ": [
        { name: "Unit 1", pdf: "" },
        { name: "Unit 2", pdf: "" },
        { name: "Unit 3", pdf: "" },
        { name: "Unit 4", pdf: "" },
        { name: "Unit 5", pdf: "" },
    ],
    " Research Methodology": [
      { name: "Unit 1", pdf: "" },
      { name: "Unit 2", pdf: "" },
      { name: "Unit 3", pdf: "" },
      { name: "Unit 4", pdf: "" },
      { name: "Unit 5", pdf: "" },
  ],
    },
    "Semester 3": {
        "Full Stack Development (FSD)": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-III/ML/FSD/FSD1.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-III/ML/FSD/FSD2.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-III/ML/FSD/FSD3.pdf" },
            { name: "Unit 4", pdf: "/MCA-I/Sem-III/ML/FSD/FSD4.pdf" },
            { name: "Unit 5", pdf: "/MCA-I/Sem-III/ML/FSD/FSD5.pdf" },
            { name: "Unit 6", pdf: "/MCA-I/Sem-III/ML/FSD/FSD6.pdf" },
        ],
        "Machine Learning (ML)": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-III/ML/ML UNIT -I.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-III/ML/ML UNIT -II.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-III/ML/ML UNIT -III.pdf" },
            { name: "Unit 4", pdf: "/MCA-I/Sem-III/ML/ML UNIT -IV.pdf" },
            { name: "Unit 5", pdf: "/MCA-I/Sem-III/ML/ML UNIT -V.pdf" },
        ],
        "Mobile Application Development ": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        "Cloud Computing (CC)": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        " Software Testing and Tools ": [
          { name: "Unit 1", pdf: "/MCA-I/Sem-III/STT/STT UNIT I.pdf" },
          { name: "Unit 2", pdf: "/MCA-I/Sem-III/STT/STT UNIT 2.pdf" },
          { name: "Unit 3", pdf: "/MCA-I/Sem-III/STT/STT UNIT 3.pdf" },
          { name: "Unit 4", pdf: "" },
          { name: "Unit 5", pdf: "" },
      ],
    },
    // "Semester 4": {
    //     "Cyber Security": [
    //         { name: "Unit 1", pdf: "unit1.pdf" },
    //         { name: "Unit 2", pdf: "unit2.pdf" },
    //         { name: "Unit 3", pdf: "unit3.pdf" },
    //         { name: "Unit 4", pdf: "unit4.pdf" },
    //         { name: "Unit 5", pdf: "unit5.pdf" },
    //     ],
    //     "Machine Learning": [
    //         { name: "Unit 1", pdf: "unit1.pdf" },
    //         { name: "Unit 2", pdf: "unit2.pdf" },
    //         { name: "Unit 3", pdf: "unit3.pdf" },
    //         { name: "Unit 4", pdf: "unit4.pdf" },
    //         { name: "Unit 5", pdf: "unit5.pdf" },
    //     ],
    // }
};

export default function About() {
    const [selectedNotesSemester, setSelectedNotesSemester] = useState(null);

    return (
        <div className='container my-5'>
            <h1 className='text-center'>MCA Syllabus & Notes</h1>

            {/* MCA Syllabus Section */}
            <div className='card shadow-lg p-4 my4'>
                <h3 className='text-primary'>MCA Syllabus</h3>
                <div>
                    <a href={syllabusData["MCA Syllabus"][""][0].pdf} download className='btn btn-primary'>
                        Download Syllabus
                    </a>
                </div>
            </div>

            {/* MCA Notes Section */}
            <div className='card shadow-lg p-4 my-4'>
                <h3 className='text-primary'>MCA Notes</h3>
                <div className='accordion' id='notesAccordion'>
                    {Object.keys(notesData).map((semester, index) => (
                        <div className='accordion-item' key={index}>
                            <h2 className='accordion-header'>
                                <button 
                                    className='accordion-button' 
                                    type='button' 
                                    onClick={() => setSelectedNotesSemester(selectedNotesSemester === semester ? null : semester)}>
                                    {semester}
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${selectedNotesSemester === semester ? "show" : ""}`}>
                                <div className='accordion-body'>
                                    {Object.keys(notesData[semester]).map((subject, idx) => (
                                        <div key={idx} className='mb-3'>
                                            <h5>{subject}</h5>
                                            <ul className='list-group'>
                                                {notesData[semester][subject].map((unit, uIdx) => (
                                                    <li className='list-group-item d-flex justify-content-between' key={uIdx}>
                                                        {unit.name}
                                                        <a 
                                                            href={unit.pdf || "#"} 
                                                            download 
                                                            className={`btn btn-primary btn-sm ${!unit.pdf ? "disabled" : ""}`}
                                                        >
                                                            {unit.pdf ? "Download" : "Notes Not Available"}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
