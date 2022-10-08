import { NavLink } from "react-router-dom";
import Button from "@components/Button";
import exitSVG from "@icons/exit.svg";
import "@styles/navBar.css";

const NavBar = ({ isOpen, setIsOpen }) => {
  const show = isOpen ? "show" : "";

  const _handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navBar ${show}`}>
      <div className='navBar-logo'>
        <h2 className='navBar-title'>Moniger</h2>
        <p className='navBar-text'>Track your activities</p>
        <span className='navBar-underscore'></span>
        <div onClick={_handleClick} className='navBar-exit'>
          <img src={exitSVG} alt='exit icon' />
        </div>
      </div>
      <ul className='navBar-list'>
        <li className='navBar-list-item'>
          <NavLink onClick={_handleClick} to='/' className='navBar-list-link' href='#'>
            Home
          </NavLink>
        </li>
         <li className='navBar-list-item'>
          <NavLink onClick={_handleClick} to='transactions' className='navBar-list-link' href='#'>
            Transactions
          </NavLink>
        </li>
        <li className='navBar-list-item'>
          <NavLink onClick={_handleClick} to='about' className='navBar-list-link' href='#'>
            About
          </NavLink>
        </li>
        <li className='navBar-list-item'>
          <NavLink onClick={_handleClick} to='contact' className='navBar-list-link' href='#'>
            Contact
          </NavLink>
        </li> 
      </ul>
      <Button title='Log out' classButton='navBar-button' />
    </nav>
  );
};

export default NavBar;
