
import './dashboard.css';
import Frame8699 from "../../assets/Frame8699.svg";
import Tab from './Tab';
import Navbar from "../Navbar/NavBar";
 



function Dashboard() {
  return (
    <div className="App">
        <Navbar/>
      <div className='rectangle1'></div>
      <div className='rectangle2'></div>
      <div className='frame1'>
        <h1>Dashboard</h1>
        <img src={Frame8699} alt="catPhoto"></img>
        <div className='App'><Tab/></div>
       </div>
      <div className='dashzboard'></div>
      <div>
       
      </div>

     
      
    </div>
  );
}

export default Dashboard;
