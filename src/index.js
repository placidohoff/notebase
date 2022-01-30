import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main/Main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const test = {}
ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);

// function ChapterProvider({ children }) {
//   let [user, setUser] = React.useState<any>(null);

//   let signin = (newUser, callback) => {
//     return fakeAuthProvider.signin(() => {
//       setUser(newUser);
//       callback();
//     });
//   };

//   let signout = (callback) => {
//     return fakeAuthProvider.signout(() => {
//       setUser(null);
//       callback();
//     });
//   };

//   let value = { user, signin, signout };

//   return <ChapterContext.Provider value={value}>{children}</ChapterContext.Provider>;
// }
