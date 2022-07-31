import { Outlet } from 'react-router-dom'
import Header from '@containers/HeaderContainer'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout