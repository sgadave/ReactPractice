import { useState } from "react";

import UserServices from "./AxiosConnection";

const RegistrationPage = () => {
    
    let [userObj, SetUserObj] = useState({ fname: "", lname: "", email: "", password: "" });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        SetUserObj({ ...userObj, [name]: value });
    }

    const addUserData=()=>{
        UserServices.addUsers(userObj).then((result)=>{
            console.log(result.data);
        })
    }


    return (
        <div>
            <h1>RegistrationPage</h1>
            <form action="/" method="post " >
                <div>
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" name="fname" id="fname" value={userObj.fname} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" name="lname" id="lname" value={userObj.lname}  onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="text" name="email" id="email" value={userObj.email}  onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input type="password" name="password" id="password" value={userObj.password}  onChange={handleChange}></input>
                </div>
                <button type="submit" onClick={addUserData}>Submit</button>
            </form>
        </div>
    )
}

export default RegistrationPage;