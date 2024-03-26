import './App.css'
import { Route,Routes } from 'react-router-dom';

//import pages
// import AuthPage from './pages/auth';
import Dashboard from './pages/dashboard';
import LogIn from './pages/LogIn';
import Services from './pages/services';

// import Navbar from './components/navbar';
// import ProtectedRoutes from './components/protectedRoutes';
// import Login_form from './components/login_form';
// import Signup_form from './components/signup_form';
// import Footer from './components/footer';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    {/* <Navbar />
    <h1>My Movie App</h1>
    <p>gravfcgwcuwbcubwcuqwbcuqwbc
      nhliwhcnpiqwcnpiqwencliwaqhebvchluqebvlaerivbavbn;iaqe
    </p>
    <h1>bcuebcvuohaebcouhawbcnohuqwcbouhqecbfaeuhbcuehbcvaefkuhcb quhbcvehuj</h1>
    <Footer/> */}
    </>
  );
};

export default App
