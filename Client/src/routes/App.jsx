import '../styles/index.css'
import LoginPage from '../pages/Login.Pages'
import RegisterPage from '../pages/Register.Pages'
import WelcomePage from '../pages/Welcome.Pages';
import Layout from '../containers/LayoutContainer';
import Home from '../pages/Home.Pages';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
    
    const user = useSelector ((state) => state.user);  
    window.localStorage.setItem("loggedAppUser", JSON.stringify(user));
 
  if(!user.token){
    return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<WelcomePage />}> </Route>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}
export default App
