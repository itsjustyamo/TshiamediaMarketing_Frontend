// import { useAuth } from '../contexts/auth_context';
import Navbar from "../components/navbar"; 
import Footer from "../components/footer"
import DigitalStrategy from "../components/digitalstrategy";
import GraphicDesign from "../components/graphicdesign";
import SocialMediaManagement from "../components/socialmediamanagement";
import WebDevelopment from "../components/webdevelopment";


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
        <SocialMediaManagement/>
        <GraphicDesign/>
        <WebDevelopment/>
      </ul>
        <Footer/>
  </>
  );
};

export default Services;