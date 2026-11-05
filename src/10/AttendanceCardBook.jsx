import React from "react";
import "./AttendanceCardBook.css";
import jwy from "./imgs/장원영.jpg";

const students = [
    {
        id: 1,
        name: "장원영",
        grade: "2",
        major: "인공지능소프트웨어",
        avatar: jwy
    },
    {
        id: 2,
        name: "안유진",
        grade: "1",
        major: "메카트로닉스",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "김리즈",
        grade: "2",
        major: "시각디자인",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        id: 4,
        name: "박레이",
        grade: "3",
        major: "스마트정보통신",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        id: 5,
        name: "가을",
        grade: "2",
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        id: 6,
        name: "최이서",
        grade: "1",
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg"
    }
];

function AttendanceCardBook() {
    return (
        <div className="attendance-container">
            <h2>학생 출석부</h2>
            <div className="student-list">
                {students.map(student => (
                        <div className="student-card" key={student.id}>
                            <img src={student.avatar} alt={student.name}/>
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 | {student.major}</p>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        </div>
    );
}

export default AttendanceCardBook