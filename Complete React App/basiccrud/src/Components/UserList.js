import { useEffect, useState } from "react";
import UserServices from "./AxiosConnection";


const UserList = () => {
    
    let [UserArr, SetUserArr] = useState([]);

    useEffect(() => {
        UserServices.getUsers().then((res) => {
            console.log("In UserList Use Effect");
            console.log(res.data);
            SetUserArr(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const renderList = () => {
        return (
            UserArr.map((user) => {
                return <tr><td>{user.FirstName}</td></tr>
            })
        )
    }

    return (
        <div>
            <table border="2">
            <thead>
                <tr><th>User FirstName</th></tr>
            </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;