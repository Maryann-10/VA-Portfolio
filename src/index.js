import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavigationBar from './Navbar';
import About from './About';
import Services from './Services';
import Project from './Project';
import Skills from './Skills';
import Tools from './Tools';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationBar />
    <About />
    <Services />
    <Project />
    <Skills />
    <Tools />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
