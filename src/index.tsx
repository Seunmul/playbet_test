import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// /*@ts-expect-error : .tsx */
// import App from './App.tsx';

import SignIn  from './page-login/sign-in'; 


// interface User {
//   name: string;
//   id: number;
//   age: number;
// }

// const user : User={
//   name: "geonha",
//   id:1,
//   age: 24
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App message = "test" user={user}/> */}
    <SignIn />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

