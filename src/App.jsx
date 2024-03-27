import './App.css'
import { Route,Routes } from 'react-router-dom';

//import pages
// import AuthPage from './pages/auth';
import Dashboard from './pages/dashboard';
import LogIn from './pages/LogIn';
import Services from './pages/services';
import ContactUs from './pages/contactus';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
    </Routes>
    </>
  );
};

export default App
