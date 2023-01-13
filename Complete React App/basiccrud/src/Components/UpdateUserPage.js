import { useEffect, useState } from "react";
import UserServices from "./AxiosConnection";


const UpdateUserPage = () => {

    let [UserId, SetUserId] = useState("");
    // let [userObj,SetUserObj]=useState({ fname: "", lname: "", email: "", password: "" })
    let [firstName,setFirstname]=useState("");
    let [lastName,setLastname]=useState("");
    let [email,setEmail]=useState("");
    let [Password,setPassword]=useState("");
    
    

    const handleChange = (event) => {
        const name = event.target;
        SetUserId(name.value);
    }

    const GetUserbyid = () => {
        UserServices.getUserbyid(UserId).then((result) => {
            setFirstname(result.data[0].FirstName);
            // setLastname(result.data[0].LastName);
            // setEmail(result.data[0].Email);
            // setPassword(result.data[0].Password);
            console.log(result.data[0].FirstName)
        })
        // console.log(userObj)
    }

    // const UpdateUserdata =()=>{
    //     SetUserObj(firstName);
    // }


    return (
        <div>
            <form>
                <div>
                    <label htmlFor="fnameid">First Name:</label>
                    <input type="text" name="fnameid" id="fnameid" value={UserId.fname} onChange={handleChange}></input>
                </div>
                <button type="button" onClick={GetUserbyid }>Submit</button>
            </form>
            <form action="/" method="post " >
                <div>
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" name="fname" id="fname" value={firstName} onChange={handleChange}></input>
                </div>
                {/* <div>
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
                </div> */}
                {/* <button type="submit" onClick={UpdateUserdata}>Submit</button> */}
            </form>
        </div >
    )
}

export default UpdateUserPage;