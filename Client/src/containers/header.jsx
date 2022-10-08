import { useState } from 'react'
import NavBar from '@components/NavBar'
import Logo from '@components/logo'
import menuSVG from '@icons/menu.svg'
import '@styles/header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const _handleClick = () => setIsOpen(true)

    return (
        <header className='header'>
            <button className='header-menu' onClick={_handleClick}>
                <img src={menuSVG} alt="menu icon" />
            </button>
            <Logo />
            <NavBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </header>
    )
}

export default Header