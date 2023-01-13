import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
import UpdateUserPage from "./Components/UpdateUserPage";
import UserList from "./Components/UserList";
import UserById from "./Components/UserById";
import WelcomePage from "./Components/WelcomePage";

const AppRouter=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                <Route path="/registration" element={<RegistrationPage></RegistrationPage>}></Route>
                <Route path="/welcome" element={<WelcomePage></WelcomePage>}></Route>
                <Route path="/userdata" element={<UserList></UserList>}></Route>
                <Route path="/getbyid" element={<UserById></UserById>}></Route>
                <Route path="/updatedata" element={<UpdateUserPage></UpdateUserPage>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;