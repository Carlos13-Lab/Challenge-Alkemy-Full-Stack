import { Link } from 'react-router-dom'
import logoSVG from '@icons/logo.svg'
import '@styles/logo.css'

const Logo = () => {
    return (
        <Link to='/' className='logo'>
            <img src={logoSVG} alt="logo moniger icon" />
        </Link>
    )
}

export default Logo