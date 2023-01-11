import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <Link to="/login">
                <button type="button">Login</button>
            </Link>
        </div>
    )
}

export default NavBar;