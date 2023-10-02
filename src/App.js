import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import './index.css';
import Home from './Home';
import NavBar from './NavBar';
import BookNow from './BookNow';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <i className='fas fa-cloud'></i>

      <Router>
        <NavBar>
        <Link to='/Home'></Link>
        <Link to='/AboutUs'></Link>
        <Link to='/BookNow'></Link>
        <Link to='/Login'></Link>

        </NavBar>

        <Routes>
        {/* This sets Home as the main defautl startup page */}
        <Route path='' element={<Home />} />
        <Route path='/Home' element={<Home/>} />   
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/BookNow' element={<BookNow/>} />   
        <Route path='/Login' element={<Login/>} />   

        </Routes>

      </Router>

        <div className="content">
      
  <Footer></Footer>
    </div>
       
    
    </div>
  );
}

export default App;
