import {Link} from 'react-router-dom';
const NavBar = () => {
    return (  
       <nav className="navbar">
        <div className="links">
            <Link to="/"><i className="fa-solid fa-house"></i></Link>
            <Link to="/aboutus">About us</Link>
            <Link to="/booknow">Book Now</Link>
            <Link to="/Login"><i class="fa-solid fa-user"></i></Link>
        </div>
       </nav>

    );
}
 
export default NavBar ;