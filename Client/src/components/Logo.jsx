import { Link } from "react-router-dom";
import logoSVG from "../assets/Page-1.svg";

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <img src={logoSVG} alt='logo moniger icon' width='95'/>
    </Link>
  );
};

export default Logo;
