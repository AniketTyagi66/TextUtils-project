import './App.css';
import About from './Components/About';
import Navbar from './Components/navbar';
import TextForm from './Components/TextForm';
import Alert1 from './Components/Alert1';
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "Success")
    }
    else {
      setMode("light");
      showAlert("Light mode has been enabled", "Success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        <Alert1 alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze" />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
