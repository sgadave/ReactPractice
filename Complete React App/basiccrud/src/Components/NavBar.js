import {Link} from "react-router-dom";

const NavBar=()=>{
    return (
        <div>
            <Link to="/registration"><button type="button">Registration</button></Link>
            <Link to="/login"><button type="button">Login</button></Link>
            <Link to="/userdata"><button type="button">Data</button></Link>
        </div>
    )
}

export default NavBar;



// const HomePage=()=>{
//     return(
//         <div>
//             <h1>Welcome to IACSD</h1>
//         </div>
//     )
// }

// export  {HomePage,NavBar};

// export { NavBar, if there are multiple functions seperate by comma }