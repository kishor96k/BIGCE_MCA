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
        "DSA (MCAC102)": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-1.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-2.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-3.pdf" },
            { name: "Unit 4", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-4.pdf" },
            { name: "Unit 5", pdf: "/MCA-I/Sem-I/DSA/Data Structure Algorithms Unit-5.pdf" },
        ],
        "JAVA Programming (MCAC105 )": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-I/JAVA/UNIT- I JAVA.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-I/JAVA/UNIT- II JAVA.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-I/JAVA/UNIT- III JAVA.pdf" },
            { name: "Unit 4", pdf: "/MCA-I/Sem-I/JAVA/UNIT- I JAVA.pdf" },
            { name: "Unit 5", pdf: "/MCA-I/Sem-I/JAVA/UNIT V.pdf" },
        ],
        "Operating System (MCAC101)": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-I/OS/Unit1-OS.pdf" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        "DBMS (MCAC103 )": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        "Probability and statistics (MCAC104 )": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-I/PS/Unit1.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-I/PS/Unit2.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-I/PS/Unit3.pdf" },
            { name: "Unit 4", pdf: "/MCA-I/Sem-I/PS/Unit4.pdf" },
            { name: "Unit 5", pdf: "/MCA-I/Sem-I/PS/Unit5.pdf" },
        ],
    },
    "Semester 2": {
        "Object Design & Agile Development (ODAD) (MCAC201 ) ": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        "Computer Networks (CN) (MCAC202 )": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        "Artificial Intelligent (AI) (MCAC203 )": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        " Advance Database Technologies (MCAE204) ": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        " Research Methodology (MCAHM205)": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
    },
    "Semester 3": {
        "Full Stack Development (FSD) (MCAC301)": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-III/ML/FSD/FSD1.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-III/ML/FSD/FSD2.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-III/ML/FSD/FSD3.pdf" },
            { name: "Unit 4", pdf: "/MCA-I/Sem-III/ML/FSD/FSD4.pdf" },
            { name: "Unit 5", pdf: "/MCA-I/Sem-III/ML/FSD/FSD5.pdf" },
            { name: "Unit 6", pdf: "/MCA-I/Sem-III/ML/FSD/FSD6.pdf" },
        ],
        "Machine Learning (ML)(MCAC302)": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-III/ML/ML UNIT -I.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-III/ML/ML UNIT -II.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-III/ML/ML UNIT -III.pdf" },
            { name: "Unit 4", pdf: "/MCA-I/Sem-III/ML/ML UNIT -IV.pdf" },
            { name: "Unit 5", pdf: "/MCA-I/Sem-III/ML/ML UNIT -V.pdf" },
        ],
        "Mobile Application Development(MCAC303) ": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        "Cloud Computing (CC)(MCAE304)": [
            { name: "Unit 1", pdf: "" },
            { name: "Unit 2", pdf: "" },
            { name: "Unit 3", pdf: "" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
        " Software Testing and Tools(MCAE305) ": [
            { name: "Unit 1", pdf: "/MCA-I/Sem-III/STT/STT UNIT I.pdf" },
            { name: "Unit 2", pdf: "/MCA-I/Sem-III/STT/STT UNIT 2.pdf" },
            { name: "Unit 3", pdf: "/MCA-I/Sem-III/STT/STT UNIT 3.pdf" },
            { name: "Unit 4", pdf: "" },
            { name: "Unit 5", pdf: "" },
        ],
    },

};
const labManuals = {
    "Semester 1": [
        { name: "Web Lab", pdf: "" },
        { name: "Java Lab", pdf: "" },
        { name: "Python Lab", pdf: "" },
        { name: "DBMS Lab", pdf: "" },
    ],
    "Semester 2": [
        { name: "AI Lab", pdf: "" },
        { name: "ODADDL Lab", pdf: "" },
        { name: "Data Analysis with Python Lab", pdf: "" },
        { name: "ADT Lab", pdf: "" },
    ],
    "Semester 3": [
        { name: "ML Lab", pdf: "" },
        { name: "MAD Lab", pdf: "" },
        { name: "CC Lab", pdf: "" },
        { name: "FSD Lab", pdf: "" },
    ],
};

export default function About() {
    const [selectedNotesSemester, setSelectedNotesSemester] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedLabSemester, setSelectedLabSemester] = useState(null);

    return (
        <div className='container my-5'>
            <h1 className='text-center'>📚 MCA Syllabus & Notes</h1>

            {/* MCA Syllabus Section */}
            <div className='card shadow-lg p-4 my-4'>
                <h3 className='text-secondary'>📜 MCA Syllabus</h3>
                <div className='text-center'>  {/* Ensures normal width */}
                    <a href={syllabusData["MCA Syllabus"][""][0].pdf} download className='btn btn-primary'>
                        📥 Download Syllabus
                    </a>
                </div>
            </div>




            {/* MCA Notes Section */}
            <div className='card shadow-lg p-4 my-4'>
                <h3 className='text-secondary'>📖 MCA Notes</h3>
                <div className='accordion' id='notesAccordion'>
                    {Object.keys(notesData).map((semester, index) => (
                        <div className='accordion-item' key={index}>
                            <h2 className='accordion-header'>
                                <button className='accordion-button' type='button'
                                    onClick={() => {
                                        setSelectedNotesSemester(selectedNotesSemester === semester ? null : semester);
                                        setSelectedSubject(null);
                                    }}>
                                    📚 {semester}
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${selectedNotesSemester === semester ? "show" : ""}`}>
                                <div className='accordion-body'>
                                    {Object.keys(notesData[semester]).map((subject, idx) => (
                                        <div key={idx} className='mb-3'>
                                            <button className='btn btn-secondary dropdown-toggle w-100 text-start'
                                                onClick={() => setSelectedSubject(selectedSubject === subject ? null : subject)}>
                                                📌 {subject}
                                            </button>
                                            {selectedSubject === subject && (
                                                <ul className='list-group mt-2'>
                                                    {notesData[semester][subject].map((unit, uIdx) => (
                                                        <li className='list-group-item d-flex justify-content-between align-items-center' key={uIdx}>
                                                            📄 {unit.name}
                                                            <a href={unit.pdf || "#"} download className={`btn btn-primary btn-sm ${!unit.pdf ? "disabled" : ""}`}>
                                                                {unit.pdf ? "📥 Download" : "❌ Not Available"}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lab Manuals Section */}
            <div className='card shadow-lg p-4 my-4'>
                <h3 className='text-secondary'>🧪 Lab Manuals</h3>
                <div className='accordion' id='labAccordion'>
                    {Object.keys(labManuals).map((semester, index) => (
                        <div className='accordion-item' key={index}>
                            <h2 className='accordion-header'>
                                <button className='accordion-button' type='button'
                                    onClick={() => setSelectedLabSemester(selectedLabSemester === semester ? null : semester)}>
                                    🖥️ {semester}
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${selectedLabSemester === semester ? "show" : ""}`}>
                                <div className='accordion-body'>
                                    <ul className='list-group'>
                                        {labManuals[semester].map((lab, idx) => (
                                            <li className='list-group-item d-flex justify-content-between align-items-center' key={idx}>
                                                📝 {lab.name}
                                                <a href={lab.pdf || "#"} download className={`btn btn-primary btn-sm ${!lab.pdf ? "disabled" : ""}`}>
                                                    {lab.pdf ? "📥 Download" : "❌ Not Available"}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
