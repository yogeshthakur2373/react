
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Widgets from './Widgets';
import Directchat from './Directchat';
import { General } from './UI/genral';
import { Routes, Route } from 'react-router-dom';
import { Topnavigate } from './LayoutOption/Topnavigate';
import { Topnav } from './LayoutOption/Topnav';
import Button from 'react-bootstrap/Button';

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

  return (

    <div class="wrapper">

      <Header />

      <Menu />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route path='/DirectChat' element={<Directchat />} />
        {/* <Route path='/Profile' element={<Profile />} /> */}
        <Route path='/General' element={<General />} />
        <Route path='/Topnavigate' element={<Topnavigate />} />
        <Route path="/Topnav" element={<Topnav />} />
        {/* <Route path='/topnav'  element={</Topnavigation/>} /> */}
      </Routes>

      <Footer />
    </div>

  );
}

export default App;
