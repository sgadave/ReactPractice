import { useState } from "react";

const LoginPage =()=>{
    let [name,setName]=useState("");
    let [password,setPassword]=useState("");
    const NameSet=(event)=>{
        setName(event.target.value);
    }

    const PasswordSet=(event)=>{
        setPassword(event.target.value);
    }
    return(
        <div>
            <form action="/">
                <div class="container">
                    <div>
                    <label Htmlfor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(event)=>{NameSet(event)}}></input>
                    </div>
                    <div>
                    <label Htmlfor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(event)=>{PasswordSet(event)}}></input>
                    </div>
                </div>
                <button type="submit">submit</button>
            </form>
            Hello
        </div>
    )
}

export default LoginPage;