const RegistrationForm = () => {

    return(
    <div className="RegistrationForm">
          <div className="form-body"></div>
          {/* <p>Fill in your information to book your appointment</p> */}

            <div className="name">
            <input type="name" placeholder='Your pets Name'  id="name" autoComplete="off">

            </input>
            </div>

            <div className="age">
            <input type="age" placeholder='Your pets Age' id="age" autoComplete="off">

           </input>
            </div>
            
            <div className="breed">
            <input type="breed" placeholder='Your pets Breed' id="breed" autoComplete="off"  >

            </input>
            </div> 

            <div className="email">
            <input type="email" placeholder='Your Email' id="email" autoComplete="off">

            </input>
            </div>

            <div className="password">
            <input type="password" placeholder='Your Password' id="password" autoComplete="off">

            </input>
            </div>

            <button type="submit" className="registerbtn">Submit</button>
    </div>
 
 
    )
 
 
 };
 
 export default RegistrationForm;           