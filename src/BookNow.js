import RegistrationForm from "./RegistrationForm";
import { Link } from "react-router-dom";
const BookNow = () => {

   return(
    <div className="booknow">
        <h1>Registration </h1>
        <RegistrationForm></RegistrationForm>

       <h2> <Link to="/Login" className="Login">Already have an account?</Link> </h2>

   </div>
        
   

   )


};

export default BookNow;