//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   //Link
// } from "react-router-dom";

function App() {
  const [mode,setdark] = useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert(
      {
        msg : message,
        type : type
      }
    )
    setTimeout(()=>{
        setAlert(null);
    },3000
    );
  }
  const toggleMode = ()=>{
    if(mode === 'dark')
    {
      setdark('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - light mode";
    }
    else
    {
      setdark('dark');
      document.body.style.backgroundColor = '#042743';// color
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - dark mode";
    }
  }
  return (
    <>
      {/* <Router> */}
      <NavBar title ="TextUtilsss" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='Container my-3'>
        {/* <Routes>
            <Route exact path="/" element={<Textform showAlert ={showAlert} heading ="Enter your Text to Analyze below" mode={mode}/>} />
            <Route exact path="/about" element={<About/>} />
        </Routes> */}
        <Textform showAlert ={showAlert} heading ="Enter your Text to Analyze below" mode={mode}/>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
