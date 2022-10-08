import '../styles/index.css'
import "@styles/App.css";

import ProtectedRoutes from "@containers/Layout";
// import Home from "@pages/Home";
// import TransactionPage from "@pages/TransactionPage";
// import AboutPage from "@pages/AboutPage";
// import ContactPage from "@pages/ContactPage";
// import PublicRoutes from "@containers/PublicRoutes";
// import WelcomePage from "@pages/WelcomePage";
// import LoginPage from "@pages/LoginPage";
// import RegisterPage from "@pages/RegisterPage";

import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { useSelector } from "react-redux";


function App() {
    
  //   const user = useSelector ((state) => state.user);  
  //   window.localStorage.setItem("loggedAppUser", JSON.stringify(user));
 
  // if(user.token){
  //   return (
  //     <BrowserRouter>
  //       <Routes> 
  //         <Route path="/" element={<WelcomePage />}> </Route>
  //         <Route exact path='/login' element={<LoginPage />} />
  //         <Route exact path='/register' element={<RegisterPage />} />
  //       </Routes>
  //     </BrowserRouter>
  //   )
  // }

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );

}
export default App
