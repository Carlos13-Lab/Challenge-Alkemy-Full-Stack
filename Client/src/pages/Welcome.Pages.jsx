import { Link } from "react-router-dom";
import Logo from '@components/Logo';
import Arrow1 from '@components/Right-Arrow1';
import Arrow2 from "@components/Right-arrow2";

import '../styles/welcome.css'
const WelcomePage = () => {
    return (
      <main className='welcome'>
        <div className='welcome-container'>
          <h1 className='welcome-logo'>
            <Logo />
          </h1>
          <p className='welcome-text'>
            Welcome <span>MONEY</span>
          </p>
          <div className="welcome-buttons">
            <button className='welcome-button1'><Link to='/login'>Sign In <Arrow1/></Link></button>
            <button className='welcome-button2'><Link to='/register'>Sign Up <Arrow2/></Link></button>
          </div>     
        </div>
      </main>
    );
}

export default WelcomePage