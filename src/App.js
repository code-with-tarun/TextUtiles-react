import { useState } from 'react';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");

  const darkmode = () => {
    if (mode === "dark") {
      setmode("light");

      document.body.style.backgroundColor = "white";
      document.body.style.color = "#1c3855";
      document.title = "text utils";

    } else {
      setmode("dark");

      document.body.style.backgroundColor = "#1c3855";
      document.body.style.color = "white";
      document.title += "-dark mode";
    }
  }
  return (
    <>
      <NavBar title="TextUtiles" darkmode={darkmode} modename={mode} />
      <TextForm />

      {/* <BrowserRouter>
        <NavBar title="menubar" darkmode={darkmode} modename={mode} />
        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text" modename={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter> */}
    </>
  );
}

export default App;
