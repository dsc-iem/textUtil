 //import PropTypes from 'prop-types';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(() => {
    setAlert(null);
  }, 3000);
}

 const toggleMode = () =>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#0a055e';
    showAlert("Dark mode has been enabled","success");
    // #71767a
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
  
 }

  return (
   
    <>
    {/* <Router> */}
      {/* <Navbar /> for the default title and aboutText */}
     <Navbar title="TextUtil" aboutText="About" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
     <div className="container my-3">

       
         
            {/* <About /> */}
       
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
         
      
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
      </Routes> */}
      
     </div>
    {/* </Router> */}
    </>
  );
}

export default App;
