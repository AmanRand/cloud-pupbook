import cloudImage from './pics/cloudy.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home">
            <h1 className="slide-in-welcome">Welcome to Cloud's PupBook</h1>
            <h1 className="slide-in-welcome">Booking made easy for your furry best friends!</h1>
          
        <div className="content">      
        
        <div className="button-container">
        <Link to="/booknow" className="bookbutton">Book Now</Link>
        </div>

        <div className="icon-container">
            <div className="icon">
         
             <i className="fa-solid fa-dog" style={{ fontSize: '60px' }}></i>
             
                <h3>Make a profile for your furry ones</h3>
        </div>
        <div className="icon"> 
           
             <i className="fa-regular fa-calendar-check" style={{ fontSize: '60px' }}></i>
          
                <h3>Select a date for the appointment</h3>
        </div>
        
             <div className="icon">
                <i className="fa-regular fa-face-smile-beam" style={{ fontSize: '60px'}}></i>
                <h3>Bring em in for the service!</h3>
                </div>    
         </div>
  
            

        <div className="image-container"> </div> 
        <img src={cloudImage} alt="Cloud" className='cloudy' />

       
        </div> 
        </div>
       
       );
      
 }
 
 export default Home; 