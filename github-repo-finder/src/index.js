import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainBody from './MainBody';
import reportWebVitals from './reportWebVitals';

const headerStyle={
  backgroundColor:"#479f76",
  padding:"20px"
}

ReactDOM.render(
  <React.StrictMode>
    <div style={headerStyle}><h2> GITHUB REPO FINDER </h2></div>
    <MainBody />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
