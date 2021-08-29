import { useState } from 'react';
import './App.css';
import Alert from './componets/Alert';
import Navbar from './componets/Navbar';
import TextFrom from './componets/TextFrom';
// import About from './componets/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtilis-Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtilis-Light Mode'
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Text-Utils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
        <TextFrom showAlert={showAlert} heading="Enter the text to analyze below " mode={mode} />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* // </Router> */}
    </>
  );
}

export default App;