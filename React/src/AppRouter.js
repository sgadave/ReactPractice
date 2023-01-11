import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";


const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage></HomePage>}>
                    </Route>
                    <Route path="/login" element={<LoginPage></LoginPage>}>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter;