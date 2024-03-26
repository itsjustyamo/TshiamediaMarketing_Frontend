// import { useAuth } from '../contexts/auth_context';
import Navbar from "../components/navbar"; 
import Footer from "../components/footer"

// const Dashboard = () => {
//   const { logout } = useAuth();

//   const handleClick = () => {
//     logout();
//   };
  function Dashboard (){

  return (
   <>
        <Navbar/>
      <h1>This is homepage</h1>
        <Footer/>
  </>
  );
};

export default Dashboard;