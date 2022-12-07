// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert'; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';


function App() {
  const [mode, setMode] = useState('light ')     // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  } 

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = "KK - Dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "KK - Light mode";
    }
  }

  return (
    <>
    <Router>
    <Navbar title = "KK Services2" aboutKK = "About" mode={mode} toggleMode={toggleMode}/>
    {/* {<Navbar/>} */}

    <Alert alert={alert}/>

    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" />} />
          </Routes>
    {/* <About/>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
    </div>
    </Router>
    </>
  );
}

export default App;
