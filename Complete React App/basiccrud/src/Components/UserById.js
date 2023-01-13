import { useEffect, useState } from "react";
import UserServices from "./AxiosConnection";


const UserById = () => {

    let [UserId, SetUserId] = useState("");

    let [userObj, SetUserObj] = useState([]);

    

    const handleChange = (event) => {
        // const { name, value } = event.target;
        // SetUserId({ ...userObj, [name]: value });
        const name = event.target;
        SetUserId(name.value);
    }

    const GetUserbyid = () => {
        UserServices.getUserbyid(UserId).then((result) => {
            SetUserObj(result.data);
        })
        renderList();
    }

    const renderList = () => {
        return (
            userObj.map((user) => {
                return <tr><td>{user.FirstName}</td></tr>
            })
        )
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" name="fname" id="fname" value={UserId.fname} onChange={handleChange}></input>
                </div>
                <button type="button" onClick={GetUserbyid }>Submit</button>
            </form>
            <table border="2">
                <thead>
                    <tr><th>User FirstName</th></tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div >
    )
}

export default UserById;