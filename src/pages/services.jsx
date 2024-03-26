// import { useAuth } from '../contexts/auth_context';
import Navbar from "../components/navbar"; 
import Footer from "../components/footer"
import DigitalStrategy from "../components/digitalstrategy";


// const Dashboard = () => {
//   const { logout } = useAuth();

//   const handleClick = () => {
//     logout();
//   };
  function Services (){

  return (
   <>
        <Navbar/>
      <h1>This is Services page</h1>
      <ul>
        <DigitalStrategy/>
        <ol>Social Media management</ol>
        <ol>Graphic Design</ol>
        <ol>Web development</ol>
      </ul>
        <Footer/>
  </>
  );
};

export default Services;