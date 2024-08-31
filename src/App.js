
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


// import About from './pages/About';
import Idx from './pages/Idx';
import Contact from './pages/Contact';
import Nav from './pages/Nav';
import CampList from './pages/CampList';
import CampType from './pages/CampType';
import Login from './pages/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element={<Idx />} />
          <Route path='/Campaign Type' element={<CampType />} />
          <Route path='/Campaign List' element={<CampList />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/donor-login' element={<Login />} />
          
          
        </Routes>
      </BrowserRouter>
      {/* <Nav />
    <Idx />
    <CampType />
    <CampList />
    <Contact /> */}
     </div>
  );
}

export default App;
