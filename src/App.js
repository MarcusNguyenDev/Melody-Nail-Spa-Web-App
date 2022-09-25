import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import StaffPortal from './Pages/StaffPortal';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import DashBoard from './Components/StaffPortal/Dashboard/DashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/staffportal' element={<StaffPortal/>}>
            <Route path='/staffportal/dashboard' element={<DashBoard/>}/>
          </Route>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
