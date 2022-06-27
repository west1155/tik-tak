import React from "react";
import {useState} from "@types/react";



function Login () {

    const [user, setUser] = useState(null);
    const login = () => {
    }

    return (
        <div className={Login}>
            <label>Login</label>
            <form>
                <input
                    placeholder="userName" onChange={(event => {
                    setUser({ ...user, firstName: event.target.value});
                })}
                />
                <input
                    placeholder="password"
                    type={"password"}
                    onChange={(event => {
                        setUser({ ...user, firstName: event.target.value});
                    })}

                />
                <button onClick={login}> Login </button>
            </form>
        </div>
    )
}


export default Login;
