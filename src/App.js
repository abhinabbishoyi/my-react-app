//import { logRoles } from '@testing-library/dom';
// import About from './About';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';

import {useState} from 'react';
import Alert from './Alert';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Routes,
//     Link
//   } from "react-router-dom";
  



//let name = (<h1>"Abhinab"</h1>);

function App() {


    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    function showAlert(message, type) {
        setAlert({
            msg: message,
            alertType: type
        }) ;

        setTimeout(() => {
            setAlert(null);
        }, 2000);


    }
    const toggleMode=()=>{
        if(mode==='dark'){
            setMode('light');

            document.body.style.backgroundColor= 'white';

            showAlert("Light mode is enabled","success");

            document.title = "TextUtils - light"
        }

        else{
            setMode('dark');

            document.body.style.backgroundColor = '#222324';
            showAlert("Dark mode is enabled","success");
            document.title = "TextUtils - dark"
        }
    } 


    return (
        <>
        {/* <Router> */}
        <Navbar title="TextUtils" aboutProps="About Us" mode ={mode}  toggleMode={toggleMode}/>

        <Alert alert={alert}/>

        {/* <Routes>
          <Route path="/about" element={<About />}>
            {/* <About /> */}
          {/* </Route> */}
{/*  */}
          
{/*           
          </Route>
        </Routes>
        </Router> */}
      <Textform label="Enter text to analyse"  mode ={mode}/>  
        {/* can send in Textform as well like showAlert={showAlert} and use in all utility func */}
        {/* <About /> */}
        </>
    );
}

export default App;
//export default name;