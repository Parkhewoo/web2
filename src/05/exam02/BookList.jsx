import React from "react";
import Book from "./Book";
import "./BookList.css";

// 데이터 배열(HashMap, JSON type)
const books = [
{title: "처음 만난 리액트",
    author: "김소플",
    coverImage: "https://cdn.frontoverflow.com/courses/xWku7JUXdk_iN8zUCBqZM/images/first-met-react_book.webp"},
    {title: "데이터베이스 실습",
        author: "박우창",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791156644576.jpg?t=2981530"},
    {title: "난생 처음 자바",
        author: "우재남",
        coverImage: "https://cdn-prod.hanbit.co.kr/books/B5395686917_l.jpg"},
    {title: "데이터베이스 실습",
        author: "박우창",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791156644576.jpg?t=2981530"},
    {title: "난생 처음 자바",
        author: "우재남",
        coverImage: "https://cdn-prod.hanbit.co.kr/books/B5395686917_l.jpg"}
]
function BookList(){
    return(
        <div className={"bookListWrapper"}>
            {books.map((books) =>{
                return(
            <Book
                title={books.title}
                author={books.author}
                coverImage={books.coverImage}
            />
                );
            })}
        </div>
    );
}

export default BookList;