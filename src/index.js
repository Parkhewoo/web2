import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import TodoListApp from "./01/TodoListApp";
import reportWebVitals from './reportWebVitals';
// import Library from "./03/Library";
// import './03/Book.css'
// import './01/TodoListApp.css'
// import Clock from "./04/Clock"
// import './04/Clock.css'
// import ConfirmDialog from "./04/ConfirmDialog";
// import ConfirmDialogList from "./04/ConfirmDialogList";
// import WelcomeList from "./05/exam01/WelcomeList";
// import BookList from "./05/exam02/BookList";
// import UserInfoList from "./05/exam03/UserInfoList";
import NotificationList from "./06/NotificationList";
// import ConfirmButton2 from "./08/ConfirmButton2";
// import MessageSend from "./08/MessageSend";
// import Greeting from "./09/ex1/Greeting";
// import Mailbox from "./09/ex3/Mailbox";
// import LogControl2 from "./09/ex3/LogControl2";
import MainPage from "./09/ex4/MainPage";
import LandingPage from "./09/ex5/LandingPage";
// import LogControl from "./09/ex2/LogControl";
// import MyButton2 from "./08/MyButton2";
// import ConfirmButton from "./08/ConfirmButton";
// import "./06/NotificationList.css";
// import Counter3 from "./07/01/Counter3";
// import TextInputWithFocusButton from "./07/02/TextInputWithFocusButton";
// import Accommodate from "./07/02/Accommodate";
// import Toggle from "./08/Toggle";
// import MyButton from "./08/MyButton";
// import Toggle2 from "./08/Toggle2";


const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <LandingPage/>
    </React.StrictMode>
  );
}, 1000
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
