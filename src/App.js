
import './App.css';
// import React, { useEffect, useState } from "react";
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Widgets from './Widgets';
// import Directchat from './Directchat';
import { General } from './UI/genral';
import { Routes, Route } from 'react-router-dom';
import Topnavigate from './LayoutOption/Topnavigate';
import Topnav from './LayoutOption/Topnav';
import Boxed from './LayoutOption/Boxed';
import Fixedbar from './LayoutOption/Fixedbar';
import Fixedsidebar from './LayoutOption/Fixedsidebar';
import Chart from './charts/Chart';
import Flot from './charts/Flot';
import Button from './UI/Button';

// import Button from 'react-bootstrap/Button';



//import Profile from './Socialwidgets';


// const handleSubmit = (e) => {
//   e.preventDefault();
//   const newText= { text };
//   fetch("/", {
//     method: "POST",
//     header: {"content-Type": "application/JSON"},
//     body: JSON.stringify(newText)
//   }) 
// }

function App() {
  // const [apiResponse, setAPIResponse] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:8080/testAPI')
  //     .then((res) => res.text())
  //     .then((res) => setAPIResponse(res));
  // }, []);



  return (

    <div class="wrapper">


      {/* <p>A simple React app.....</p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <form action="../../post" method="post"
        className="form">
        <button type="submit">Connected?</button>
      </form> */}

      <Header />
      <Menu />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/widgets" element={<Widgets />} />
        {/* <Route path='/DirectChat' element={<Directchat />} /> */}
        {/* <Route path='/Profile' element={<Profile />} /> */}
        <Route path='/General' element={<General />} />
        <Route path='/Topnavigate' element={<Topnavigate />} />
        <Route path="/Topnav" element={<Topnav />} />
        <Route path="/Boxed" element={<Boxed />} />
        <Route path="/Fixedbar" element={<Fixedbar />} />
        <Route path="/Fixedsidebar" element={<Fixedsidebar />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Flot" element={<Flot />} />
        <Route path="/Button" element={<Button />} />
        {/* <Route path='/topnav'  element={</Topnavigation/>} /> */}
      </Routes>
      <Footer>
        <Footer />
      </Footer>
    </div>

  );
}

// import React from "react";
// import { useState } from "react";


// function App() {
//   const [isActive, setActive] = useState(false);
//   const [ctive, setCtive] = useState(false);

//   return (
//     // <div className={` ${isActive ? "shadow" : " shadow-lg"}  `}   >
//     <div className={isActive}   >
//       {/* <div className={`container top-3 ${ctive ? "info-box shadow-lg" : " shadow-lg"}`}> */}
//       <h1>Hello rock!!</h1>

//       <button onClick={() => setActive("info-box ")}>
//         change classname

//       </button>
//       <button onClick={() => setActive("info-box shadow-lg")}>
//         change classname
//  
//       </button>
//       <button onClick={() => setActive("info-box shadow")}>
//         change classname

//       </button>
//     </div >
//     // </div>  
//   )
// }
export default App;