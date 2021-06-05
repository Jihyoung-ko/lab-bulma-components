import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar.js';
import Formfield from '../formfield/FormField.js';
import CoolButton from '../coolbutton/CoolButton';

const SignUp = () => {
  return (
    <div className="signup-container">
      <Navbar />
      <div className="signup-form content">
        <h1 className="has-text-centered">Sign Up</h1>
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />  
        <Formfield label="Password" type="password" placeholder="********" />  
        <div className="submit-btn">
          <CoolButton isPrimary text="Submit" />
        </div>
      </div>
    </div>
  )
}

export default SignUp;