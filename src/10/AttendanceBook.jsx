import React from "react";

const students = [
    { id: 1, name: "Ine" },
    { id: 2, name: "Steve" },
    { id: 3, name: "Bill" },
    { id: 4, name: "Jeff" },
];

function AttendanceBook() {
    return (
        <div >
            <h2 > 출석부</h2>
            <ul >
                {students.map((student) => (
                    <li key={student.id} >
                        <span>{student.name[0]}</span>
                        {student.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AttendanceBook;