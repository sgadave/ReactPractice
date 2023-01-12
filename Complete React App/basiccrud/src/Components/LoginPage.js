const LoginPage = () => {
    return (
        <div>
            <h1>LoginPage</h1>
            <form action="/welcome">
                <div>
                    <label htmlFor="name">User Name:</label>
                    <input type="text" name="name" id="name"></input>
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input type="password" name="password" id="password"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;